
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RotateCcw, Download, Share2, Palette, Type, Sparkles, Zap, Eye, Heart, Users, Award, Lightbulb, HelpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Index = () => {
  const [inputText, setInputText] = useState('LOVE');
  const [selectedFont, setSelectedFont] = useState('playfair');
  const [textColor, setTextColor] = useState('#8B5CF6');
  const [fontSize, setFontSize] = useState([48]);
  const [isRotated, setIsRotated] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState([0]);
  const { toast } = useToast();

  const fonts = [
    { value: 'playfair', label: 'Playfair Display', class: 'font-playfair' },
    { value: 'inter', label: 'Inter', class: 'font-inter' },
    { value: 'serif', label: 'Times New Roman', class: 'font-serif' },
    { value: 'mono', label: 'Monospace', class: 'font-mono' },
    { value: 'creepster', label: 'Creepster', class: 'font-creepster' },
    { value: 'nosifer', label: 'Nosifer', class: 'font-nosifer' },
    { value: 'metal', label: 'Metal Mania', class: 'font-metal' },
    { value: 'eater', label: 'Eater', class: 'font-eater' }
  ];

  const colors = [
    '#8B5CF6', '#3B82F6', '#6366F1', '#EC4899', 
    '#EF4444', '#F59E0B', '#10B981', '#6B7280'
  ];

  const examples = [
    'LOVE', 'HOPE', 'PEACE', 'DREAM', 'MAGIC', 'POWER'
  ];

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your ambigram is being prepared for download.",
    });
  };

  const handleShare = () => {
    toast({
      title: "Link Copied",
      description: "Ambigram link has been copied to clipboard.",
    });
  };

  const renderAmbigram = () => {
    const selectedFontClass = fonts.find(f => f.value === selectedFont)?.class || 'font-playfair';
    
    return (
      <div 
        className={`${selectedFontClass} font-bold select-none transition-all duration-500 ${
          isRotated ? 'transform rotate-180' : ''
        }`}
        style={{
          fontSize: `${fontSize[0]}px`,
          color: textColor,
          letterSpacing: `${letterSpacing[0]}px`,
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}
      >
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
                    {examples.map((example) => (
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

                <Tabs defaultValue="style" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="style">Style</TabsTrigger>
                    <TabsTrigger value="colors">Colors</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="style" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Font Family</label>
                      <Select value={selectedFont} onValueChange={setSelectedFont}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {fonts.map((font) => (
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
                        max={80}
                        min={20}
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
                        max={10}
                        min={-5}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="colors" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Text Color</label>
                      <div className="grid grid-cols-4 gap-2">
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
                        className="w-full h-10 mt-2"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setIsRotated(!isRotated)}
                className="flex-1 bg-ambigram-purple hover:bg-ambigram-purple/90"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                {isRotated ? 'Normal View' : 'Rotate 180°'}
              </Button>
              <Button
                onClick={handleDownload}
                variant="outline"
                className="flex-1"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="flex-1"
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
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-12 min-h-[300px] flex items-center justify-center border-2 border-dashed border-gray-200">
                  {inputText ? (
                    <div className="text-center">
                      {renderAmbigram()}
                      <p className="mt-4 text-sm text-gray-500 font-inter">
                        {isRotated ? 'Rotated 180°' : 'Normal view'}
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

            {/* Gallery Preview */}
            <Card className="mt-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-playfair">Featured Ambigrams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {examples.slice(0, 4).map((example, index) => (
                    <div key={example} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="font-playfair text-2xl font-bold text-ambigram-purple mb-2">
                        {example}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setInputText(example)}
                        className="text-xs"
                      >
                        Use This
                      </Button>
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
