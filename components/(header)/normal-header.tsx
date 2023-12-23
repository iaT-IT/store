import { Category } from '@/type';
import ActionNav from './(navbar)/action-nav';
import Logo from '@/helpers/logo';
import MainNav from './(navbar)/main-nav';
// Định nghĩa component NormalHeader với props là categories
export interface HeaderProps {
   categories: Category[];
}

// Component NormalHeader là header chuẩn cho màn hình lớn
const NormalHeader: React.FC<HeaderProps> = ({ categories }) => {
   return (
      // Phần layout cho header trên màn hình lớn
      <div className="hidden md:flex justify-between">
         {/* Component Logo cho hiển thị logo */}
         <Logo />
         {/* Component MainNav để hiển thị điều hướng chính, với categories như là props */}
         <MainNav categories={categories} />
         {/* Component ActionNav cho các hành động bổ sung */}
         <ActionNav />
      </div>
   );
};
export default NormalHeader;// Export component NormalHeader
