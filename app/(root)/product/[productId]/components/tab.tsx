'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TooltipInfo from '@/helpers/tooltip-info';
import { cn } from '@/lib/utils';
import { Image as ImageType } from '@/type';
import Image from 'next/image';
import { useState } from 'react';

// Interface định nghĩa các props cho component Tab
interface TabProps {
   images: ImageType[];
}
// Component Tab hiển thị tabs và nội dung ảnh tương ứng
const Tab: React.FC<TabProps> = ({ images }) => {
   const [active, setActive] = useState<string>(images[0].id);// State để theo dõi tab đang active
   return (
      <>
         {/* Component Tabs chứa TabsList và TabsContent */}
         <Tabs
            defaultValue={images[0].id}// Thiết lập giá trị mặc định của tab là id của ảnh đầu tiên
            className="grid grid-cols-1 md:grid-cols-5 gap-2"
            onValueChange={(value) => setActive(value)}// Thiết lập sự kiện khi giá trị tab thay đổi
         >
            {/* TabsList chứa các tab trigger */}
            <TabsList className="md:col-span-1 grid grid-cols-1 bg-transparent bg-neutral-200 rounded-md h-full">
               {images.map((image) => (
                  // Mỗi tab trigger là một ảnh và có tooltip "Click to preview"
                  <TabsTrigger
                     key={image.id}
                     value={image.id}
                     className={cn(
                        ' rounded-md',
                        // Xác định lớp CSS cho tab active và non-active
                        active === image.id
                           ? 'border-2 border-neutral-900'
                           : 'border-2 border-neutral-500',
                     )}
                  >
                     <TooltipInfo text="Click to preview">
                        {/* Hiển thị ảnh với component Image từ next/image */}
                        <Image
                           alt=""
                           src={image.url}
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="w-full object-contain object-center aspect-square "
                        />
                     </TooltipInfo>
                  </TabsTrigger>
               ))}
            </TabsList>
            {/* TabsContent chứa nội dung của từng tab */}
            {images.map((image) => (
               <>
                  <TabsContent
                     key={image.id}
                     value={image.id}
                     className="col-span-4 h-full bg-neutral-200 rounded-md mt-0"
                  >
                     {/* Hiển thị ảnh với component Image từ next/image */}
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
export default Tab;// Xuất component Tab
