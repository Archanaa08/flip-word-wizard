
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 'what-is-ambigram',
      title: 'What is an Ambigram? Complete Guide to Rotational Typography',
      excerpt: 'Discover the fascinating world of ambigrams - text that reads the same when rotated 180 degrees. Learn about different types, history, and how to create your own.',
      date: '2025-06-10',
      readTime: '8 min read',
      category: 'Beginner Guide',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop'
    },
    {
      id: 'ambigram-tattoo-designs',
      title: 'Ambigram Tattoo Designs: Ultimate Guide for Meaningful Body Art',
      excerpt: 'Explore stunning ambigram tattoo ideas and learn why they make perfect tattoos. From name ambigrams to inspirational words - find your perfect design.',
      date: '2025-06-08',
      readTime: '12 min read',
      category: 'Tattoo Design',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop'
    },
    {
      id: 'create-perfect-ambigram',
      title: 'How to Create the Perfect Ambigram: Step-by-Step Tutorial',
      excerpt: 'Master the art of ambigram creation with our comprehensive tutorial. Learn professional techniques, font selection, and design principles.',
      date: '2025-06-05',
      readTime: '15 min read',
      category: 'Tutorial',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
    },
    {
      id: 'ambigram-logo-design',
      title: 'Ambigram Logo Design: Creating Memorable Brand Identity',
      excerpt: 'Learn how to use ambigrams in logo design to create unique, memorable brand identities. Discover famous ambigram logos and design principles.',
      date: '2025-06-03',
      readTime: '10 min read',
      category: 'Logo Design',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <header className="relative overflow-hidden bg-hero-gradient py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <Navigation />
        <div className="relative container mx-auto px-4 pt-20">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
              Ambigram Blog
            </h1>
            <p className="text-lg md:text-xl font-inter font-light">
              Discover the art and science of ambigrams. Expert guides, tutorials, and inspiration for creating stunning rotational typography.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl font-playfair line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  Read More 
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
