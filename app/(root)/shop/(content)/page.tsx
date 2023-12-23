import getProducts from '@/actions/getProducts';
import ProductCard from '@/components/(contents)/(product)/product-card';
import NoResult from '@/helpers/no-result';
import { Query } from '@/type';

// Component ProductPage là trang hiển thị sản phẩm dựa trên các tham số tìm kiếm
const ProductPage = async ({ searchParams }: { searchParams: Query }) => {
  const products = await getProducts(searchParams);// Lấy danh sách sản phẩm từ API với các tham số tìm kiếm  

  // Kiểm tra nếu có sản phẩm, hiển thị danh sách sản phẩm, ngược lại hiển thị thông báo NoResult
  return products && products.length !== 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  ) : (
    <>
      <NoResult />
    </>
  );
};
export default ProductPage;// Xuất Component ProductPage
