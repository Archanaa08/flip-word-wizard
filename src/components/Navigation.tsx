
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const handleScrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Small delay to ensure the page has loaded
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="absolute top-2 md:top-4 right-4 md:right-8 z-30 w-auto px-4 md:px-0">
      <NavigationMenu className="w-full">
        <NavigationMenuList className="bg-white/10 backdrop-blur-md rounded-full px-3 md:px-6 py-2 flex-wrap justify-center gap-1 md:gap-0">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-white hover:bg-white/20 hover:text-white text-sm md:text-base px-3 md:px-4 py-1 md:py-2"
                )}
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <button
                onClick={() => handleScrollToSection('about')}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-white hover:bg-white/20 hover:text-white text-sm md:text-base px-3 md:px-4 py-1 md:py-2"
                )}
              >
                About
              </button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/blog"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-white hover:bg-white/20 hover:text-white text-sm md:text-base px-3 md:px-4 py-1 md:py-2"
                )}
              >
                Blog
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/#faq"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    handleScrollToSection('faq');
                  }
                  // If not on home page, let the Link handle navigation to /#faq
                }}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-white hover:bg-white/20 hover:text-white text-sm md:text-base px-3 md:px-4 py-1 md:py-2"
                )}
              >
                FAQ
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
