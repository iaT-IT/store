import Container from '@/components/ui/container';
import Tab from './components/tab';
import Info from './components/info';
import Description from './components/description';
import Related from './components/related';
import getProducts from '@/actions/getProducts';
import { Product } from '@/type';
import { Separator } from '@/components/ui/separator';

// Component ProductPage hiển thị trang chi tiết sản phẩm
const ProductPage = async ({
   params: { productId },
}: {
   params: { productId: string };
}) => {
   const products = await getProducts();// Lấy danh sách sản phẩm từ API
   const product = products.find(
      (product) => product.id === productId,// Tìm sản phẩm có id trùng với productId từ danh sách sản phẩm
   ) as Product;

   return (
      // Container chứa toàn bộ nội dung trang
      <Container className="mx-5 md:mx-14">
         <div className="flex flex-col gap-8">
            {/* Separator giữa các phần khác nhau của trang */}
            <Separator />

            {/* Grid chia layout thành 2 phần: Tab và Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               {/* Kiểm tra nếu có sản phẩm thì hiển thị Tab và Info */}
               {product ? (
                  <>
                     <Tab images={product?.images} />
                     <Info product={product} />
                  </>
               ) : (
                  <></>
               )}
            </div>
            {/* Mô tả sản phẩm */}
            <Description />
            {/* Sản phẩm liên quan */}
            <Related
               category={product.category}
               productId={productId}
            />
            {/* Separator giữa các phần khác nhau của trang */}
            <Separator />
         </div>
      </Container>
   );
};
export default ProductPage;// Xuất component ProductPage
