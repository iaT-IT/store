'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Image as ImageType } from '@/type';
import Image from 'next/image';
import { useState } from 'react';

interface TabProps {
   images: ImageType[];
}
const Tab: React.FC<TabProps> = ({ images }) => {
   const [active, setActive] = useState<string>(images[0].id);
   return (
      <>
         <Tabs
            defaultValue={images[0].id}
            className="grid grid-cols-5 gap-2"
            onValueChange={(value) => setActive(value)}
         >
            <TabsList className="col-span-1 grid grid-cols-1 bg-transparent bg-neutral-200 rounded-md h-full">
               {images.map((image) => (
                  <TabsTrigger
                     key={image.id}
                     value={image.id}
                     className={cn(
                        ' rounded-md',
                        active === image.id
                           ? 'border-2 border-neutral-900'
                           : 'border-2 border-neutral-500',
                     )}
                  >
                     <div className="">
                        <Image
                           alt=""
                           src={image.url}
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="w-full object-contain object-center aspect-square "
                        />
                     </div>
                  </TabsTrigger>
               ))}
            </TabsList>
            {images.map((image) => (
               <>
                  <TabsContent
                     value={image.id}
                     className="col-span-4 h-full bg-neutral-200 rounded-md mt-0"
                  >
                     <div className="p-2 w-full h-full overflow-hidden aspect-square">
                        <Image
                           alt=""
                           src={image.url}
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="w-full object-contain object-center aspect-square"
                        />
                     </div>
                  </TabsContent>
               </>
            ))}
         </Tabs>
      </>
   );
};
export default Tab;
