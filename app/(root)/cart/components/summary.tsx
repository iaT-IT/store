import CartCheckout from './cart-checkout';
import CartContent from './cart-content';

// Component Summary kết hợp các components CartContent và CartCheckout
const Summary = () => {
   // Render component Summary
   return (
      <div className="flex flex-col gap-10 items-center md:items-stretch">
         {/* Hiển thị thông tin giỏ hàng */}
         <CartContent />
         {/* Hiển thị phần thanh toán giỏ hàng */}
         <CartCheckout />
      </div>
   );
};
export default Summary;// Xuất component Summary
