import Container from '@/components/ui/container';
import Summary from '../components/summary';
import WishList from './components/wish-list';

const CartPage = () => {
   return (
      <Container className="mx-2 md:mx-14">
         <WishList />
      </Container>
   );
};
export default CartPage;
