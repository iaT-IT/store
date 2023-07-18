import getProducts, { Query } from '@/actions/getProducts';
import ProductCard from '@/components/(product)/product-card';
import NoResult from '@/components/no-result';
import { Product } from '@/type';

const ProductPage = async ({
   params: { categoryId },
   searchParams,
}: {
   params: {
      categoryId: string;
   };
   searchParams: Query;
}) => {
   const products = await getProducts({ ...searchParams, categoryId });

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
      <NoResult />
   );
};
export default ProductPage;
