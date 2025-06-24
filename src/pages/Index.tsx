
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import GeneratorControls from '@/components/GeneratorControls';
import PreviewArea from '@/components/PreviewArea';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import StepByStepSection from '@/components/StepByStepSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import AmbigramRenderer from '@/components/AmbigramRenderer';
import ThemeToggle from '@/components/ThemeToggle';
import { useAmbigramState } from '@/hooks/useAmbigramState';
import { useAmbigramActions } from '@/utils/ambigramUtils';
import { fonts, fontCategories, colors, backgroundColors, examples, presets } from '@/data/ambigramData';

const Index = () => {
  const { toast } = useToast();
  const {
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
  } = useAmbigramState();

  const { handleDownload, handleShare } = useAmbigramActions(
    inputText,
    selectedFont,
    textColor,
    backgroundColor,
    fontSize,
    shadowBlur
  );

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

  const renderAmbigram = () => (
    <AmbigramRenderer
      inputText={inputText}
      selectedFont={selectedFont}
      textColor={textColor}
      fontSize={fontSize}
      letterSpacing={letterSpacing}
      strokeWidth={strokeWidth}
      shadowBlur={shadowBlur}
      rotation={rotation}
      skewX={skewX}
      isRotated={isRotated}
      showOutline={showOutline}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 font-inter">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-2 right-2 md:top-4 md:right-4 z-50">
        <ThemeToggle />
      </div>

      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-12">
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 md:gap-8 xl:gap-12">
          {/* Mobile-first: Controls first, then preview */}
          <div className="order-1 xl:order-1">
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
          </div>

          <div className="order-2 xl:order-2">
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
