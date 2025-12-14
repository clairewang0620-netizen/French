
class AudioService {
  private synthesis: SpeechSynthesis;
  private voice: SpeechSynthesisVoice | null = null;

  constructor() {
    this.synthesis = window.speechSynthesis;
    this.loadVoices();
    if (this.synthesis.onvoiceschanged !== undefined) {
      this.synthesis.onvoiceschanged = () => this.loadVoices();
    }
  }

  private loadVoices(): void {
    const voices = this.synthesis.getVoices();
    if (voices.length === 0) return;

    // Strict priority: Exact match fr-FR -> any fr -> null
    this.voice =
      voices.find((v) => v.lang === 'fr-FR') ||
      voices.find((v) => v.lang.startsWith('fr')) ||
      null;
  }

  public speak(text: string, rate: number = 0.9): void {
    // CRITICAL: Always cancel before speaking to prevent queue lag
    this.synthesis.cancel();

    if (!this.voice) {
      this.loadVoices();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    
    // CRITICAL: Force language tag. This makes modern browsers use their 
    // internal French engine even if specific voice object is missing.
    utterance.lang = 'fr-FR'; 
    
    if (this.voice) {
      utterance.voice = this.voice;
    }

    utterance.rate = rate;
    utterance.pitch = 1.0;
    
    // Error suppression for production
    utterance.onerror = () => {};

    this.synthesis.speak(utterance);
  }

  public cancel(): void {
    this.synthesis.cancel();
  }
}

export const audioService = new AudioService();
