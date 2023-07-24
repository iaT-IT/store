import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
} from '@/components/ui/card';
import { Product } from '@/type';
import { Star } from 'lucide-react';
import Image from 'next/image';
const CartItem = ({ product }: { product: Product }) => {
   return (
      <Card className="w-full grid grid-cols-2 md:grid-cols-3 relative border-none">
         <CardContent className="col-span-1 p-0 aspect-square">
            <div className="aspect-square relative group overflow-hidden">
               <Image
                  alt=""
                  src={product.images[0].url}
                  fill
                  className="object-contain object-center aspect-[3/4]  "
               />
            </div>
         </CardContent>
         <CardFooter className="flex flex-col gap-2 justify-center  col-span-1 md:col-span-2 items-start p-0 md:p-4">
            <CardDescription className="text-xs dark:text-slate-200">
               {product.name}
            </CardDescription>
            <div className="hidden md:flex gap-1">
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
export default CartItem;
