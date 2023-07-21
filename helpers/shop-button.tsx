'use client';
import TooltipInfo from '@/helpers/tooltip-info';
import { useRouter } from 'next/navigation';
interface ShopButtonProps {
   button: string;
}
const ShopButton: React.FC<ShopButtonProps> = ({ button }) => {
   const router = useRouter();
   return (
      <span
         onClick={() => router.push('/shop')}
         className="w-fit relative text-sm text-slate-950 font-semibold tracking-wider cursor-pointer uppercase"
      >
         <TooltipInfo text="Click to Shopping">
            {button}
            <span className="absolute bottom-0 left-0 border border-rose-600 w-full" />
         </TooltipInfo>
      </span>
   );
};
export default ShopButton;
