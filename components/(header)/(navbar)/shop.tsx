import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
} from '@/components/ui/hover-card';
import Scale from '@/helpers/scale';
import { Category } from '@/type';
import Link from 'next/link';
interface ShopProps {
   categories: Category[];
   active: boolean;
}
const Shop: React.FC<ShopProps> = ({ categories, active }) => {
   return (
      <HoverCard>
         <HoverCardTrigger asChild>
            <Link
               href={'/shop'}
               className="relative flex h-full"
            >
               <span className="peer">Sản phẩm</span>
               <Scale active={active} />
            </Link>
         </HoverCardTrigger>
         <HoverCardContent className="w-fit flex flex-col gap-2 duration-100  ">
            {categories.map((category) => (
               <Link
                  key={category.id}
                  className="w-fit cursor-pointer relative group"
                  href={`/shop/${category.id}`}
               >
                  <span className="peer"> {category.name}</span>
                  <Scale />
               </Link>
            ))}
         </HoverCardContent>
      </HoverCard>
   );
};

export default Shop;
