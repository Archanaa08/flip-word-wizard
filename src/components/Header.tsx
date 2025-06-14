
import { Sparkles, Zap, Eye, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-hero-gradient min-h-[80vh]">
      <div className="absolute inset-0 bg-black/20"></div>
      <Navigation />
      <div className="relative container mx-auto px-4 py-12 md:py-16 pt-16 md:pt-20 flex items-center justify-center min-h-[80vh]">
        <div className="text-center text-white max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-4">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-300 animate-pulse hidden md:block" />
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <img 
                src="/lovable-uploads/cb783fe1-78df-4951-a8c9-05df45088748.png" 
                alt="Free Ambigram Generator Logo - Ambigram Generator" 
                className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
              />
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-playfair font-bold text-center md:text-left">
                Ambigram Generator
              </h1>
            </div>
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-300 animate-pulse hidden md:block" />
          </div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-inter font-medium mb-3 px-2">
            Free Online Ambigram Generator & Creator
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-inter font-light mb-4 md:mb-6 max-w-4xl mx-auto px-4">
            Create stunning ambigrams that read the same when rotated 180°. Our professional ambigram generator 
            offers instant results with customizable fonts, colors, and effects. Design perfect rotational 
            ambigrams for tattoos, logos, and artistic projects - completely free!
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6 px-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
              <Zap className="w-3 h-3 mr-1" />
              Free Ambigram Generator
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
              <Eye className="w-3 h-3 mr-1" />
              Instant Preview
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
              <Heart className="w-3 h-3 mr-1" />
              Professional Quality
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
