
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Type } from 'lucide-react';

interface PreviewAreaProps {
  inputText: string;
  renderAmbigram: () => React.ReactNode;
  backgroundColor: string;
  showGrid: boolean;
  isRotated: boolean;
  fontSize: number[];
  selectedFont: string;
  fonts: Array<{ value: string; label: string; class: string; category: string }>;
  examples: string[];
  setInputText: (text: string) => void;
}

const PreviewArea = ({ 
  inputText, 
  renderAmbigram, 
  backgroundColor, 
  showGrid, 
  isRotated, 
  fontSize, 
  selectedFont, 
  fonts, 
  examples, 
  setInputText 
}: PreviewAreaProps) => {
  return (
    <div className="xl:sticky xl:top-8">
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center pb-3 md:pb-4">
          <CardTitle className="flex items-center justify-center gap-2 text-lg md:text-xl font-playfair">
            <Palette className="w-4 h-4 md:w-5 md:h-5 text-ambigram-purple" />
            Live Preview
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 md:p-6">
          <div 
            className="rounded-xl p-6 md:p-12 min-h-[250px] md:min-h-[300px] flex items-center justify-center border-2 border-dashed border-gray-200 relative overflow-hidden"
            style={{ 
              backgroundColor: backgroundColor,
              backgroundImage: showGrid ? 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)' : 'none',
              backgroundSize: showGrid ? '20px 20px' : 'auto'
            }}
          >
            {inputText ? (
              <div className="text-center">
                {renderAmbigram()}
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500 font-inter">
                  {isRotated ? 'Rotated 180°' : 'Normal view'} • {fontSize[0]}px • {fonts.find(f => f.value === selectedFont)?.label}
                </p>
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <Type className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 opacity-50" />
                <p className="text-base md:text-lg font-inter">Enter text to see your ambigram</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Examples Gallery */}
      <Card className="mt-4 md:mt-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-3 md:pb-4">
          <CardTitle className="text-base md:text-lg font-playfair">Popular Ambigrams</CardTitle>
        </CardHeader>
        <CardContent className="p-3 md:p-6 pt-0">
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {examples.slice(0, 8).map((example, index) => (
              <div 
                key={example} 
                className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-gray-50 to-gray-100' : 'from-purple-50 to-indigo-50'} rounded-lg p-2 md:p-3 text-center cursor-pointer transition-all hover:scale-105`} 
                onClick={() => setInputText(example)}
              >
                <div className={`font-playfair text-sm md:text-lg font-bold ${index % 2 === 0 ? 'text-gray-700' : 'text-ambigram-purple'} mb-1`}>
                  {example}
                </div>
                <p className="text-xs text-gray-500">Click to use</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreviewArea;
