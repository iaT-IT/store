'use client';
import Heading from '@/helpers/heading';
import TooltipInfo from '@/helpers/tooltip-info';
import useCart from '@/hooks/useCart';
import { formatter } from '@/lib/utils';
import { Product } from '@/type';
import { Heart, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface InfoProps {
   product: Product;
}
const text =
   'Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt.';
const Info: React.FC<InfoProps> = ({ product }) => {
   const cart = useCart();
   const [isMounted, setMounted] = useState(false);
   useEffect(() => {
      setMounted(true);
   }, []);
   if (!isMounted) return null;
   const heartClick = () => {
      cart.heartItem(product);
   };
   const cartClick = () => {
      cart.addItem(product);
   };
   return (
      <div className="flex flex-col gap-3">
         <div className="flex flex-col gap-1">
            <Heading
               text={product.name}
               className="text-2xl"
            />
            <span className="text-neutral-500 text-sm dark:text-neutral-200">
               Brand: {product.category.name}
            </span>
         </div>
         <div className="flex gap-1 items-center">
            {Array.from({ length: 5 }).map((x, index) => (
               <Star
                  key={index}
                  size={10}
                  fill="#facc15"
                  className="text-yellow-400"
               />
            ))}
            <span className="text-neutral-500 text-xs dark:text-neutral-200">
               ({Math.floor(Math.random() * 200)} reviews)
            </span>
         </div>
         <span className=" text-2xl font-bold text-red-600">
            {formatter.format(Number(product.price))}
         </span>
         <span className="text-neutral-600 text-xs dark:text-neutral-400">
            {text}
         </span>
         <div className="flex justify-between gap-10 items-center">
            <div
               onClick={cartClick}
               className="w-full px-2 py-2 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80"
            >
               <span className="uppercase font-bold text-white text-sm">
                  Add To Cart
               </span>
            </div>
            <TooltipInfo text="Add to wish list">
               <div
                  onClick={heartClick}
                  className="hover:rotate-[360deg] border border-black hover:border-white hover:bg-red-600 hover:text-white cursor-pointer  duration-500  p-2 rounded-full bg-white dark:text-black dark:hover:text-white dark:border-black"
               >
                  <Heart size={25} />
               </div>
            </TooltipInfo>
         </div>
         <div className="flex flex-col gap-3">
            <div className=" items-center gap-5 grid grid-cols-4">
               <span className="text-black text-sm font-semibold dark:text-neutral-200">
                  Color:
               </span>
               <span
                  className=" 
                         flex w-8 h-8 rounded-full border bg-neutral-900 "
                  style={{ backgroundColor: product.color.value }}
               />
            </div>
            <div className="grid grid-cols-4 items-center gap-5 ">
               <span className="text-black text-sm font-semibold dark:text-neutral-200">
                  Size:
               </span>
               <span className="text-black text-sm font dark:text-neutral-200">
                  {product.size.name}
               </span>
            </div>
         </div>
      </div>
   );
};
export default Info;
