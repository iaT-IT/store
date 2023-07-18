import getProducts from '@/actions/getProducts';
import ProductCard from './product-card';

const ProductList = async () => {
   const products = await getProducts();
   return (
      <div className="grid grid-cols-1 md:grid-cols-4">
         {products.map((product) => (
            <ProductCard
               key={product.id}
               product={product}
            />
         ))}
      </div>
   );
};
export default ProductList;
