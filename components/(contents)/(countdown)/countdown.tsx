import Container from '../../ui/container';
import CountdownCard from './countdown-card';

// Component CountDown
const CountDown = () => {
   return (
      // Sử dụng Container để căn chỉnh lề và chứa CountdownCard
      <div className="py-5 md:py-10">
         <Container className="mx-0 md:mx-14">
            <CountdownCard />
         </Container>
      </div>
   );
};
export default CountDown;// Xuất CountDown
