'use client';
import useCart from '@/hooks/useCart';
import { Product } from '@/type';
import { Heart, Maximize2, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface ProductActionProps {
   product: Product;
}
const ProductAction: React.FC<ProductActionProps> = ({ product }) => {
   const router = useRouter();
   const cart = useCart();
   const zoomClick = () => {
      router.push(`/product/${product.id}`);
   };
   const heartClick = () => {
      cart.heartItem(product);
   };
   const cartClick = () => {
      cart.addItem(product);
   };
   return (
      <div className="flex gap-3   ">
         <div
            onClick={zoomClick}
            className="group scale-100 md:scale-0 group-hover:scale-100 hover:bg-red-600 hover:text-white cursor-pointer hover:rotate-[360deg]  duration-500  p-2 rounded-full bg-white"
         >
            <Maximize2 size={25} />{' '}
         </div>
         <div
            onClick={heartClick}
            className="scale-100 md:scale-0 group-hover:scale-100 hover:bg-red-600 hover:text-white cursor-pointer hover:rotate-[360deg] duration-500  p-2 rounded-full bg-white"
         >
            <Heart size={25} />
         </div>
         <div
            onClick={cartClick}
            className="scale-100 md:scale-0 group-hover:scale-100 hover:bg-red-600 hover:text-white cursor-pointer hover:rotate-[360deg] duration-500  p-2 rounded-full bg-white"
         >
            <ShoppingCart size={25} />
         </div>
      </div>
   );
};
export default ProductAction;
