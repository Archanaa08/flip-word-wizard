
import { Sparkles, Zap, Eye, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-hero-gradient min-h-screen">
      <div className="absolute inset-0 bg-black/20"></div>
      <Navigation />
      <div className="relative container mx-auto px-4 py-16 md:py-20 pt-20 md:pt-24 flex items-center justify-center min-h-screen">
        <div className="text-center text-white max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-4">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-300 animate-pulse hidden md:block" />
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <img 
                src="/lovable-uploads/cb783fe1-78df-4951-a8c9-05df45088748.png" 
                alt="Free Ambigram Generator Logo - Ambigram Generator" 
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-playfair font-bold text-center md:text-left">
                Ambigram Generator
              </h1>
            </div>
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-300 animate-pulse hidden md:block" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-inter font-medium mb-4 px-2">
            Free Online Ambigram Generator & Creator
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-inter font-light mb-6 md:mb-8 max-w-4xl mx-auto px-4">
            Create stunning ambigrams that read the same when rotated 180°. Our professional ambigram generator 
            offers instant results with customizable fonts, colors, and effects. Design perfect rotational 
            ambigrams for tattoos, logos, and artistic projects - completely free!
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8 px-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs md:text-sm">
              <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              Free Ambigram Generator
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs md:text-sm">
              <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              Instant Preview
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs md:text-sm">
              <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              Professional Quality
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
