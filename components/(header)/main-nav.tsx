'use client';
import { Category } from '@/type';
import Link from 'next/link';
import Shop from './shop';
import Scale from '@/helpers/scale';
import { usePathname, useRouter } from 'next/navigation';

interface MainNavProps {
   categories: Category[];
}
const MainNav: React.FC<MainNavProps> = ({ categories }) => {
   const router = useRouter();
   const pathname = usePathname();
   console.log('🚀 ~ pathname:', pathname);
   return (
      <>
         <div className="flex flex-col md:flex-row items-center gap-5 text-sm uppercase   tracking-wider ">
            <div className="">
               <div
                  onClick={() => router.push('/')}
                  className="relative cursor-pointer"
               >
                  <span className="peer ">Home</span>
                  <Scale active={pathname === '/'} />
               </div>
            </div>
            <div>
               <Shop
                  categories={categories}
                  active={pathname.includes('/shop')}
               />
            </div>
            <div>
               <div
                  onClick={() => router.push('/')}
                  className="relative cursor-pointer"
               >
                  <span className="peer ">Pages</span>
                  <Scale />
               </div>
            </div>
            <div>
               <div
                  onClick={() => router.push('/')}
                  className="relative cursor-pointer"
               >
                  <span className="peer">Blog</span>
                  <Scale />
               </div>
            </div>
            <div>
               <div
                  onClick={() => router.push('/cart')}
                  className="relative cursor-pointer"
               >
                  <span className="peer ">Checkout</span>
                  <Scale active={pathname.includes('/cart')} />
               </div>
            </div>
         </div>
      </>
   );
};
export default MainNav;
