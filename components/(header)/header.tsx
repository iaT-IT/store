import getCategories from '@/actions/getCategories';
import Container from '../ui/container';
import MobileHeader from './mobile-header';
import NormalHeader from './normal-header';

const Header = async () => {
   const categories = await getCategories();
   return (
      <Container className="mx-2 md:mx-14">
         <NormalHeader categories={categories} />
         <MobileHeader categories={categories} />
      </Container>
   );
};
export default Header;
