'use client';
import Heading from '@/helpers/heading';
import NoResult from '@/helpers/no-result';
import { Separator } from '@/components/ui/separator';
import useCart from '@/hooks/useCart';
import { formatter } from '@/lib/utils';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CartItem from './cart-item';

const CartContent = () => {
   const router = useRouter();
   const cart = useCart();
   return (
      <>
         <Separator />
         {cart.items && cart.items.length !== 0 ? (
            <>
               <div className="grid grid-cols-12">
                  <div className="col-span-4">
                     <Heading
                        text="Product"
                        className="text-sm md:text-lg"
                     />
                  </div>
                  <div className="col-span-2">
                     <Heading
                        text="Price"
                        className="text-sm md:text-lg"
                     />
                  </div>
                  <div className="col-span-2">
                     <Heading
                        text="Size"
                        className="text-sm md:text-lg"
                     />
                  </div>
                  <div className="col-span-2">
                     <Heading
                        text="Color"
                        className="text-sm md:text-lg"
                     />
                  </div>
                  <div className="col-span-2"></div>
               </div>
               <div className="grid grid-cols-12 gap-3 items-center">
                  {cart.items.map((item) => (
                     <>
                        <div className="col-span-4">
                           <CartItem product={item} />
                        </div>
                        <div className="col-span-2">
                           {
                              <span
                                 className="text-xs md:text-base 
                         font-bold text-red-500 "
                              >
                                 {formatter.format(Number(item.price))}
                              </span>
                           }
                        </div>
                        <div className="col-span-2">
                           <span
                              className="text-xs dark:text-white md:text-base 
                          text-neutral-900"
                           >
                              {item.size.name}
                           </span>
                        </div>
                        <div className="col-span-2">
                           <span
                              className=" 
                         flex w-6 h-6 md:w-8 md:h-8 rounded-full border bg-neutral-900"
                              style={{ backgroundColor: item.color.value }}
                           />
                        </div>
                        <div className="col-span-2">
                           <div
                              onClick={() => cart.removeItem(item.id)}
                              className="w-8 h-8 rounded-full hover:bg-neutral-400 flex items-center justify-center hover:text-white cursor-pointer"
                           >
                              {' '}
                              <X size={24} />
                           </div>
                        </div>
                     </>
                  ))}
               </div>
            </>
         ) : (
            <>
               <NoResult />
            </>
         )}
         <div
            onClick={() => router.push('/shop')}
            className="px-4 py-2 bg-neutral-200 hover:bg-neutral-400 cursor-pointer w-fit dark:text-black rounded-md"
         >
            <span>
               {cart.items && cart.items.length !== 0
                  ? 'Continue Shopping'
                  : 'Let shopping now!'}
            </span>
         </div>
      </>
   );
};
export default CartContent;
