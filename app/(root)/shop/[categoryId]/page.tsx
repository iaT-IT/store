import getProducts from '@/actions/getProducts';
import ProductCard from '@/components/(contents)/(product)/product-card';
import NoResult from '@/helpers/no-result';
import { Query } from '@/type';

// Component ProductPage là trang hiển thị danh sách sản phẩm dựa trên các tham số truyền vào
const ProductPage = async ({
   params: { categoryId },
   searchParams,
}: {
   params: {
      categoryId: string;
   };
   searchParams: Query;
}) => {
   // Gọi hàm API để lấy danh sách sản phẩm dựa trên tham số tìm kiếm và categoryId 
   const products = await getProducts({ ...searchParams, categoryId });

   // Nếu có sản phẩm, hiển thị danh sách sản phẩm, ngược lại hiển thị thông báo NoResult
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
export default ProductPage;// Xuất component ProductPage
