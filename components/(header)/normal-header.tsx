import { Category } from '@/type';
import ActionNav from './(navbar)/action-nav';
import Logo from '@/helpers/logo';
import MainNav from './(navbar)/main-nav';
export interface HeaderProps {
   categories: Category[];
}
const NormalHeader: React.FC<HeaderProps> = ({ categories }) => {
   return (
      <div className="hidden md:flex justify-between">
         <Logo />
         <MainNav categories={categories} />
         <ActionNav />
      </div>
   );
};
export default NormalHeader;
