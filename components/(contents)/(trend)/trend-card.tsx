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
interface TrendCardProps {
   product: Product;
}
const TrendCard: React.FC<TrendCardProps> = ({ product }) => {
   return (
      <Card className="w-full  relative border-none grid grid-cols-3">
         <CardContent className="p-2 col-span-1">
            <div className="aspect-[3/4] relative group border border-slate-200 rounded-md">
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
         <CardFooter className="flex flex-col gap-2 pt-4 col-span-2 p-2 items-start">
            <CardDescription className="text-xs dark:text-neutral-200">
               {product.name}
            </CardDescription>
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
            <CardTitle className={cn(' flex items-center gap-2')}>
               <span className=" text-base">
                  {formatter.format(Number(product.price))}
               </span>
            </CardTitle>
         </CardFooter>
      </Card>
   );
};
export default TrendCard;
