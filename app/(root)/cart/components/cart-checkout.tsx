'use client';
import { Separator } from '@/components/ui/separator';
import useCart from '@/hooks/useCart';
import { formatter } from '@/lib/utils';
import axios from 'axios';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const CartCheckout = () => {
  const cart = useCart();
  const getTotal = () => {
    const cost = cart.items.reduce((total, product) => {
      return total + Number(product.price);
    }, 0);
    return cost;
  };
  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: cart.items.map((item) => item.id) },
      { headers: corsHeaders },
    );
    window.location = response.data.url;
  };
  return (
    <>
      <Separator />

      <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-3">
        <div className="rounded-full flex items-center border border-neutral-500 dark:bg-white justify-between h-10 col">
          <div className="px-3 text-sm dark:text-black">
            {' '}
            Enter your coupon code
          </div>
          <div className="w-1/4 py-1  mr-1    bg-red-600 rounded-full uppercase text-white font-bold text-center text-sm flex items-center justify-center">
            APPLY
          </div>
        </div>
        <div></div>
        <div className="flex flex-col gap-3 p-4 bg-neutral-200 rounded-md text-slate-900 font-semibold">
          <h2 className="uppercase">Cart Total</h2>
          <div className="flex justify-between items-center">
            {' '}
            <h2 className="">Subtotal</h2>
            <span
              className="text-base 
                         font-bold text-red-500"
            >
              {formatter.format(getTotal())}
            </span>
          </div>
          <div className="flex justify-between items-center">
            {' '}
            <h2 className="">Total</h2>
            <span
              className="text-base 
                         font-bold text-red-500"
            >
              {formatter.format(getTotal())}
            </span>
          </div>
          <div
            className="w-full px-2 py-2 bg-red-600 rounded-full flex items-center justify-center hover:cursor-pointer  hover:opacity-90 hover:scale-105"
            onClick={onCheckout}
          >
            <span className="uppercase font-bold text-white text-sm">
              Process To Checkout
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCheckout;
