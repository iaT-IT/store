import Logo from '@/helpers/logo';
import { Menu } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';
import ActionNav from './action-nav';
import MainNav from './main-nav';
import { HeaderProps } from './normal-header';

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
               <SheetClose>
                  <div className="flex flex-col gap-4 relative">
                     <ActionNav />
                     <Logo />
                     <MainNav categories={categories} />
                  </div>
               </SheetClose>
            </SheetContent>
         </Sheet>
      </div>
   );
};
export default MobileHeader;
