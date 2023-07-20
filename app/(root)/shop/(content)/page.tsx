import getProducts from '@/actions/getProducts';
import ProductCard from '@/components/(product)/product-card';
import NoResult from '@/components/no-result';
import { Query } from '@/type';

const ProductPage = async ({ searchParams }: { searchParams: Query }) => {
   const products = await getProducts(searchParams);

   return products && products.length !== 0 ? (
      <>
         {products.map((product) => (
            <ProductCard
               key={product.id}
               product={product}
            />
         ))}
      </>
   ) : (
      <>
         <NoResult />
      </>
   );
};
export default ProductPage;
