import getProducts from '@/actions/getProducts';
import TrendCard from './trend-card';
import Heading from '../../../helpers/heading';
// Component TrendList
const TrendList = async () => {
   const products = await getProducts();// Lấy danh sách sản phẩm từ hàm getProducts
   const i = 3;// Số lượng sản phẩm hiển thị trong mỗi danh mục
   // Render component
   return (
      // Dùng grid để hiển thị các danh mục sản phẩm
      <div className="grid grid-cols-1 md:grid-cols-3">
         {titles.map((title, index) => (
               // Mỗi danh mục sản phẩm
            <>
               
               <div className="pb-5 pl-2">
                  {' '}
                  {/* Hiển thị tiêu đề của danh mục */}
                  <Heading
                     text={title}
                     active
                  />
                  <div className="pt-2">
                     {/* Hiển thị các sản phẩm trong danh mục */}
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

const titles = ['Xu hướng', 'Bán chạy nhất', 'Nổi bật'];// Danh sách các tiêu đề của danh mục sản phẩm
export default TrendList;// Xuất component TrendList
