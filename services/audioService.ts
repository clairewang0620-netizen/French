class AudioService {
  private synthesis: SpeechSynthesis;
  private voice: SpeechSynthesisVoice | null = null;
  private retryCount: number = 0;
  private readonly MAX_RETRIES = 5;

  constructor() {
    this.synthesis = window.speechSynthesis;
    // Immediate load attempt on initialization
    this.loadVoices();
    // Listen for voices changed (crucial for Chrome/Safari)
    if (this.synthesis.onvoiceschanged !== undefined) {
      this.synthesis.onvoiceschanged = () => this.loadVoices();
    }
  }

  private loadVoices(): void {
    const voices = this.synthesis.getVoices();
    
    // If browser hasn't loaded voices yet, just return and wait for event or retry
    if (voices.length === 0) return;

    // Strategy: 
    // 1. Exact match for 'fr-FR'
    // 2. Fallback to any 'fr' (e.g., fr-CA) if fr-FR not found
    this.voice =
      voices.find((v) => v.lang === 'fr-FR') ||
      voices.find((v) => v.lang.startsWith('fr')) ||
      null;
  }

  public speak(text: string, rate: number = 0.9): void {
    // 1. Always cancel previous utterance to prevent overlapping/queueing lag
    this.cancel();

    // 2. Check if voice is ready. If not, try to load again.
    if (!this.voice) {
      this.loadVoices();
      
      // If still no voice, implement retry mechanism
      if (!this.voice) {
        if (this.retryCount < this.MAX_RETRIES) {
          this.retryCount++;
          // Delay retry to give browser time to load voices
          setTimeout(() => this.speak(text, rate), 100);
          return;
        }
        // If max retries reached, proceed. The 'lang' property on utterance 
        // will attempt to force the browser engine to use French even without a voice object.
      }
    }

    // Reset retry count on successful execution path
    this.retryCount = 0;

    const utterance = new SpeechSynthesisUtterance(text);
    
    // 3. Explicit Configuration
    // Mandatory language setting to force engine to French even if voice object is missing
    utterance.lang = 'fr-FR'; 
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Attach specific voice object if available (preferred for consistency)
    if (this.voice) {
      utterance.voice = this.voice;
    }

    // 4. Error Handling
    utterance.onerror = () => {
      // Silently handle errors to prevent console spam in production
    };

    this.synthesis.speak(utterance);
  }

  public cancel(): void {
    if (this.synthesis.speaking || this.synthesis.pending) {
      this.synthesis.cancel();
    }
  }

  public isAvailable(): boolean {
    return 'speechSynthesis' in window;
  }
}

export const audioService = new AudioService();