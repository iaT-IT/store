'use client';
import { Heart, ShoppingBag } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';
import useCart from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import TooltipInfo from '@/helpers/tooltip-info';

const ActionNav = () => {
   const router = useRouter();
   const cart = useCart();
   const [isMounted, setMounted] = useState(false);
   useEffect(() => {
      setMounted(true);
   }, []);
   if (!isMounted) return null;

   return (
      <div className="flex gap-2 items-center justify-between">
         <TooltipInfo text="Change Mode">
            {' '}
            <ThemeToggle />
         </TooltipInfo>
         <div className="flex gap-4 ">
            <div className="relative flex items-center">
               <TooltipInfo text="Click to wish list">
                  <Heart
                     onClick={() => router.push('/cart/wish')}
                     strokeWidth={1}
                     size={24}
                     className="cursor-pointer hover:opacity-80 font-light "
                  />
                  <div className="absolute top-0 right-0  -translate-y-1/2 translate-x-2/3 w-6 aspect-square rounded-full bg-black dark:bg-white ">
                     <p className="w-full justify-center text-sm text-white flex items-center h-full dark:text-black">
                        {cart?.likes?.length || 0}
                     </p>
                  </div>
               </TooltipInfo>
            </div>
            <div className="relative flex items-center">
               <TooltipInfo text="Click to Checkout">
                  <ShoppingBag
                     onClick={() => router.push('/cart')}
                     strokeWidth={1}
                     size={24}
                     className="cursor-pointer hover:opacity-80 font-light"
                  />
                  <div className="absolute top-0 right-0  -translate-y-1/2 translate-x-2/3 w-6 aspect-square rounded-full bg-black dark:bg-white">
                     <p className="w-full justify-center text-sm text-white flex items-center h-full dark:text-black">
                        {cart?.items?.length || 0}
                     </p>
                  </div>
               </TooltipInfo>
            </div>
         </div>
      </div>
   );
};
export default ActionNav;
