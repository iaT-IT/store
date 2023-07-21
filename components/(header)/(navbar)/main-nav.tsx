'use client';
import { Category } from '@/type';
import Shop from './shop';
import Scale from '@/helpers/scale';
import { usePathname, useRouter } from 'next/navigation';
import TooltipInfo from '@/helpers/tooltip-info';

interface MainNavProps {
   categories: Category[];
}
const MainNav: React.FC<MainNavProps> = ({ categories }) => {
   const router = useRouter();
   const pathname = usePathname();
   return (
      <>
         <div className="flex flex-col md:flex-row items-center gap-5 text-sm uppercase   tracking-wider ">
            <div className="">
               <div
                  onClick={() => router.push('/')}
                  className="relative cursor-pointer"
               >
                  <TooltipInfo text="Home">
                     <span className="peer ">Home</span>
                     <Scale active={pathname === '/'} />
                  </TooltipInfo>
               </div>
            </div>
            <div>
               <TooltipInfo text="Click to Shopping">
                  <Shop
                     categories={categories}
                     active={
                        pathname.includes('/shop') ||
                        pathname.includes('/product')
                     }
                  />
               </TooltipInfo>
            </div>
            <div>
               <div
                  onClick={() => router.push('/')}
                  className="relative cursor-pointer"
               >
                  <TooltipInfo text="Home">
                     <span className="peer ">Pages</span>
                     <Scale />
                  </TooltipInfo>
               </div>
            </div>
            <div>
               <div
                  onClick={() => router.push('/')}
                  className="relative cursor-pointer"
               >
                  <TooltipInfo text="Home">
                     <span className="peer">Blog</span>
                     <Scale />
                  </TooltipInfo>
               </div>
            </div>
            <div>
               <div
                  onClick={() => router.push('/cart')}
                  className="relative cursor-pointer"
               >
                  <TooltipInfo text="Click to Checkout">
                     <span className="peer ">Checkout</span>
                     <Scale active={pathname.includes('/cart')} />
                  </TooltipInfo>
               </div>
            </div>
         </div>
      </>
   );
};

export default MainNav;
