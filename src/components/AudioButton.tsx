
import React from 'react';
import { Volume2 } from 'lucide-react';
import { audioService } from '../services/audioService';

interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string; // For accessibility or visual label
}

const AudioButton: React.FC<AudioButtonProps> = ({ text, size = 'md', className = '', label }) => {
  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    audioService.speak(text);
  };

  const sizeClasses = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <button
      onClick={handlePlay}
      className={`text-french-blue hover:text-blue-700 hover:bg-blue-50 rounded-full transition-colors flex items-center gap-1 ${sizeClasses[size]} ${className}`}
      title="点击发音"
      aria-label="Play audio"
    >
      <Volume2 size={iconSizes[size]} />
      {label && <span className="text-sm font-medium">{label}</span>}
    </button>
  );
};

export default AudioButton;
