'use client';
import { Heart, ShoppingBag } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';
import useCart from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
         <ThemeToggle />
         <div className="flex gap-4">
            <div className="relative">
               <Heart
                  onClick={() => router.push('/cart/wish')}
                  strokeWidth={1}
                  size={24}
                  className="cursor-pointer hover:opacity-80 font-light "
               />
               <div className="absolute top-0 right-0  -translate-y-1/2 translate-x-2/3 px-2 aspect-square rounded-full bg-black">
                  <p className="text-sm text-white flex items-center h-full">
                     {cart?.likes?.length || 0}
                  </p>
               </div>
            </div>
            <div className="relative">
               <ShoppingBag
                  onClick={() => router.push('/cart')}
                  strokeWidth={1}
                  size={24}
                  className="cursor-pointer hover:opacity-80 font-light"
               />
               <div className="absolute top-0 right-0  -translate-y-1/2 translate-x-2/3 px-2 aspect-square rounded-full bg-black">
                  <p className="text-sm text-white flex items-center h-full">
                     {cart?.items?.length || 0}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};
export default ActionNav;
