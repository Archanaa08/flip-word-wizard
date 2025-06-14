
import { useToast } from '@/hooks/use-toast';
import { fonts } from '@/data/ambigramData';

export const useAmbigramActions = (
  inputText: string,
  selectedFont: string,
  textColor: string,
  backgroundColor: string,
  fontSize: number[],
  shadowBlur: number[]
) => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Create canvas and draw the ambigram
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 800;
    canvas.height = 400;
    
    if (ctx) {
      // Set background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set text properties
      const selectedFontClass = fonts.find(f => f.value === selectedFont)?.label || 'Arial';
      ctx.font = `bold ${fontSize[0]}px ${selectedFontClass}`;
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Add shadow if enabled
      if (shadowBlur[0] > 0) {
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = shadowBlur[0];
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
      }
      
      // Draw text
      ctx.fillText(inputText.toUpperCase(), canvas.width / 2, canvas.height / 2);
      
      // Download
      const link = document.createElement('a');
      link.download = `ambigram-${inputText.toLowerCase()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
    
    toast({
      title: "Download Started",
      description: "Your ambigram has been downloaded as PNG.",
    });
  };

  const handleShare = () => {
    const shareData = {
      title: `${inputText} Ambigram - AmbiCraft`,
      text: `Check out this cool ambigram I created: ${inputText}`,
      url: window.location.href
    };
    
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Ambigram link has been copied to clipboard.",
      });
    }
  };

  return { handleDownload, handleShare };
};
