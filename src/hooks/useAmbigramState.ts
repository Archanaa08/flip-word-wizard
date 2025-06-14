
import { useState } from 'react';

export const useAmbigramState = () => {
  const [inputText, setInputText] = useState('LOVE');
  const [selectedFont, setSelectedFont] = useState('playfair');
  const [textColor, setTextColor] = useState('#8B5CF6');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [fontSize, setFontSize] = useState([48]);
  const [isRotated, setIsRotated] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState([0]);
  const [strokeWidth, setStrokeWidth] = useState([0]);
  const [shadowBlur, setShadowBlur] = useState([0]);
  const [rotation, setRotation] = useState([0]);
  const [skewX, setSkewX] = useState([0]);
  const [showGrid, setShowGrid] = useState(false);
  const [showOutline, setShowOutline] = useState(false);

  return {
    inputText,
    setInputText,
    selectedFont,
    setSelectedFont,
    textColor,
    setTextColor,
    backgroundColor,
    setBackgroundColor,
    fontSize,
    setFontSize,
    isRotated,
    setIsRotated,
    letterSpacing,
    setLetterSpacing,
    strokeWidth,
    setStrokeWidth,
    shadowBlur,
    setShadowBlur,
    rotation,
    setRotation,
    skewX,
    setSkewX,
    showGrid,
    setShowGrid,
    showOutline,
    setShowOutline,
  };
};
