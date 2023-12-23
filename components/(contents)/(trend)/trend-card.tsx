import { Star } from 'lucide-react';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardTitle,
} from '../../ui/card';
import Image from 'next/image';
import { cn, formatter } from '@/lib/utils';
import { Product } from '@/type';
// Định nghĩa các props cho TrendCard
interface TrendCardProps {
   product: Product;
}
// Component TrendCard
const TrendCard: React.FC<TrendCardProps> = ({ product }) => {
   return (
      // Thẻ Card chứa thông tin về sản phẩm
      <Card className="w-full  relative border-none grid grid-cols-3">
         {/* Phần nội dung bên trái của card */}
         <CardContent className="p-2 col-span-1">
            {/* Hiển thị hình ảnh sản phẩm */}
            <div className="aspect-[3/4] relative group border border-slate-200 rounded-md">
               {/* Mô tả sản phẩm */}
               <Image
                  alt=""
                  src={product.images[0].url}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full object-contain object-center aspect-[3/4] "
               />
            </div>
         </CardContent>
         {/* Phần chân trang bên phải của card */}
         <CardFooter className="flex flex-col gap-2 pt-4 col-span-2 p-2 items-start">
            <CardDescription className="text-xs dark:text-neutral-200">
               {product.name}
            </CardDescription>
            {/* Hiển thị đánh giá (số sao) của sản phẩm */}
            <div className="flex gap-1">
               {Array.from({ length: 5 }).map((x, index) => (
                  <Star
                     key={index}
                     size={10}
                     fill="#facc15"
                     className="text-yellow-400"
                  />
               ))}
            </div>
            {/* Hiển thị giá của sản phẩm */}
            <CardTitle className={cn(' flex items-center gap-2')}>
               <span className=" text-base">
                  {formatter.format(Number(product.price))}
               </span>
            </CardTitle>
         </CardFooter>
      </Card>
   );
};
export default TrendCard;// Xuất component TrendCard
