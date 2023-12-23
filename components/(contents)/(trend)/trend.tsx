import Heading from '../../../helpers/heading';
import Container from '../../ui/container';
import TrendList from './trend-list';

// Component Trend
const Trend = () => {
   // Render component
   return (
      // Phần chứa danh sách các sản phẩm nổi bật (trend)
      <div className="py-5 md:py-10">
         {/* Container để giới hạn chiều rộng của phần nội dung */}
         <Container className="mx-5 md:mx-14">
            {/* Hiển thị tiêu đề của phần */}
            {' '}
            {/* Component TrendList để hiển thị danh sách sản phẩm nổi bật */}
            <TrendList />
         </Container>
      </div>
   );
};
export default Trend;// Xuất component Trend
