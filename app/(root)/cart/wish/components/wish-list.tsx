'use client';
import Heading from '@/helpers/heading';
import useCart from '@/hooks/useCart';
import CartItem from '../../components/cart-item';
import { formatter } from '@/lib/utils';
import { X } from 'lucide-react';
import NoResult from '@/helpers/no-result';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

// Component WishList hiển thị danh sách sản phẩm trong danh sách mong muốn (wishlist)
const WishList = () => {
   const router = useRouter();// Sử dụng hook useRouter để quản lý routing
   const cart = useCart();// Sử dụng hook useCart để lấy thông tin danh sách mong muốn

   // Render component WishList
   return (
      <div className="flex flex-col gap-3 items-center md:items-stretch">
                 
         <Separator />{/* Hiển thị đường phân cách */}

         {/* Kiểm tra nếu danh sách mong muốn không trống */}
         {cart.likes && cart.likes.length !== 0 ? (
            <>
               {/* Hiển thị tiêu đề của các cột */}
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
               {/* Hiển thị danh sách sản phẩm trong danh sách mong muốn */}
               <div className="grid grid-cols-12 gap-3 items-center">
                  {cart.likes.map((item) => (
                     <>
                     {/* Hiển thị thông tin của từng sản phẩm */}
                        <div className="col-span-4">
                           <CartItem product={item} />
                        </div>
                        <div className="col-span-2">
                           {/* Hiển thị giá của sản phẩm */}
                           {
                              <span
                                 className="text-xs md:text-base font-bold text-red-500 "
                              >
                                 {formatter.format(Number(item.price))}
                              </span>
                           }
                        </div>
                        <div className="col-span-2">
                           {/* Hiển thị kích thước của sản phẩm */}
                           <span
                              className="text-xs dark:text-white md:text-base text-neutral-900"
                           >
                              {item.size.name}
                           </span>
                        </div>
                        <div className="col-span-2">
                           {/* Hiển thị màu sắc của sản phẩm */}
                           <span
                              className=" 
                    flex w-6 h-6 md:w-8 md:h-8 rounded-full border bg-neutral-900"
                              style={{ backgroundColor: item.color.value }}
                           />
                        </div>
                        <div className="col-span-2">
                           {/* Nút xóa sản phẩm khỏi danh sách mong muốn */}
                           <div
                              onClick={() => cart.removeHeartItem(item.id)}
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
               <NoResult />{/* Hiển thị thông báo khi danh sách mong muốn trống */}
            </>
         )}

         {/* Kiểm tra nếu danh sách mong muốn không trống */}
         {cart.likes && cart.likes.length !== 0 ? (
            //chuyển đến trang thanh toán
            <div
               onClick={() => router.push('/cart')}
               className="px-4 py-2 bg-neutral-200 hover:bg-neutral-400 cursor-pointer w-fit dark:text-black rounded-md"
            >
               <span>Let checkout now!</span>
            </div>
         ) : (
            //chuyển đến trang mua sắm
            <div
               onClick={() => router.push('/shop')}
               className="px-4 py-2 bg-neutral-200 hover:bg-neutral-400 cursor-pointer w-fit dark:text-black rounded-md"
            >
               <span>Let shopping now!</span>
            </div>
         )}
      </div>
   );
};
export default WishList;// Xuất component WishList
