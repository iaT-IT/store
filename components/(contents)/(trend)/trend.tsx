import Heading from '../../../helpers/heading';
import Container from '../../ui/container';
import TrendList from './trend-list';

const Trend = () => {
   return (
      <div className="py-5 md:py-10">
         <Container className="mx-5 md:mx-14">
            {' '}
            <TrendList />
         </Container>
      </div>
   );
};
export default Trend;
