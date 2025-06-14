
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
              <a
                href="#about"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-white hover:bg-white/20 hover:text-white"
                )}
              >
                About
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
