import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import ShopButton from '@/helpers/shop-button';
interface GalleryCardProps {
   gallery: {
      image: StaticImageData;
      title: string;
      text: string;
      button: string;
   };
   className?: string;
}
const GalleryCard = ({
   gallery: { image, button, text, title },
   className,
}: GalleryCardProps): JSX.Element => {
   return (
      <div
         className={cn(
            'relative w-full h-full flex items-center justify-center ',
            className,
         )}
      >
         <div className="">
            <Image
               alt=""
               src={image}
               className="object-cover object-center aspect-square"
            />
         </div>
         <div className="absolute left-0  flex flex-col gap-2 text-left pl-7">
            <div className="flex flex-col gap-1">
               <span className="font-bold dark:text-black">{title}</span>
               <span className="text-sm font-light dark:text-neutral-900">
                  {text}
               </span>
            </div>
            <ShopButton button={button} />
         </div>
      </div>
   );
};
export default GalleryCard;
