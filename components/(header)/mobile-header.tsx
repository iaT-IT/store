import { Category } from '@/type';
import ActionNav from './action-nav';
import Logo from '@/helpers/logo';
import MainNav from './main-nav';
import { HeaderProps } from './normal-header';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Heading from '../heading';
import { Button } from '../ui/button';
import { Menu, XCircle } from 'lucide-react';

const MobileHeader: React.FC<HeaderProps> = ({ categories }) => {
   return (
      <div className="flex justify-between items-center md:hidden">
         <Logo />

         <Sheet>
            <SheetTrigger asChild>
               <Menu
                  size={30}
                  className="cursor-pointer"
               />
            </SheetTrigger>
            <SheetContent
               className="pt-14"
               side={'left'}
            >
               <div className="flex flex-col gap-4 relative">
                  <ActionNav />
                  <Logo />
                  <MainNav categories={categories} />
               </div>
            </SheetContent>
         </Sheet>
      </div>
   );
};
export default MobileHeader;
