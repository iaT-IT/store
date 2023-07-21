'use client';
import Heading from '@/helpers/heading';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Category, Color, Size } from '@/type';
import { Eraser, Filter, XCircle } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useState } from 'react';

interface MobileFilterProps {
   categories?: Category[];
   colors: Color[];
   sizes: Size[];
}
const MobileFilter: React.FC<MobileFilterProps> = ({
   categories,
   colors,
   sizes,
}) => {
   const router = useRouter();
   const [open, setOpen] = useState(false);
   const searchParams = useSearchParams();
   const [color, setColor] = useState<string>('');
   const [size, setSize] = useState<string>('');
   const [category, setCategory] = useState<string>('');
   const onClick = (key: string, item: any) => {
      key === 'categoryId' && setCategory(key);
      key === 'colorId' && setColor(key);
      key === 'sizeId' && setSize(key);
      const current = qs.parse(searchParams.toString());
      const query = { ...current, [key]: item.id };
      if (current[key] === item.id) query[key] = null;
      const url = qs.stringifyUrl(
         {
            url: window.location.href,
            query,
         },
         { skipNull: true },
      );
      router.push(url);
   };
   return (
      <div className="block md:hidden">
         <Sheet open={open}>
            <SheetTrigger
               asChild
               onClick={() => setOpen(true)}
            >
               <Filter size={30} />
            </SheetTrigger>

            <SheetContent className="w-3/4 flex flex-col gap-3">
               <div className="flex flex-col gap-2">
                  <div className="w-full flex items-center justify-end">
                     <div onClick={() => setOpen(false)}>
                        <XCircle
                           size={30}
                           strokeWidth={1}
                        />
                     </div>
                  </div>
                  {categories && (
                     <>
                        <Heading
                           text="Categories"
                           active
                        />
                        <div className="grid grid-cols-2 md:grid-cols-3  gap-2">
                           {categories.map((item) => (
                              <Button
                                 onClick={() => onClick('categoryId', item)}
                                 key={item.id}
                                 className={cn(
                                    'bg-transparent text-neutral-900 dark:text-neutral-200 dark:border-neutral-200 border border-neutral-900 hover:opacity-70',
                                    searchParams.get(category) === item.id
                                       ? 'dark:bg-white bg-black dark:text-black text-white'
                                       : '',
                                 )}
                                 variant={'outline'}
                              >
                                 {item.name}
                              </Button>
                           ))}
                        </div>
                     </>
                  )}
               </div>
               <div className="flex flex-col gap-2">
                  <Heading
                     text="Colors"
                     active
                  />
                  <div className="grid grid-cols-2 md:grid-cols-3  gap-2">
                     {colors.map((item) => (
                        <Button
                           onClick={() => onClick('colorId', item)}
                           key={item.id}
                           className="bg-transparent text-neutral-900 border border-neutral-900 hover:opacity-70 dark:text-neutral-200 dark:border-neutral-200"
                           variant={'outline'}
                           style={{
                              backgroundColor:
                                 searchParams.get(color) === item.id
                                    ? item?.value
                                    : 'transparent',
                              color:
                                 searchParams.get(color) === item.id
                                    ? 'white'
                                    : '',
                           }}
                        >
                           {item.name}
                        </Button>
                     ))}
                  </div>
               </div>
               <div className="flex flex-col gap-2">
                  <Heading
                     text="sizeId"
                     active
                  />
                  <div className="grid grid-cols-2 md:grid-cols-3  gap-2">
                     {sizes.map((item) => (
                        <Button
                           onClick={() => onClick('sizeId', item)}
                           key={item.id}
                           className={cn(
                              'bg-transparent text-neutral-900 border border-neutral-900 hover:opacity-70  dark:text-neutral-200 dark:border-neutral-200',
                              searchParams.get(size) === item.id
                                 ? 'dark:bg-white bg-black dark:text-black text-white'
                                 : '',
                           )}
                           variant={'outline'}
                        >
                           {item.name}
                        </Button>
                     ))}
                  </div>
               </div>
               <div
                  onClick={() => (
                     router.push('/shop'),
                     setOpen(false),
                     setCategory(''),
                     setSize(''),
                     setColor('')
                  )}
                  className=" rounded-md  py-2 border border-neutral-900  dark:border-neutral-200  flex justify-center items-center gap-5 hover:bg-red-600 group hover:text-white  cursor-pointer"
               >
                  <span className="text-black group-hover:text-white dark:text-neutral-200">
                     Clear
                  </span>
                  <Eraser
                     size={30}
                     strokeWidth={1}
                  />
               </div>
            </SheetContent>
         </Sheet>
      </div>
   );
};

export default MobileFilter;
