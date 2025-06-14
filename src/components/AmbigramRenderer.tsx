
import { fonts } from '@/data/ambigramData';
import { useState, useEffect } from 'react';

interface AmbigramRendererProps {
  inputText: string;
  selectedFont: string;
  textColor: string;
  fontSize: number[];
  letterSpacing: number[];
  strokeWidth: number[];
  shadowBlur: number[];
  rotation: number[];
  skewX: number[];
  isRotated: boolean;
  showOutline: boolean;
}

const AmbigramRenderer = ({
  inputText,
  selectedFont,
  textColor,
  fontSize,
  letterSpacing,
  strokeWidth,
  shadowBlur,
  rotation,
  skewX,
  isRotated,
  showOutline
}: AmbigramRendererProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const selectedFontClass = fonts.find(f => f.value === selectedFont)?.class || 'font-playfair';
  
  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timeout);
  }, [isRotated]);
  
  const textStyle = {
    fontSize: `${fontSize[0]}px`,
    color: textColor,
    letterSpacing: `${letterSpacing[0]}px`,
    textShadow: shadowBlur[0] > 0 ? `${shadowBlur[0]}px ${shadowBlur[0]}px ${shadowBlur[0] * 2}px rgba(0,0,0,0.3)` : 'none',
    WebkitTextStroke: strokeWidth[0] > 0 ? `${strokeWidth[0]}px ${textColor}` : 'none',
    transform: `rotate(${rotation[0]}deg) skewX(${skewX[0]}deg) ${isRotated ? 'rotate(180deg)' : ''}`,
    transition: isAnimating ? 'none' : 'all 0.3s ease'
  };

  return (
    <div 
      className={`${selectedFontClass} font-bold select-none relative ${
        isAnimating ? 'animate-flip-fade' : 'transition-all duration-500'
      }`}
      style={textStyle}
    >
      {showOutline && (
        <div 
          className="absolute inset-0"
          style={{
            ...textStyle,
            color: 'transparent',
            WebkitTextStroke: `2px ${textColor}`,
            zIndex: -1
          }}
        >
          {inputText.toUpperCase()}
        </div>
      )}
      {inputText.toUpperCase()}
    </div>
  );
};

export default AmbigramRenderer;
