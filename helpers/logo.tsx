'use client';
import { cn } from '@/lib/utils';
import { Cookie } from 'next/font/google';
import { useRouter } from 'next/navigation';
import TooltipInfo from './tooltip-info';
const font = Cookie({ subsets: ['latin'], weight: '400' });
const Logo = () => {
   const router = useRouter();
   return (
      <TooltipInfo text="Logo">
         <span
            onClick={() => router.push('/')}
            className={cn(
               'text-4xl font-bold leading-none text-black dark:text-white cursor-pointer text-center',
               font.className,
            )}
         >
            DT Shop
         </span>
      </TooltipInfo>
   );
};
export default Logo;
