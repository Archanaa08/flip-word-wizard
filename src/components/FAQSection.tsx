
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  return (
    <section id="faq" className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
            <HelpCircle className="inline w-6 h-6 md:w-8 md:h-8 mr-2 text-ambigram-purple" />
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Get answers to common questions about ambigrams and our generator tool.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white dark:bg-gray-800 rounded-lg px-4 md:px-6 border border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="text-left text-sm md:text-base text-gray-900 dark:text-white">
                What is an ambigram?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                An ambigram is a form of typographical art that reads the same when rotated 180 degrees. 
                The word looks identical whether viewed normally or upside down, creating a fascinating visual effect.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white dark:bg-gray-800 rounded-lg px-4 md:px-6 border border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="text-left text-sm md:text-base text-gray-900 dark:text-white">
                How do I create the perfect ambigram?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                Start with shorter words or names for best results. Experiment with different fonts, especially our tattoo-style fonts. 
                Adjust letter spacing and use the rotation feature to check your design. Words with symmetrical letters work best.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white dark:bg-gray-800 rounded-lg px-4 md:px-6 border border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="text-left text-sm md:text-base text-gray-900 dark:text-white">
                Can I use ambigrams for commercial purposes?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                Yes! The ambigrams you create with our tool can be used for personal and commercial projects, 
                including logos, tattoos, artwork, and design projects. We encourage creative use of your designs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white dark:bg-gray-800 rounded-lg px-4 md:px-6 border border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="text-left text-sm md:text-base text-gray-900 dark:text-white">
                What file formats can I download?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                Currently, you can download your ambigrams as high-resolution PNG files. We're working on adding 
                SVG and PDF export options for even more flexibility in your design projects.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-white dark:bg-gray-800 rounded-lg px-4 md:px-6 border border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="text-left text-sm md:text-base text-gray-900 dark:text-white">
                Do you offer custom ambigram design services?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                While our tool handles most ambigram needs automatically, we do offer custom design services for 
                complex projects. Contact us through our contact form to discuss your specific requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
