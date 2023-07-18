import getProducts from '@/actions/getProducts';
import TrendCard from './trend-card';
import Heading from '../heading';

const TrendList = async () => {
   const products = await getProducts();
   const i = 3;
   return (
      <div className="grid grid-cols-1 md:grid-cols-3">
         {titles.map((title, index) => (
            <>
               <div className="pb-5 pl-2">
                  {' '}
                  <Heading
                     text={title}
                     active
                  />
                  <div className="pt-2">
                     {products
                        .slice(index * i, index * i + i)
                        .map((product) => (
                           <TrendCard
                              key={product.id}
                              product={product}
                           />
                        ))}
                  </div>
               </div>
            </>
         ))}
      </div>
   );
};

const titles = ['Hot trend', 'Best seller', 'Feature'];
export default TrendList;
