
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Type, RotateCcw, Download, Share2, RefreshCw } from 'lucide-react';

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
  );
};

export default GeneratorControls;
