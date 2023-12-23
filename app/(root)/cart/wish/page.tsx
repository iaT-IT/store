import Container from '@/components/ui/container';
import Summary from '../components/summary';
import WishList from './components/wish-list';

// Component CartPage hiển thị trang danh sách mong muốn
const CartPage = () => {
   // Render component Container để bao bọc các phần tử và định dạng giao diện
   return (
      <Container className="mx-2 md:mx-14">
         <WishList />
      </Container>
   );
};
export default CartPage;// Xuất component CartPage