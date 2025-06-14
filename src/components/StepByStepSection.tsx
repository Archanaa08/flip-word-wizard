
import { Card, CardContent } from '@/components/ui/card';
import { Type, Palette, Settings, Download } from 'lucide-react';

const StepByStepSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Crafting Your Ambigram: Step-by-Step
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to create stunning ambigrams in minutes. Our intuitive process makes it easy for anyone to create professional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-ambigram-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <Type className="w-12 h-12 text-ambigram-purple mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-2">Enter Your Text</h3>
              <p className="text-gray-600">
                Type the word or name you want to transform into an ambigram. Start with shorter words for best results.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-ambigram-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <Palette className="w-12 h-12 text-ambigram-blue mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-2">Choose Style</h3>
              <p className="text-gray-600">
                Select from our collection of fonts and apply preset styles, or use our random generator for inspiration.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-ambigram-indigo rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <Settings className="w-12 h-12 text-ambigram-indigo mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-2">Customize Design</h3>
              <p className="text-gray-600">
                Fine-tune colors, spacing, size, and effects. Use the rotation feature to check how it looks upside down.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-2">Download & Share</h3>
              <p className="text-gray-600">
                Export your finished ambigram as a high-quality PNG file or share it directly on social media.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold mb-4">Pro Tips for Perfect Ambigrams</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-purple-800">Best Word Types</h4>
                <p className="text-gray-700 text-sm">Names, short words, and words with symmetrical letters work exceptionally well.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-800">Font Selection</h4>
                <p className="text-gray-700 text-sm">Try different font categories - serif fonts often work better for traditional ambigrams.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-800">Color Contrast</h4>
                <p className="text-gray-700 text-sm">Ensure good contrast between text and background for the best visual impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStepSection;
