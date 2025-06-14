
import { Sparkles, Zap, Eye, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-black/20"></div>
      <Navigation />
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center text-white">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/cb783fe1-78df-4951-a8c9-05df45088748.png" 
                alt="Free Ambigram Generator Logo - AmbiCraft" 
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <h1 className="text-5xl md:text-7xl font-playfair font-bold">
                AmbiCraft
              </h1>
            </div>
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
          </div>
          <h2 className="text-2xl md:text-3xl font-inter font-medium mb-4">
            Free Online Ambigram Generator & Creator
          </h2>
          <p className="text-lg md:text-xl font-inter font-light mb-8 max-w-4xl mx-auto">
            Create stunning ambigrams that read the same when rotated 180°. Our professional ambigram generator 
            offers instant results with customizable fonts, colors, and effects. Design perfect rotational 
            ambigrams for tattoos, logos, and artistic projects - completely free!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Zap className="w-4 h-4 mr-1" />
              Free Ambigram Generator
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Eye className="w-4 h-4 mr-1" />
              Instant Preview
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Heart className="w-4 h-4 mr-1" />
              Professional Quality
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
