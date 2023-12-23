'use client';
import { Separator } from '@/components/ui/separator';
import useCart from '@/hooks/useCart';
import { formatter } from '@/lib/utils';
import axios from 'axios';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Định nghĩa headers cho CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_URL,
};

// Component CartCheckout
const CartCheckout = () => {
  const cart = useCart();//lấy thông tin giỏ hàng
  const pathname = useSearchParams()
  const router = useRouter()
  const [isRender,setIsRender] = useState(false)
  if(pathname.get("success") == 1)
  {
    cart.removeAll()
    router.push("/")
  }
  useEffect(()=>{
    if(!isRender)
    {
      setIsRender(true)
    }
  })
  // Hàm tính tổng giá trị của giỏ hàng
  const getTotal = () => {
    const cost = cart.items.reduce((total, product) => {
      return total + Number(product.price);
    }, 0);
    return cost;
  };

  // Hàm xử lý khi người dùng nhấn nút Checkout
  const onCheckout = async () => {
    // Thực hiện request HTTP để xử lý thanh toán
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: cart.items.map((item) => item.id) },
      { headers: corsHeaders },
    );

    // Chuyển hướng đến URL được trả về từ server
    if(typeof window !== undefined)
    window.location = response.data.url;
  };
  if(!isRender) return
  // Render component CartCheckout
  return (
    <>

      {/* Hiển thị đường phân cách */}
      <Separator />

      {/* Phần hiển thị giỏ hàng và tổng cộng */}
      <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-3">
        {/* Phần nhập mã giảm giá */}
        <div className="rounded-full flex items-center border border-neutral-500 dark:bg-white justify-between h-10 col">
          <div className="px-3 text-sm dark:text-black">
            {' '}
            Nhập mã giảm giá của bạn
          </div>
          <div className="w-1/4 py-1  mr-1    bg-red-600 rounded-full uppercase text-white font-bold text-center text-sm flex items-center justify-center">
            Áp dụng
          </div>
        </div>
        <div></div>
        {/* Phần hiển thị tổng giá trị giỏ hàng */}
        <div className="flex flex-col gap-3 p-4 bg-neutral-200 rounded-md text-slate-900 font-semibold">
          <h2 className="uppercase">Chi tiết thanh toán</h2>
          {/* Hiển thị giá trị Subtotal */}
          <div className="flex justify-between items-center">
            {' '}
            <h2 className="">Tổng tiền hàng</h2>
            <span
              className="text-base 
                         font-bold text-red-500"
            >
              {formatter.format(getTotal())}
            </span>
          </div>
          {/* Hiển thị giá trị Total */}
          <div className="flex justify-between items-center">
            {' '}
            <h2 className="">Tổng thanh toán</h2>
            <span
              className="text-base 
                         font-bold text-red-500"
            >
              {formatter.format(getTotal())}
            </span>
          </div>
          {/* Nút chuyển hướng đến trang thanh toán */}
          <div
            className="w-full px-2 py-2 bg-red-600 rounded-full flex items-center justify-center hover:cursor-pointer  hover:opacity-90 hover:scale-105"
            onClick={onCheckout}
          >
            <span className="uppercase font-bold text-white text-sm">
              Mua hàng
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCheckout;// Xuất component CartCheckout
