import Heading from '../heading';
import Container from '../ui/container';
import TrendList from './trend-list';

const Trend = () => {
   return (
      <div className="py-10">
         <Container>
            {' '}
            <TrendList />
         </Container>
      </div>
   );
};
export default Trend;
