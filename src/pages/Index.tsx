
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Switch } from '@/components/ui/switch';
import { RotateCcw, Download, Share2, Palette, Type, Sparkles, Zap, Eye, Heart, Users, Award, Lightbulb, HelpCircle, RefreshCw, Settings, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

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
  ];

  const fontCategories = [
    { value: 'all', label: 'All Fonts' },
    { value: 'serif', label: 'Serif' },
    { value: 'sans-serif', label: 'Sans Serif' },
    { value: 'monospace', label: 'Monospace' },
    { value: 'tattoo', label: 'Tattoo Style' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFonts = selectedCategory === 'all' 
    ? fonts 
    : fonts.filter(font => font.category === selectedCategory);

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
      {/* Header */}
      <header className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-playfair font-bold">
                AmbiCraft
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl font-inter font-light mb-8 max-w-3xl mx-auto">
              Create stunning ambigrams that read the same when rotated 180°. 
              Professional design tools for perfect typographic symmetry.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Zap className="w-4 h-4 mr-1" />
                Instant Generation
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Eye className="w-4 h-4 mr-1" />
                Real-time Preview
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Heart className="w-4 h-4 mr-1" />
                Professional Quality
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Generator Controls */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-2xl font-playfair">
                  <Type className="w-6 h-6 text-ambigram-purple" />
                  Ambigram Generator
                </CardTitle>
                <CardDescription>
                  Enter your text and customize your ambigram design
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Text Input</label>
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter text to convert"
                    className="text-lg font-medium"
                    maxLength={20}
                  />
                  <div className="flex flex-wrap gap-2 mt-3">
                    {examples.slice(0, 6).map((example) => (
                      <Button
                        key={example}
                        variant="outline"
                        size="sm"
                        onClick={() => setInputText(example)}
                        className="text-xs"
                      >
                        {example}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quick Presets */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Quick Presets</label>
                  <div className="grid grid-cols-3 gap-2">
                    {presets.map((preset) => (
                      <Button
                        key={preset.name}
                        variant="outline"
                        size="sm"
                        onClick={() => applyPreset(preset)}
                        className="text-xs h-8"
                      >
                        {preset.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <Tabs defaultValue="fonts" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="fonts">Fonts</TabsTrigger>
                    <TabsTrigger value="colors">Colors</TabsTrigger>
                    <TabsTrigger value="effects">Effects</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="fonts" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Font Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {fontCategories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Font Family</label>
                      <Select value={selectedFont} onValueChange={setSelectedFont}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {filteredFonts.map((font) => (
                            <SelectItem key={font.value} value={font.value}>
                              <span className={font.class}>{font.label}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Font Size: {fontSize[0]}px
                      </label>
                      <Slider
                        value={fontSize}
                        onValueChange={setFontSize}
                        max={100}
                        min={16}
                        step={2}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Letter Spacing: {letterSpacing[0]}px
                      </label>
                      <Slider
                        value={letterSpacing}
                        onValueChange={setLetterSpacing}
                        max={15}
                        min={-5}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="colors" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Text Color</label>
                      <div className="grid grid-cols-4 gap-2 mb-2">
                        {colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setTextColor(color)}
                            className={`w-full h-10 rounded-md border-2 transition-all ${
                              textColor === color ? 'border-gray-400 scale-110' : 'border-gray-200'
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <Input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="w-full h-10"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Background Color</label>
                      <div className="grid grid-cols-4 gap-2 mb-2">
                        {backgroundColors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setBackgroundColor(color)}
                            className={`w-full h-10 rounded-md border-2 transition-all ${
                              backgroundColor === color ? 'border-gray-400 scale-110' : 'border-gray-200'
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <Input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-full h-10"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="effects" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Stroke Width: {strokeWidth[0]}px
                      </label>
                      <Slider
                        value={strokeWidth}
                        onValueChange={setStrokeWidth}
                        max={5}
                        min={0}
                        step={0.5}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Shadow Blur: {shadowBlur[0]}px
                      </label>
                      <Slider
                        value={shadowBlur}
                        onValueChange={setShadowBlur}
                        max={20}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Show Outline</label>
                      <Switch checked={showOutline} onCheckedChange={setShowOutline} />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Show Grid</label>
                      <Switch checked={showGrid} onCheckedChange={setShowGrid} />
                    </div>
                  </TabsContent>

                  <TabsContent value="advanced" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Rotation: {rotation[0]}°
                      </label>
                      <Slider
                        value={rotation}
                        onValueChange={setRotation}
                        max={45}
                        min={-45}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Skew X: {skewX[0]}°
                      </label>
                      <Slider
                        value={skewX}
                        onValueChange={setSkewX}
                        max={30}
                        min={-30}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => setIsRotated(!isRotated)}
                className="bg-ambigram-purple hover:bg-ambigram-purple/90"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                {isRotated ? 'Normal' : 'Rotate 180°'}
              </Button>
              <Button
                onClick={generateRandom}
                variant="outline"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Random
              </Button>
              <Button
                onClick={handleDownload}
                variant="outline"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PNG
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Preview Area */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center gap-2 text-xl font-playfair">
                  <Palette className="w-5 h-5 text-ambigram-purple" />
                  Live Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="rounded-xl p-12 min-h-[300px] flex items-center justify-center border-2 border-dashed border-gray-200 relative overflow-hidden"
                  style={{ 
                    backgroundColor: backgroundColor,
                    backgroundImage: showGrid ? 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)' : 'none',
                    backgroundSize: showGrid ? '20px 20px' : 'auto'
                  }}
                >
                  {inputText ? (
                    <div className="text-center">
                      {renderAmbigram()}
                      <p className="mt-4 text-sm text-gray-500 font-inter">
                        {isRotated ? 'Rotated 180°' : 'Normal view'} • {fontSize[0]}px • {fonts.find(f => f.value === selectedFont)?.label}
                      </p>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400">
                      <Type className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-inter">Enter text to see your ambigram</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Examples Gallery */}
            <Card className="mt-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-playfair">Popular Ambigrams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {examples.slice(0, 8).map((example, index) => (
                    <div key={example} className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-gray-50 to-gray-100' : 'from-purple-50 to-indigo-50'} rounded-lg p-3 text-center cursor-pointer transition-all hover:scale-105`} onClick={() => setInputText(example)}>
                      <div className={`font-playfair text-lg font-bold ${index % 2 === 0 ? 'text-gray-700' : 'text-ambigram-purple'} mb-1`}>
                        {example}
                      </div>
                      <p className="text-xs text-gray-500">Click to use</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">About AmbiCraft</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're passionate about typography and the art of ambigrams. Our mission is to make 
              professional ambigram creation accessible to everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg text-center">
              <CardContent className="pt-8">
                <Users className="w-12 h-12 text-ambigram-purple mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-bold mb-2">For Everyone</h3>
                <p className="text-gray-600">
                  From professional designers to typography enthusiasts, our tools are designed for all skill levels.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg text-center">
              <CardContent className="pt-8">
                <Award className="w-12 h-12 text-ambigram-blue mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-bold mb-2">Professional Quality</h3>
                <p className="text-gray-600">
                  Create high-quality ambigrams suitable for logos, tattoos, and professional design work.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg text-center">
              <CardContent className="pt-8">
                <Lightbulb className="w-12 h-12 text-ambigram-indigo mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-bold mb-2">Innovative Tools</h3>
                <p className="text-gray-600">
                  Real-time preview, multiple fonts, and advanced customization options for perfect results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              <HelpCircle className="inline w-8 h-8 mr-2 text-ambigram-purple" />
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about ambigrams and our generator tool.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What is an ambigram?
                </AccordionTrigger>
                <AccordionContent>
                  An ambigram is a form of typographical art that reads the same when rotated 180 degrees. 
                  The word looks identical whether viewed normally or upside down, creating a fascinating visual effect.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How do I create the perfect ambigram?
                </AccordionTrigger>
                <AccordionContent>
                  Start with shorter words or names for best results. Experiment with different fonts, especially our tattoo-style fonts. 
                  Adjust letter spacing and use the rotation feature to check your design. Words with symmetrical letters work best.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can I use ambigrams for commercial purposes?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! The ambigrams you create with our tool can be used for personal and commercial projects, 
                  including logos, tattoos, artwork, and design projects. We encourage creative use of your designs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What file formats can I download?
                </AccordionTrigger>
                <AccordionContent>
                  Currently, you can download your ambigrams as high-resolution PNG files. We're working on adding 
                  SVG and PDF export options for even more flexibility in your design projects.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Do you offer custom ambigram design services?
                </AccordionTrigger>
                <AccordionContent>
                  While our tool handles most ambigram needs automatically, we do offer custom design services for 
                  complex projects. Contact us through our contact form to discuss your specific requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-4">AmbiCraft</h3>
              <p className="text-gray-400 font-inter">
                Professional ambigram generator for designers, artists, and typography enthusiasts.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Support</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Report Bug</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 AmbiCraft. All rights reserved. | Professional Ambigram Generator</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
