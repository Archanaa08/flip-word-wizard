
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="relative bg-hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <Navigation />
        <div className="relative container mx-auto px-4 py-8 md:py-12">
          <div className="text-center text-white">
            <Link to="/" className="inline-block mb-3 md:mb-4">
              <h1 className="text-2xl md:text-3xl font-playfair font-bold hover:text-yellow-300 transition-colors">
                Ambigram Generator
              </h1>
            </Link>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-3 md:mb-4">
              Privacy Policy
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto px-4">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Overview */}
          <Card className="shadow-lg">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-ambigram-purple" />
                Privacy Overview
              </CardTitle>
              <CardDescription className="text-sm md:text-base">
                Last updated: {new Date().toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none p-4 md:p-6 pt-0">
              <p className="text-sm md:text-base leading-relaxed">
                At Ambigram Generator, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our ambigram generator service.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="shadow-lg">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Eye className="w-4 h-4 md:w-5 md:h-5 text-ambigram-blue" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 md:p-6 pt-0">
              <div>
                <h3 className="font-semibold mb-2 text-base md:text-lg">Information You Provide</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Text input for ambigram generation</li>
                  <li>Contact information when you reach out to us</li>
                  <li>Feedback and communications</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-base md:text-lg">Automatically Collected Information</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Usage data and analytics</li>
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="shadow-lg">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <UserCheck className="w-4 h-4 md:w-5 md:h-5 text-ambigram-indigo" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>To provide and improve our ambigram generation service</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To analyze usage patterns and optimize our website</li>
                <li>To send important updates about our service</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="shadow-lg">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Lock className="w-4 h-4 md:w-5 md:h-5 text-ambigram-pink" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 md:p-6 pt-0">
              <p className="text-sm md:text-base leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. Our security practices include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Secure data storage and processing</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="shadow-lg">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-lg md:text-xl">Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <p className="mb-4 text-sm md:text-base">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>Access your personal information</li>
                <li>Correct or update your data</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card className="shadow-lg">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-lg md:text-xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <p className="mb-4 text-sm md:text-base leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-sm md:text-base"><strong>Email:</strong> clangity@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
