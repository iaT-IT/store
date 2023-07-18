import Heading from '../heading';
import Container from '../ui/container';
import ProductList from './product-list';

const Product = () => {
   return (
      <div className="py-10">
         <Container>
            {' '}
            <div className="pb-5 pl-2">
               {' '}
               <Heading text={'New Product'} />
            </div>
            <ProductList />
         </Container>
      </div>
   );
};
export default Product;
