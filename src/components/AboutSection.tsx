
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">About Ambigram</h2>
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
  );
};

export default AboutSection;
