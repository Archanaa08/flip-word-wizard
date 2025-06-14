
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
      <NavigationMenu>
        <NavigationMenuList className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-white hover:bg-white/20 hover:text-white"
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
                  "bg-transparent text-white hover:bg-white/20 hover:text-white"
                )}
              >
                About
              </button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <button
                onClick={() => handleScrollToSection('faq')}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-white hover:bg-white/20 hover:text-white"
                )}
              >
                FAQ
              </button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
