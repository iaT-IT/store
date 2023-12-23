'use client';
import Heading from '@/helpers/heading';
import NoResult from '@/helpers/no-result';
import { Separator } from '@/components/ui/separator';
import useCart from '@/hooks/useCart';
import { formatter } from '@/lib/utils';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CartItem from './cart-item';

// Component CartContent
const CartContent = () => {
   const router = useRouter();// Sử dụng hook useRouter từ Next.js để quản lý routing
   const cart = useCart();// Sử dụng hook useCart để lấy thông tin giỏ hàng

   // Render component CartContent
   return (
      <>
         
         <Separator />{/* Hiển thị đường phân cách */}

         {/* Kiểm tra nếu giỏ hàng không trống */}
         {cart.items && cart.items.length !== 0 ? (
            <>
               {/* Hiển thị tiêu đề của các cột */}
               <div className="grid grid-cols-12">
                  <div className="col-span-4">
                     <Heading
                        text="Sản phẩm"
                        className="text-sm md:text-lg"
                     />
                  </div>
                  <div className="col-span-2">
                     <Heading
                        text="Giá"
                        className="text-sm md:text-lg"
                     />
                  </div>
                  <div className="col-span-2">
                     <Heading
                        text="Kích thước"
                        className="text-sm md:text-lg"
                     />
                  </div>
                  <div className="col-span-2">
                     <Heading
                        text="Màu sắc"
                        className="text-sm md:text-lg"
                     />
                  </div>
                  <div className="col-span-2"></div>
               </div>
               {/* Hiển thị danh sách sản phẩm trong giỏ hàng */}
               <div className="grid grid-cols-12 gap-3 items-center">
                  {cart.items.map((item) => (
                     <>
                        {/* Hiển thị thông tin của từng sản phẩm */}
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
                        {/* Nút xóa sản phẩm khỏi giỏ hàng */}
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
               <NoResult />{/* Hiển thị thông báo khi giỏ hàng trống */}
            </>
         )}
         {/* Nút để quay lại trang mua sắm */}
         <div
            onClick={() => router.push('/shop')}
            className="px-4 py-2 bg-neutral-200 hover:bg-neutral-400 cursor-pointer w-fit dark:text-black rounded-md"
         >
            <span>
               {cart.items && cart.items.length !== 0
                  ? 'Tiếp tục mua sắm'
                  : 'Let shopping now!'}
            </span>
         </div>
      </>
   );
};
export default CartContent;// Xuất component CartContent
