import Banner from '@/components/(contents)/(banner)/banner';
import CountDown from '@/components/(contents)/(countdown)/countdown';
import Gallery from '@/components/(contents)/(gallery)/gallery';
import Product from '@/components/(contents)/(product)/product';
import Service from '@/components/(contents)/(service)/service';
import Trend from '@/components/(contents)/(trend)/trend';

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
