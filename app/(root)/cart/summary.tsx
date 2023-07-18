import CartCheckout from './cart-checkout';
import CartContent from './cart-content';

const Summary = () => {
   return (
      <div className="flex flex-col gap-10">
         <CartContent />
         <CartCheckout />
      </div>
   );
};
export default Summary;
