import { CircleDollarSign, Headphones, LifeBuoy, Truck } from 'lucide-react';
import Container from '../../ui/container';
const Service = () => {
   return (
      <div className="py-0 md:py-5 ">
         <Container className="mx-5 md:mx-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5">
               {ServiceItem().map((item) => (
                  <div
                     key={item.title}
                     className="grid grid-cols-4 "
                  >
                     <div className="col-span-1">
                        <item.icon
                           size={40}
                           color="#dc2626"
                        />
                     </div>
                     <div className="col-span-3">
                        <div className="flex flex-col gap-1">
                           <h2 className="text-base text-black dark:text-white font-semibold">
                              {item.title}
                           </h2>
                           <p className="text-sm text-slate-600 dark:text-slate-300 font-light">
                              {item.text}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </Container>
      </div>
   );
};
export default Service;

function ServiceItem() {
   return [
      {
         icon: Truck,
         title: 'Free Shipping',
         text: 'For all oder over $99',
      },
      {
         icon: CircleDollarSign,
         title: 'Money Back Guarantee',
         text: 'If good have Problems',
      },
      {
         icon: LifeBuoy,
         title: 'Online Support 24/7',
         text: 'Dedicated support',
      },
      {
         icon: Headphones,
         title: 'Payment Secure',
         text: '100% secure payment',
      },
   ];
}
