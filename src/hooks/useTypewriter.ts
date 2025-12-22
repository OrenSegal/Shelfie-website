'use client';

import { useState, useCallback } from 'react';

interface UseTypewriterOptions {
  speed?: number;
  deleteSpeed?: number;
  delayAfterComplete?: number;
}

export function useTypewriter(options: UseTypewriterOptions = {}) {
  const { speed = 50, deleteSpeed = 30, delayAfterComplete = 1000 } = options;

  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const type = useCallback(async (targetText: string): Promise<void> => {
    setIsTyping(true);
    setIsComplete(false);
    setText('');

    for (let i = 0; i <= targetText.length; i++) {
      await new Promise(resolve => setTimeout(resolve, speed));
      setText(targetText.slice(0, i));
    }

    setIsTyping(false);
    setIsComplete(true);

    if (delayAfterComplete > 0) {
      await new Promise(resolve => setTimeout(resolve, delayAfterComplete));
    }
  }, [speed, delayAfterComplete]);

  const deleteText = useCallback(async (): Promise<void> => {
    setIsTyping(true);

    const currentText = text;
    for (let i = currentText.length; i >= 0; i--) {
      await new Promise(resolve => setTimeout(resolve, deleteSpeed));
      setText(currentText.slice(0, i));
    }

    setIsTyping(false);
    setIsComplete(false);
  }, [text, deleteSpeed]);

  const reset = useCallback(() => {
    setText('');
    setIsTyping(false);
    setIsComplete(false);
  }, []);

  return {
    text,
    isTyping,
    isComplete,
    type,
    deleteText,
    reset
  };
}

// Hook for cursor blink effect
export function useCursorBlink(blinkSpeed: number = 530) {
  const [showCursor, setShowCursor] = useState(true);

  useState(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, blinkSpeed);

    return () => clearInterval(interval);
  });

  return showCursor;
}
