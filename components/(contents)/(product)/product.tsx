import Heading from '../../../helpers/heading';
import Container from '../../ui/container';
import ProductList from './product-list';

// Định nghĩa component Product
const Product = () => {
   return (
      <div className="py-10">
         {/* Container để giữ nội dung và áp dụng các kiểu dáng */}
         <Container>
            {' '}
            {/* Phần tiêu đề với thuộc tính active để làm nổi bật */}
            <div className="pb-5 pl-2">
               {' '}
               <Heading
                  text={'Sản phẩm mới'}
                  active
               />
            </div>
            {/* Sử dụng component ProductList để hiển thị danh sách sản phẩm mới */}
            <ProductList />
         </Container>
      </div>
   );
};
export default Product;// Xuất component Product