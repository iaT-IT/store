'use client';
import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Product } from '@/type';
import { cn, formatter } from '@/lib/utils';
import { Star } from 'lucide-react';
import Label from '@/helpers/label';
import ProductAction from './product-action';
interface ProductCardProps {
   product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
   const [isMounted, setIsMounted] = React.useState(false);
   React.useEffect(() => {
      setIsMounted(true);
   }, []);
   if (!isMounted) return null;
   const random = Math.round(Math.random() * 4);
   const active = [
      { text: 'New', type: 1 },
      { text: 'Sale', type: 2 },
      { text: 'Out of stock', type: 3 },
   ];
   return (
      <>
         <Card className="w-full  relative border-none">
            <CardContent className="p-2">
               <div className="aspect-square relative group ">
                  <Image
                     alt=""
                     src={product.images[0].url}
                     width={0}
                     height={0}
                     sizes="100vw"
                     className="w-full object-contain object-center "
                  />
                  <Label action={random < 3 ? active[random] : {}} />
                  <div className=" absolute bottom-0  w-full flex items-center justify-center h-1/3">
                     <ProductAction product={product} />
                  </div>
               </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 pt-4">
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
                  {random < 3 && active[random].type === 2 && (
                     <span className=" text-lg text-red-500">
                        {formatter.format(Number(product.price))}
                     </span>
                  )}
                  {
                     <span
                        className={cn(
                           'text-base ',
                           random < 3 &&
                              active[random].type === 2 &&
                              'line-through text-slate-500 font-light',
                        )}
                     >
                        {formatter.format(Number(product.price))}
                     </span>
                  }
               </CardTitle>
            </CardFooter>
         </Card>
      </>
   );
};

export default ProductCard;
