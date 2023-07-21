'use client';
import Heading from '@/helpers/heading';
import { Button } from '@/components/ui/button';
import { Category, Color, Size } from '@/type';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import qs from 'query-string';
export interface FilterProps {
   data: (Color | Size | Category)[];
   type: string;
}
enum TYPE {
   Categories = 1,
   Colors = 2,
   Sizes = 3,
}

enum KEY {
   Categories = 'categoryId',
   Colors = 'colorId',
   Sizes = 'sizeId',
}

const Filter: React.FC<FilterProps> = ({ data, type }) => {
   const router = useRouter();

   const searchParams = useSearchParams();
   const [color, setColor] = useState<Color | undefined>(undefined);
   const key = getKey(type);
   const active = searchParams.get(getKey(type));
   const onClick = (item: any) => {
      setColor(item);
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
      <div className="hidden md:flex flex-col gap-2">
         <Heading
            text={type}
            active
         />
         <div className="grid  md:grid-cols-2 xl:grid-cols-3 gap-2">
            {data.map((item) => (
               <Button
                  onClick={() => onClick(item)}
                  key={item.id}
                  className="bg-transparent text-neutral-900 dark:text-white border border-neutral-900 dark:border-white hover:opacity-70 "
                  variant={'outline'}
                  style={{
                     backgroundColor:
                        active === item.id
                           ? getType(type) === 2
                              ? color?.value
                              : 'black'
                           : 'transparent',
                     color: active === item.id ? 'white' : '',
                  }}
               >
                  {item.name}
               </Button>
            ))}
         </div>
      </div>
   );
};

const getType = (type: string) => {
   return TYPE[type as keyof typeof TYPE];
};
const getKey = (type: string) => {
   return KEY[type as keyof typeof KEY];
};
export default Filter;
