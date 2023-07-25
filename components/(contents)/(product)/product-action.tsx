'use client';
import TooltipInfo from '@/helpers/tooltip-info';
import useCart from '@/hooks/useCart';
import { Product } from '@/type';
import { Heart, Maximize2, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
interface ProductActionProps {
   product: Product;
}
const ProductAction: React.FC<ProductActionProps> = ({ product }) => {
   const router = useRouter();
   const cart = useCart();
   const zoomClick = () => {
      router.push(`/product/${product.id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };
   const heartClick = () => {
      cart.heartItem(product);
   };
   const cartClick = () => {
      cart.addItem(product);
   };
   return (
      <div className="flex gap-3   ">
         <TooltipInfo text="Zoom">
            <div
               onClick={zoomClick}
               className="group scale-100 md:scale-0 group-hover:scale-100 hover:bg-red-600 hover:text-white dark:hover:text-white dark:text-black cursor-pointer hover:rotate-[360deg]  duration-500  p-2 rounded-full bg-white"
            >
               {' '}
               <Maximize2 size={25} />{' '}
            </div>
         </TooltipInfo>
         <TooltipInfo text="Add to wish list">
            <div
               onClick={heartClick}
               className="scale-100 md:scale-0 group-hover:scale-100 hover:bg-red-600 hover:text-white dark:text-black dark:hover:text-white cursor-pointer hover:rotate-[360deg] duration-500  p-2 rounded-full bg-white"
            >
               {' '}
               <Heart size={25} />
            </div>
         </TooltipInfo>
         <TooltipInfo text="Add to cart">
            <div
               onClick={cartClick}
               className="scale-100 md:scale-0 group-hover:scale-100 hover:bg-red-600 hover:text-white dark:text-black dark:hover:text-white cursor-pointer hover:rotate-[360deg] duration-500  p-2 rounded-full bg-white"
            >
               {' '}
               <ShoppingCart size={25} />
            </div>
         </TooltipInfo>
      </div>
   );
};
export default ProductAction;
