import getProducts from '@/actions/getProducts';
import ProductCard from './product-card';

// Định nghĩa component ProductList
const ProductList = async () => {
   // Lấy danh sách sản phẩm bất đồng bộ bằng cách sử dụng hàm 'getProducts'
   const products = await getProducts();
   // Giới hạn số lượng sản phẩm hiển thị tối đa là 3
   const displayedProducts = products.slice(0, 4);
   // Trả về một bố cục grid chứa các thành phần ProductCard cho từng sản phẩm
   return (
      <div className="grid grid-cols-1 md:grid-cols-4">
         {/* Duyệt qua danh sách sản phẩm và render một ProductCard cho mỗi sản phẩm */}
         {displayedProducts.map((product) => (
            <ProductCard
               key={product.id}
               product={product}
            />
         ))}
      </div>
   );
};
export default ProductList;// Xuất component ProductList
