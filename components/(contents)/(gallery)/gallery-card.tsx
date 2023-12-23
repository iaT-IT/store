import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import ShopButton from '@/helpers/shop-button';
// Interface định nghĩa kiểu dữ liệu cho prop của GalleryCard
interface GalleryCardProps {
   gallery: {
      image: StaticImageData;
      title: string;
      text: string;
      button: string;
   };
   className?: string;
}
// Component GalleryCard
const GalleryCard = ({
   gallery: { image, button, text, title },
   className,
}: GalleryCardProps): JSX.Element => {
   return (
      // Sử dụng div để chứa hình ảnh và nội dung của GalleryCard
      <div
         className={cn(
            'relative w-full h-full flex items-center justify-center ',
            className,
         )}
      >
         <div className="">
            {/* Sử dụng Image để hiển thị hình ảnh */}
            <Image
               alt=""
               src={image}
               className="object-cover object-center aspect-square"
            />
         </div>
         {/* Sử dụng div để chứa nội dung văn bản và nút */}
         <div className="absolute left-0  flex flex-col gap-2 text-left pl-7">
             {/* Sử dụng div để chứa tiêu đề và mô tả */}
            <div className="flex flex-col gap-1">
               <span className="font-bold dark:text-black">{title}</span>
               <span className="text-sm font-light dark:text-neutral-900">
                  {text}
               </span>
            </div>
            {/* Sử dụng ShopButton để hiển thị nút */}
            <ShopButton button={button} />
         </div>
      </div>
   );
};
export default GalleryCard;// Xuất GalleryCard
