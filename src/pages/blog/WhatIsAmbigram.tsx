
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const WhatIsAmbigram = () => {
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
              Beginner Guide
            </Badge>
            <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4">
              What is an Ambigram? Complete Guide to Rotational Typography
            </h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                June 10, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                8 min read
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
            <h2 className="text-2xl font-playfair font-bold mb-4">What is an Ambigram?</h2>
            <p className="mb-6">
              An ambigram is a fascinating form of typographical art where words or phrases are designed to read the same when rotated 180 degrees. This unique characteristic makes ambigrams appear identical whether viewed right-side up or upside down, creating a mesmerizing visual effect that captivates viewers.
            </p>
            
            <h3 className="text-xl font-playfair font-bold mb-3">History of Ambigrams</h3>
            <p className="mb-6">
              The term "ambigram" was coined by cognitive scientist Douglas Hofstadter in the 1980s, though the concept existed long before. The word combines "ambi" (meaning both) and "gram" (meaning letter or writing). Famous examples include the work of artist John Langdon, who created stunning ambigram designs for Dan Brown's novels.
            </p>

            <h3 className="text-xl font-playfair font-bold mb-3">Types of Ambigrams</h3>
            <ul className="mb-6 space-y-2">
              <li><strong>Rotational Ambigrams:</strong> Read the same when rotated 180°</li>
              <li><strong>Mirror Ambigrams:</strong> Read the same when reflected</li>
              <li><strong>Figure-Ground Ambigrams:</strong> Use negative space to create dual meanings</li>
              <li><strong>Chain Ambigrams:</strong> Multiple words that can be read in sequence</li>
            </ul>

            <h3 className="text-xl font-playfair font-bold mb-3">Why Create Ambigrams?</h3>
            <p className="mb-6">
              Ambigrams serve various purposes, from artistic expression to practical applications. They're popular for <Link to="/blog/ambigram-tattoo-designs" className="text-purple-600 hover:text-purple-800">tattoo designs</Link> because of their symmetrical beauty, and they make memorable <Link to="/blog/ambigram-logo-design" className="text-purple-600 hover:text-purple-800">logo designs</Link> for businesses seeking unique brand identity.
            </p>

            <h3 className="text-xl font-playfair font-bold mb-3">Getting Started with Ambigrams</h3>
            <p className="mb-6">
              Creating your first ambigram might seem challenging, but with the right tools and techniques, anyone can master this art form. Our <Link to="/" className="text-purple-600 hover:text-purple-800">free ambigram generator</Link> provides an excellent starting point for beginners, offering various fonts and customization options.
            </p>

            <p className="mb-6">
              For those looking to dive deeper into ambigram creation, check out our comprehensive <Link to="/blog/create-perfect-ambigram" className="text-purple-600 hover:text-purple-800">step-by-step tutorial</Link> that covers advanced techniques and professional tips.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-lg font-playfair font-bold mb-2">Ready to Create Your Own Ambigram?</h4>
              <p className="mb-4">Start designing beautiful ambigrams instantly with our free online generator. No experience required!</p>
              <Link to="/">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Try Free Ambigram Generator
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

export default WhatIsAmbigram;
