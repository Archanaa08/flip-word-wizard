
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-12">
          <div className="text-center text-white">
            <Link to="/" className="inline-block mb-4">
              <h1 className="text-3xl font-playfair font-bold hover:text-yellow-300 transition-colors">
                AmbiCraft
              </h1>
            </Link>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Privacy Policy
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-ambigram-purple" />
                Privacy Overview
              </CardTitle>
              <CardDescription>
                Last updated: {new Date().toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                At AmbiCraft, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our ambigram generator service.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-ambigram-blue" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Information You Provide</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Text input for ambigram generation</li>
                  <li>Contact information when you reach out to us</li>
                  <li>Feedback and communications</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Automatically Collected Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Usage data and analytics</li>
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-ambigram-indigo" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
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
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-ambigram-pink" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. Our security practices include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Secure data storage and processing</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
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
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@ambicraft.com</p>
                <p><strong>Address:</strong> 123 Design Street, Creative City, CC 12345</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
