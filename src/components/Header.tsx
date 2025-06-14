
import { Sparkles, Zap, Eye, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  return (
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
  );
};

export default Header;
