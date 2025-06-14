import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import GeneratorControls from '@/components/GeneratorControls';
import PreviewArea from '@/components/PreviewArea';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import StepByStepSection from '@/components/StepByStepSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
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
  const { toast } = useToast();

  const fonts = [
    { value: 'playfair', label: 'Playfair Display', class: 'font-playfair', category: 'serif' },
    { value: 'inter', label: 'Inter', class: 'font-inter', category: 'sans-serif' },
    { value: 'serif', label: 'Times New Roman', class: 'font-serif', category: 'serif' },
    { value: 'mono', label: 'Courier New', class: 'font-mono', category: 'monospace' },
    { value: 'creepster', label: 'Creepster', class: 'font-creepster', category: 'tattoo' },
    { value: 'nosifer', label: 'Nosifer', class: 'font-nosifer', category: 'tattoo' },
    { value: 'metal', label: 'Metal Mania', class: 'font-metal', category: 'tattoo' },
    { value: 'eater', label: 'Eater', class: 'font-eater', category: 'tattoo' },
    { value: 'arial', label: 'Arial', class: 'font-sans', category: 'sans-serif' },
    { value: 'georgia', label: 'Georgia', class: 'font-serif', category: 'serif' },
    { value: 'helvetica', label: 'Helvetica', class: 'font-sans', category: 'sans-serif' },
    { value: 'verdana', label: 'Verdana', class: 'font-sans', category: 'sans-serif' },
    { value: 'orbitron', label: 'Orbitron', class: 'font-orbitron', category: 'blocky' },
    { value: 'audiowide', label: 'Audiowide', class: 'font-audiowide', category: 'blocky' },
    { value: 'press-start', label: 'Press Start 2P', class: 'font-press-start', category: 'pixel' },
  ];

  const fontCategories = [
    { value: 'all', label: 'All Fonts' },
    { value: 'serif', label: 'Serif' },
    { value: 'sans-serif', label: 'Sans Serif' },
    { value: 'monospace', label: 'Monospace' },
    { value: 'tattoo', label: 'Tattoo Style' },
    { value: 'blocky', label: 'Blocky' },
    { value: 'pixel', label: 'Pixel Art' },
  ];

  const colors = [
    '#8B5CF6', '#3B82F6', '#6366F1', '#EC4899', 
    '#EF4444', '#F59E0B', '#10B981', '#6B7280',
    '#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4',
    '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'
  ];

  const backgroundColors = [
    '#FFFFFF', '#000000', '#F8F9FA', '#343A40',
    '#FFF3CD', '#D4EDDA', '#D1ECF1', '#F8D7DA',
    '#E2E3E5', '#F5F5F5', '#FFEAA7', '#DDA0DD'
  ];

  const examples = [
    'LOVE', 'HOPE', 'PEACE', 'DREAM', 'MAGIC', 'POWER',
    'FAITH', 'ANGEL', 'FAMILY', 'INFINITY', 'DESTINY', 'HONOR'
  ];

  const presets = [
    { name: 'Classic', font: 'playfair', color: '#000000', bg: '#FFFFFF', size: 48 },
    { name: 'Modern', font: 'inter', color: '#6366F1', bg: '#F8F9FA', size: 52 },
    { name: 'Tattoo Dark', font: 'creepster', color: '#FFFFFF', bg: '#000000', size: 44 },
    { name: 'Gothic', font: 'nosifer', color: '#8B0000', bg: '#2F2F2F', size: 50 },
    { name: 'Metal', font: 'metal', color: '#FFD700', bg: '#1A1A1A', size: 46 },
    { name: 'Horror', font: 'eater', color: '#FF4500', bg: '#000000', size: 48 }
  ];

  const handleDownload = () => {
    // Create canvas and draw the ambigram
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 800;
    canvas.height = 400;
    
    if (ctx) {
      // Set background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set text properties
      const selectedFontClass = fonts.find(f => f.value === selectedFont)?.label || 'Arial';
      ctx.font = `bold ${fontSize[0]}px ${selectedFontClass}`;
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Add shadow if enabled
      if (shadowBlur[0] > 0) {
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = shadowBlur[0];
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
      }
      
      // Draw text
      ctx.fillText(inputText.toUpperCase(), canvas.width / 2, canvas.height / 2);
      
      // Download
      const link = document.createElement('a');
      link.download = `ambigram-${inputText.toLowerCase()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
    
    toast({
      title: "Download Started",
      description: "Your ambigram has been downloaded as PNG.",
    });
  };

  const handleShare = () => {
    const shareData = {
      title: `${inputText} Ambigram - AmbiCraft`,
      text: `Check out this cool ambigram I created: ${inputText}`,
      url: window.location.href
    };
    
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Ambigram link has been copied to clipboard.",
      });
    }
  };

  const applyPreset = (preset: typeof presets[0]) => {
    setSelectedFont(preset.font);
    setTextColor(preset.color);
    setBackgroundColor(preset.bg);
    setFontSize([preset.size]);
    toast({
      title: "Preset Applied",
      description: `${preset.name} style has been applied to your ambigram.`,
    });
  };

  const generateRandom = () => {
    const randomExample = examples[Math.floor(Math.random() * examples.length)];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomBg = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    
    setInputText(randomExample);
    setSelectedFont(randomFont.value);
    setTextColor(randomColor);
    setBackgroundColor(randomBg);
    setFontSize([Math.floor(Math.random() * 40) + 30]);
    
    toast({
      title: "Random Style Generated",
      description: "A random ambigram style has been applied!",
    });
  };

  const renderAmbigram = () => {
    const selectedFontClass = fonts.find(f => f.value === selectedFont)?.class || 'font-playfair';
    
    const textStyle = {
      fontSize: `${fontSize[0]}px`,
      color: textColor,
      letterSpacing: `${letterSpacing[0]}px`,
      textShadow: shadowBlur[0] > 0 ? `${shadowBlur[0]}px ${shadowBlur[0]}px ${shadowBlur[0] * 2}px rgba(0,0,0,0.3)` : 'none',
      WebkitTextStroke: strokeWidth[0] > 0 ? `${strokeWidth[0]}px ${textColor}` : 'none',
      transform: `rotate(${rotation[0]}deg) skewX(${skewX[0]}deg) ${isRotated ? 'rotate(180deg)' : ''}`,
      transition: 'all 0.3s ease'
    };

    return (
      <div 
        className={`${selectedFontClass} font-bold select-none transition-all duration-500 relative`}
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <GeneratorControls
            inputText={inputText}
            setInputText={setInputText}
            selectedFont={selectedFont}
            setSelectedFont={setSelectedFont}
            textColor={textColor}
            setTextColor={setTextColor}
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            fontSize={fontSize}
            setFontSize={setFontSize}
            letterSpacing={letterSpacing}
            setLetterSpacing={setLetterSpacing}
            strokeWidth={strokeWidth}
            setStrokeWidth={setStrokeWidth}
            shadowBlur={shadowBlur}
            setShadowBlur={setShadowBlur}
            rotation={rotation}
            setRotation={setRotation}
            skewX={skewX}
            setSkewX={setSkewX}
            showGrid={showGrid}
            setShowGrid={setShowGrid}
            showOutline={showOutline}
            setShowOutline={setShowOutline}
            isRotated={isRotated}
            setIsRotated={setIsRotated}
            fonts={fonts}
            fontCategories={fontCategories}
            colors={colors}
            backgroundColors={backgroundColors}
            examples={examples}
            presets={presets}
            handleDownload={handleDownload}
            handleShare={handleShare}
            applyPreset={applyPreset}
            generateRandom={generateRandom}
          />

          <PreviewArea
            inputText={inputText}
            renderAmbigram={renderAmbigram}
            backgroundColor={backgroundColor}
            showGrid={showGrid}
            isRotated={isRotated}
            fontSize={fontSize}
            selectedFont={selectedFont}
            fonts={fonts}
            examples={examples}
            setInputText={setInputText}
          />
        </div>
      </main>

      <AboutSection />
      <BenefitsSection />
      <StepByStepSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
