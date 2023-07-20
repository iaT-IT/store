import Container from '@/components/ui/container';
import Tab from './tab';
import Info from './info';
import Description from './description';
import Related from './related';
import getProducts from '@/actions/getProducts';
import { Product } from '@/type';
import { Separator } from '@/components/ui/separator';

const ProductPage = async ({
   params: { productId },
}: {
   params: { productId: string };
}) => {
   const products = await getProducts();
   const product = products.find(
      (product) => product.id === productId,
   ) as Product;

   return (
      <Container className="mx-5 md:mx-14">
         <div className="flex flex-col gap-8">
            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               <Tab images={product?.images} />
               <Info product={product} />
            </div>
            <Description />
            <Related
               category={product.category}
               productId={productId}
            />
            <Separator />
         </div>
      </Container>
   );
};
export default ProductPage;
