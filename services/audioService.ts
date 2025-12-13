class AudioService {
  private synthesis: SpeechSynthesis;
  private voice: SpeechSynthesisVoice | null = null;
  private isInitialized: boolean = false;

  constructor() {
    this.synthesis = window.speechSynthesis;
    if (this.synthesis.onvoiceschanged !== undefined) {
      this.synthesis.onvoiceschanged = this.loadVoices.bind(this);
    }
    this.loadVoices();
  }

  private loadVoices(): void {
    const voices = this.synthesis.getVoices();
    // Prioritize fr-FR, then any fr
    this.voice =
      voices.find((v) => v.lang === 'fr-FR') ||
      voices.find((v) => v.lang.startsWith('fr')) ||
      null;
    
    this.isInitialized = true;
  }

  public speak(text: string, rate: number = 0.9): void {
    if (!this.isInitialized || !this.voice) {
      // Try loading again if called before init
      this.loadVoices();
      if (!this.voice && this.synthesis.getVoices().length > 0) {
        console.warn('No French voice found. Using default.');
      }
    }

    // Cancel any current speaking
    this.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.voice) {
      utterance.voice = this.voice;
    }
    
    // Explicitly set lang as fallback
    utterance.lang = 'fr-FR';
    utterance.rate = rate; // Slightly slower is better for learning
    utterance.pitch = 1;

    // Error handling
    utterance.onerror = (event) => {
      console.error('Speech synthesis error', event);
    };

    this.synthesis.speak(utterance);
  }

  public cancel(): void {
    if (this.synthesis.speaking) {
      this.synthesis.cancel();
    }
  }

  public isAvailable(): boolean {
    return 'speechSynthesis' in window;
  }
}

export const audioService = new AudioService();