import { cn } from '@/lib/utils';
import { Cookie } from 'next/font/google';
import ShopButton from '../../../helpers/shop-button';

const font = Cookie({ subsets: ['latin'], weight: '400' });// Khai báo font chữ Cookie cho trang web
// Component BannerCard để hiển thị thông tin banner
const BannerCard = () => {
   return (
      // Thẻ div chứa nội dung của BannerCard
      <div className="flex flex-col gap-1 md:gap-3 items-center text-center">
         {/* Tiêu đề "The chloe collection" */}
         <span className="uppercase text-rose-400 ">The chloe collection</span>
         {/* Tiêu đề chính "The Project Jacket" */}
         <span
            className={cn(
               'uppercase text-black font-cookie text-xl md:text-5xl font-bold ',
               font.className,
            )}
         >
            The Project Jacket
         </span>
         {/* Hiển thị nút Shop Now bằng component ShopButton */}
         <ShopButton button="SHOP NOW" />
      </div>
   );
};
export default BannerCard;// Xuất BannerCard
