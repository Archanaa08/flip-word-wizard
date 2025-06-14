import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Type, RotateCcw, Download, Share2, RefreshCw, Sparkles, Palette, Wand2 } from 'lucide-react';

interface GeneratorControlsProps {
  inputText: string;
  setInputText: (text: string) => void;
  selectedFont: string;
  setSelectedFont: (font: string) => void;
  textColor: string;
  setTextColor: (color: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  fontSize: number[];
  setFontSize: (size: number[]) => void;
  letterSpacing: number[];
  setLetterSpacing: (spacing: number[]) => void;
  strokeWidth: number[];
  setStrokeWidth: (width: number[]) => void;
  shadowBlur: number[];
  setShadowBlur: (blur: number[]) => void;
  rotation: number[];
  setRotation: (rotation: number[]) => void;
  skewX: number[];
  setSkewX: (skew: number[]) => void;
  showGrid: boolean;
  setShowGrid: (show: boolean) => void;
  showOutline: boolean;
  setShowOutline: (show: boolean) => void;
  isRotated: boolean;
  setIsRotated: (rotated: boolean) => void;
  fonts: Array<{ value: string; label: string; class: string; category: string }>;
  fontCategories: Array<{ value: string; label: string }>;
  colors: string[];
  backgroundColors: string[];
  examples: string[];
  presets: Array<{ name: string; font: string; color: string; bg: string; size: number }>;
  handleDownload: () => void;
  handleShare: () => void;
  applyPreset: (preset: any) => void;
  generateRandom: () => void;
}

const GeneratorControls = ({
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
  isRotated,
  setIsRotated,
  fonts,
  fontCategories,
  colors,
  backgroundColors,
  examples,
  presets,
  handleDownload,
  handleShare,
  applyPreset,
  generateRandom
}: GeneratorControlsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFonts = selectedCategory === 'all' 
    ? fonts 
    : fonts.filter(font => font.category === selectedCategory);

  return (
    <div className="space-y-6">
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/40 backdrop-blur-sm relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-ambigram-purple/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-ambigram-blue/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
        
        <CardHeader className="pb-6 relative">
          <CardTitle className="flex items-center gap-3 text-3xl font-playfair bg-gradient-to-r from-ambigram-purple via-ambigram-blue to-ambigram-indigo bg-clip-text text-transparent">
            <div className="relative">
              <Type className="w-8 h-8 text-ambigram-purple" />
              <Sparkles className="w-4 h-4 text-ambigram-pink absolute -top-1 -right-1 animate-pulse" />
            </div>
            Ambigram Generator
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 font-medium">
            ✨ Transform your text into stunning ambigrams with professional design tools
          </CardDescription>
          <div className="flex items-center gap-2 mt-2 text-sm text-ambigram-purple font-medium">
            <Wand2 className="w-4 h-4" />
            Create • Customize • Download • Share
          </div>
        </CardHeader>
        <CardContent className="space-y-8 relative">
          <div className="relative">
            <label className="text-sm font-semibold mb-3 block text-gray-700 flex items-center gap-2">
              <Type className="w-4 h-4 text-ambigram-purple" />
              Text Input
            </label>
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your text to create magic ✨"
              className="text-xl font-medium h-14 border-2 border-purple-200 focus:border-ambigram-purple transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg"
              maxLength={20}
            />
            <div className="text-xs text-gray-500 mt-1 text-right">{inputText.length}/20 characters</div>
            
            {/* Enhanced example buttons */}
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-600 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-ambigram-pink" />
                Try these popular examples:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {examples.slice(0, 6).map((example, index) => (
                  <Button
                    key={example}
                    variant="outline"
                    size="sm"
                    onClick={() => setInputText(example)}
                    className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      index % 2 === 0 
                        ? 'border-purple-200 hover:border-ambigram-purple hover:bg-purple-50' 
                        : 'border-blue-200 hover:border-ambigram-blue hover:bg-blue-50'
                    }`}
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Quick Presets */}
          <div className="bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-xl p-4 border border-purple-100">
            <label className="text-sm font-semibold mb-3 block text-gray-700 flex items-center gap-2">
              <Palette className="w-4 h-4 text-ambigram-purple" />
              Quick Style Presets
            </label>
            <div className="grid grid-cols-3 gap-3">
              {presets.map((preset, index) => (
                <Button
                  key={preset.name}
                  variant="outline"
                  size="sm"
                  onClick={() => applyPreset(preset)}
                  className={`text-xs h-10 font-medium transition-all duration-300 hover:scale-105 ${
                    index % 3 === 0 
                      ? 'border-purple-200 hover:border-ambigram-purple hover:bg-purple-50' 
                      : index % 3 === 1
                      ? 'border-blue-200 hover:border-ambigram-blue hover:bg-blue-50'
                      : 'border-pink-200 hover:border-ambigram-pink hover:bg-pink-50'
                  }`}
                >
                  ✨ {preset.name}
                </Button>
              ))}
            </div>
          </div>

          <Tabs defaultValue="fonts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm border border-purple-100">
              <TabsTrigger value="fonts" className="data-[state=active]:bg-ambigram-purple data-[state=active]:text-white">Fonts</TabsTrigger>
              <TabsTrigger value="colors" className="data-[state=active]:bg-ambigram-blue data-[state=active]:text-white">Colors</TabsTrigger>
              <TabsTrigger value="effects" className="data-[state=active]:bg-ambigram-indigo data-[state=active]:text-white">Effects</TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-ambigram-pink data-[state=active]:text-white">Advanced</TabsTrigger>
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

      {/* Enhanced Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={() => setIsRotated(!isRotated)}
          className="bg-gradient-to-r from-ambigram-purple to-ambigram-blue hover:from-ambigram-purple/90 hover:to-ambigram-blue/90 shadow-lg hover:shadow-xl transition-all duration-300 h-12 font-semibold"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          {isRotated ? 'Normal View' : 'Rotate 180°'}
        </Button>
        <Button
          onClick={generateRandom}
          variant="outline"
          className="border-2 border-ambigram-purple text-ambigram-purple hover:bg-ambigram-purple hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12 font-semibold"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Surprise Me!
        </Button>
        <Button
          onClick={handleDownload}
          variant="outline"
          className="border-2 border-ambigram-blue text-ambigram-blue hover:bg-ambigram-blue hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12 font-semibold"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PNG
        </Button>
        <Button
          onClick={handleShare}
          variant="outline"
          className="border-2 border-ambigram-pink text-ambigram-pink hover:bg-ambigram-pink hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12 font-semibold"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share Magic
        </Button>
      </div>
    </div>
  );
};

export default GeneratorControls;
