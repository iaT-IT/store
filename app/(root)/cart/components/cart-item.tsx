import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
} from '@/components/ui/card';
import { Product } from '@/type';
import { Star } from 'lucide-react';
import Image from 'next/image';

// Component CartItem nhận vào một sản phẩm và hiển thị thông tin của nó
const CartItem = ({ product }: { product: Product }) => {
   // Render component Card để hiển thị thông tin sản phẩm
   return (
      <Card className="w-full grid grid-cols-2 md:grid-cols-3 relative border-none">
         {/* Phần hiển thị hình ảnh sản phẩm */}
         <CardContent className="col-span-1 p-0 aspect-square">
            <div className="aspect-square relative group overflow-hidden">
               {/* Sử dụng component Image từ Next.js để hiển thị hình ảnh */}
               <Image
                  alt=""
                  src={product.images[0].url}
                  fill
                  className="object-contain object-center aspect-[3/4]  "
               />
            </div>
         </CardContent>

         {/* Phần hiển thị mô tả và xếp hạng sản phẩm */}
         <CardFooter className="flex flex-col gap-2 justify-center  col-span-1 md:col-span-2 items-start p-0 md:p-4">
            <CardDescription className="text-xs dark:text-slate-200">
               {product.name}
            </CardDescription>
            {/* Hiển thị xếp hạng bằng các sao */}
            <div className="hidden md:flex gap-1">
               {/* Dùng vòng lặp để hiển thị 5 sao */}
               {Array.from({ length: 5 }).map((x, index) => (
                  <Star
                     key={index}
                     size={10}
                     fill="#facc15"
                     className="text-yellow-400"
                  />
               ))}
            </div>
         </CardFooter>
      </Card>
   );
};
export default CartItem;// Xuất component CartItem
