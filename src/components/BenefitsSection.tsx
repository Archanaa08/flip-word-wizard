
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Palette, Download, Share2, Zap, Eye } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            <Sparkles className="inline w-8 h-8 mr-2 text-ambigram-purple" />
            Benefits of Using Our Ambigram Generator
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of designers, artists, and creators choose our tool for their ambigram projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <Palette className="w-12 h-12 text-ambigram-purple mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-2">Professional Design Quality</h3>
              <p className="text-gray-600">
                Create high-resolution ambigrams perfect for tattoos, logos, and professional artwork with studio-quality results.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <Zap className="w-12 h-12 text-ambigram-blue mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-2">Instant Results</h3>
              <p className="text-gray-600">
                Generate beautiful ambigrams in seconds with real-time preview and instant customization options.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <Download className="w-12 h-12 text-ambigram-indigo mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-2">High-Quality Downloads</h3>
              <p className="text-gray-600">
                Export your ambigrams as high-resolution PNG files ready for printing, web use, or professional projects.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <Eye className="w-12 h-12 text-ambigram-purple mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-2">Multiple Font Styles</h3>
              <p className="text-gray-600">
                Choose from elegant serif fonts, modern sans-serif, and bold tattoo-style fonts to match your vision.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <Share2 className="w-12 h-12 text-ambigram-blue mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-2">Easy Sharing</h3>
              <p className="text-gray-600">
                Share your creations instantly with built-in sharing features and social media integration.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <Sparkles className="w-12 h-12 text-ambigram-indigo mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-2">Advanced Customization</h3>
              <p className="text-gray-600">
                Fine-tune every aspect with color controls, spacing adjustments, rotation, and special effects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
