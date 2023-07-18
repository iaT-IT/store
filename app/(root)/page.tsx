import Banner from '@/components/(banner)/banner';
import CountDown from '@/components/(countdown)/countdown';
import Gallery from '@/components/(gallery)/gallery';
import Instagram from '@/components/(instagram)/instagram';
import Product from '@/components/(product)/product';
import Service from '@/components/(service)/service';
import Trend from '@/components/(trend)/trend';

export default function RootPage() {
   return (
      <>
         <Gallery />
         <Product />
         <Banner />
         <Trend />
         <CountDown />
         <Service />
      </>
   );
}
