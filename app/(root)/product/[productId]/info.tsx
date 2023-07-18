'use client';
import Heading from '@/components/heading';
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
            <span className="text-neutral-500 text-sm">
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
            <span className="text-neutral-500 text-xs">
               ({Math.floor(Math.random() * 200)} reviews)
            </span>
         </div>
         <span className=" text-2xl font-bold text-red-600">
            {formatter.format(Number(product.price))}
         </span>
         <span className="text-neutral-600 text-xs">{text}</span>
         <div className="flex justify-between gap-10 items-center">
            <div
               onClick={cartClick}
               className="w-full px-2 py-2 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80"
            >
               <span className="uppercase font-bold text-white text-sm">
                  Add To Cart
               </span>
            </div>
            <div
               onClick={heartClick}
               className="hover:rotate-[360deg] border border-black hover:border-white hover:bg-red-600 hover:text-white cursor-pointer  duration-500  p-2 rounded-full bg-white"
            >
               <Heart size={25} />
            </div>
         </div>
         <div className="flex flex-col gap-3">
            <div className=" items-center gap-5 grid grid-cols-4">
               <span className="text-black text-sm font-semibold">Color:</span>
               <span
                  className=" 
                         flex w-8 h-8 rounded-full border bg-neutral-900"
                  style={{ backgroundColor: product.color.value }}
               />
            </div>
            <div className="grid grid-cols-4 items-center gap-5">
               <span className="text-black text-sm font-semibold">Size:</span>
               <span className="text-black text-sm font">
                  {product.size.name}
               </span>
            </div>
         </div>
      </div>
   );
};
export default Info;
