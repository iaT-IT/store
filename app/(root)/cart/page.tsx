import Container from '@/components/ui/container';
import Summary from './components/summary';

// Component CartPage hiển thị trang giỏ hàng
const CartPage = () => {
   // Render component Container để bao bọc các phần tử và định dạng giao diện
   return (
      <Container className="mx-2 md:mx-14">
         <Summary />
      </Container>
   );
};
export default CartPage;// Xuất component CartPage
