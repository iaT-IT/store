import ProductCard from '@/components/(contents)/(product)/product-card';
import NoResult from '@/helpers/no-result';
import { Product } from '@/type';

interface RelatedCardProps {
   products: Product[];
}
const RelatedCard: React.FC<RelatedCardProps> = ({ products }) => {
   return products && products.length !== 0 ? (
      <div className="grid grid-cols-1  md:grid-cols-4">
         {products.map((product) => (
            <ProductCard
               key={product.id}
               product={product}
            />
         ))}
      </div>
   ) : (
      <>
         <NoResult />
      </>
   );
};
export default RelatedCard;
