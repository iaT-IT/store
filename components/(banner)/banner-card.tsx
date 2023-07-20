import { cn } from '@/lib/utils';
import { Cookie } from 'next/font/google';
import ShopButton from '../shop-button';

const font = Cookie({ subsets: ['latin'], weight: '400' });
const BannerCard = () => {
   return (
      <div className="flex flex-col gap-1 md:gap-3 items-center text-center">
         <span className="uppercase text-rose-400 ">The chloe collection</span>
         <span
            className={cn(
               'uppercase text-black font-cookie text-xl md:text-5xl font-bold ',
               font.className,
            )}
         >
            The Project Jacket
         </span>
         <ShopButton button="SHOP NOW" />
      </div>
   );
};
export default BannerCard;
