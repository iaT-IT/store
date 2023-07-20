import getProducts from '@/actions/getProducts';
import Container from '@/components/ui/container';
import { Category } from '@/type';
import RelatedCard from './related-card';
import Heading from '@/components/heading';
import { Separator } from '@/components/ui/separator';

interface RelatedProps {
   category: Category;
   productId: string;
}
const Related: React.FC<RelatedProps> = async ({ category, productId }) => {
   let products = await getProducts({ categoryId: category.id });
   products = products.filter((product) => product.id !== productId);
   return (
      <div>
         <Separator />
         <div className="flex items-center justify-center py-6">
            {' '}
            <Heading text={'RELATED PRODUCTS'} />
         </div>
         <RelatedCard products={products} />
      </div>
   );
};
export default Related;
