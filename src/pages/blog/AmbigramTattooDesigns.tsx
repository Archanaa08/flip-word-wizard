
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AmbigramTattooDesigns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <header className="relative overflow-hidden bg-hero-gradient py-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <Navigation />
        <div className="relative container mx-auto px-4 pt-20">
          <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Tattoo Design
            </Badge>
            <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4">
              Ambigram Tattoo Designs: Ultimate Guide for Meaningful Body Art
            </h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                December 8, 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                12 min read
              </div>
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white p-0">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-playfair font-bold mb-4">Why Ambigrams Make Perfect Tattoos</h2>
            <p className="mb-6">
              Ambigram tattoos have become increasingly popular among tattoo enthusiasts who appreciate meaningful, artistic body art. The symmetrical nature of <Link to="/blog/what-is-ambigram" className="text-purple-600 hover:text-purple-800">ambigrams</Link> creates visually stunning designs that maintain their beauty from multiple viewing angles, making them ideal for tattoo placement.
            </p>
            
            <h3 className="text-xl font-playfair font-bold mb-3">Popular Ambigram Tattoo Ideas</h3>
            
            <h4 className="text-lg font-semibold mb-2">Name Ambigrams</h4>
            <p className="mb-4">
              Name ambigrams are among the most requested tattoo designs. Whether it's your own name, a loved one's name, or a couple's names combined, these designs create deeply personal and meaningful tattoos that can be read from multiple orientations.
            </p>

            <h4 className="text-lg font-semibold mb-2">Inspirational Word Ambigrams</h4>
            <ul className="mb-4 space-y-1">
              <li><strong>Love/Life:</strong> Classic combination representing the duality of existence</li>
              <li><strong>Hope/Faith:</strong> Perfect for those seeking spiritual meaning</li>
              <li><strong>Peace/Power:</strong> Balancing inner strength with tranquility</li>
              <li><strong>Dream/Reality:</strong> Representing the pursuit of goals</li>
            </ul>

            <h3 className="text-xl font-playfair font-bold mb-3">Best Placement for Ambigram Tattoos</h3>
            <p className="mb-6">
              The placement of your ambigram tattoo is crucial for maximizing its visual impact. Popular locations include:
            </p>
            <ul className="mb-6 space-y-2">
              <li><strong>Forearm:</strong> Easily visible and readable from both orientations</li>
              <li><strong>Chest:</strong> Large canvas for detailed ambigram designs</li>
              <li><strong>Back:</strong> Perfect for larger, more elaborate ambigrams</li>
              <li><strong>Wrist:</strong> Subtle placement for smaller, personal ambigrams</li>
            </ul>

            <h3 className="text-xl font-playfair font-bold mb-3">Designing Your Ambigram Tattoo</h3>
            <p className="mb-6">
              Before getting your ambigram tattoo, it's essential to perfect the design. Start by using our <Link to="/" className="text-purple-600 hover:text-purple-800">free ambigram generator</Link> to experiment with different fonts and styles. This allows you to visualize how your chosen words will look as an ambigram.
            </p>

            <p className="mb-6">
              For more advanced design techniques, refer to our comprehensive guide on <Link to="/blog/create-perfect-ambigram" className="text-purple-600 hover:text-purple-800">creating the perfect ambigram</Link>, which covers professional design principles that will ensure your tattoo looks perfect.
            </p>

            <h3 className="text-xl font-playfair font-bold mb-3">Working with Your Tattoo Artist</h3>
            <p className="mb-6">
              Not all tattoo artists are familiar with ambigrams, so it's important to choose someone who appreciates this unique art form. Bring multiple versions of your design and explain the concept to ensure they understand the importance of maintaining the ambigram's readability when scaled and adapted for tattooing.
            </p>

            <h3 className="text-xl font-playfair font-bold mb-3">Font Selection for Tattoo Ambigrams</h3>
            <p className="mb-6">
              The font choice significantly impacts how well an ambigram translates to a tattoo. Bold, clean fonts generally work better for tattoos as they maintain clarity over time. Gothic and decorative fonts can create stunning effects but require careful consideration of line weight and detail.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-lg font-playfair font-bold mb-2">Start Designing Your Ambigram Tattoo</h4>
              <p className="mb-4">Create and perfect your ambigram design before visiting the tattoo parlor. Our generator offers multiple tattoo-friendly fonts and styles.</p>
              <Link to="/">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Design Your Ambigram Now
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AmbigramTattooDesigns;
