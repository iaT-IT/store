'use client';
import TooltipInfo from '@/helpers/tooltip-info';
import useCart from '@/hooks/useCart';
import { Product } from '@/type';
import { Heart, Maximize2, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// Định nghĩa các props cho thành phần ProductAction
interface ProductActionProps {
   product: Product;
}
// Định nghĩa thành phần ProductAction
const ProductAction: React.FC<ProductActionProps> = ({ product }) => {
   const router = useRouter();// Lấy đối tượng router
   const cart = useCart();// Sử dụng hook useCart để lấy đối tượng giỏ hàn

   // Hàm xử lý sự kiện khi nhấp vào để phóng to
   const zoomClick = () => {
      router.push(`/product/${product.id}`);// Di chuyển đến trang chi tiết sản phẩm
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Di chuyển mượt đến đầu trang
   };
   // Hàm xử lý sự kiện khi nhấp vào để thêm vào danh sách mong muốn
   const heartClick = () => {
      // Thêm sản phẩm vào danh sách mong muốn
      cart.heartItem(product);
   };
   // Hàm xử lý sự kiện khi nhấp vào để thêm vào giỏ hàng
   const cartClick = () => {
      cart.addItem(product);// Thêm sản phẩm vào giỏ hàng
   };
   // Hiển thị thành phần với ba nút hành động và bảng chú thích
   return (
      <div className="flex gap-3   ">
         {/* Nút phóng to với chú thích */}
         <TooltipInfo text="Zoom">
            <div
               onClick={zoomClick}
               className="group scale-100 md:scale-0 group-hover:scale-100 hover:bg-red-600 hover:text-white dark:hover:text-white dark:text-black cursor-pointer hover:rotate-[360deg]  duration-500  p-2 rounded-full bg-white"
            >
               {' '}
               <Maximize2 size={25} />{' '}
            </div>
         </TooltipInfo>
         {/* Nút Thêm vào Danh sách yêu thích*/}
         <TooltipInfo text="Add to wish list">
            <div
               onClick={heartClick}
               className="scale-100 md:scale-0 group-hover:scale-100 hover:bg-red-600 hover:text-white dark:text-black dark:hover:text-white cursor-pointer hover:rotate-[360deg] duration-500  p-2 rounded-full bg-white"
            >
               {' '}
               <Heart size={25} />
            </div>
         </TooltipInfo>
         {/* Nút Thêm vào Giỏ hàng*/}
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
export default ProductAction;// Xuất ProductAction
