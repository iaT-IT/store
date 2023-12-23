import Logo from '@/helpers/logo';
import { Menu } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';
import ActionNav from './(navbar)/action-nav';
import MainNav from './(navbar)/main-nav';
import { HeaderProps } from './normal-header';
// Định nghĩa component MobileHeader với props là categories
const MobileHeader: React.FC<HeaderProps> = ({ categories }) => {
   return (
      // Phần layout cho header trên màn hình di động
      <div className="flex justify-between items-center md:hidden">
         <Logo />{/* Component Logo cho hiển thị logo */}

         {/* Component Sheet để tạo menu cho màn hình di động */}
         <Sheet>
            {/* SheetTrigger để mở menu khi nhấn vào icon Menu */}
            <SheetTrigger asChild>
               <Menu
                  size={30}
                  className="cursor-pointer"
               />
            </SheetTrigger>
            {/* SheetContent để chứa nội dung của menu */}
            <SheetContent
               className="pt-14"
               side={'left'}
            >
               {/* SheetClose để đóng menu */}
               <SheetClose>
                  <div className="flex flex-col gap-4 relative">
                     <ActionNav />
                     <Logo />{/* Hiển thị Logo trong menu */}
                     <MainNav categories={categories} />
                  </div>
               </SheetClose>
            </SheetContent>
         </Sheet>
      </div>
   );
};
export default MobileHeader;// Export component MobileHeader
