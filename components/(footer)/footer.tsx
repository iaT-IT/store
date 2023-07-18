import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Logo from '@/helpers/logo';
import a from '@/public/footer/1.png';
import b from '@/public/footer/2.png';
import c from '@/public/footer/3.svg';
import d from '@/public/footer/4.png';
import e from '@/public/footer/5.ico';
import Image from 'next/image';
import Container from '../ui/container';
import Heading from '../heading';
import SocialMedia from '../(instagram)/instagram';
const Footer = () => {
   const text =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis';
   return (
      <div className="py-10">
         <SocialMedia />

         <Container>
            <div className="grid  grid-cols-1 md:grid-cols-12 gap-4  md:gap-2  xl:gap-4">
               {/* /// Part 1 */}
               <div className="col-span-4">
                  <div className="flex flex-col gap-2">
                     <Logo />
                     <span>{text}</span>
                     <div className="flex gap-2 items-center justify-between pr-10">
                        {HeaderLogo().map((item, index) => (
                           <div
                              key={index}
                              className="rounded-full bg-white p-2"
                           >
                              <Image
                                 alt=""
                                 src={item.icon}
                                 className="object-contain object-center w-10 h-10"
                              />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               {/* /// Part 2 */}

               <div className="col-span-2">
                  <div className="flex flex-col gap-4">
                     <Heading text="Quick links" />
                     <div className="flex flex-col gap-2">
                        {QuickLinks().map((x, index) => (
                           <span
                              key={index}
                              className="text-neutral-500"
                           >
                              {x.title}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
               {/* /// Part 3 */}

               <div className="col-span-2">
                  <div className="flex flex-col gap-4">
                     <Heading text="Quick links" />
                     <div className="flex flex-col gap-2">
                        {Account().map((x, index) => (
                           <span
                              key={index}
                              className="text-neutral-500"
                           >
                              {x.title}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
               {/* /// Part 4 */}

               <div className="col-span-4">
                  <div className="flex flex-col gap-4">
                     <Heading text="NEWSLETTER" />
                     <div className="rounded-full flex items-center border border-neutral-500 justify-between h-10">
                        <div className="px-3"> Email</div>
                        <div className="w-1/2 py-1  mr-1    bg-red-500 rounded-full uppercase text-white font-semibold text-center flex items-center justify-center text-sm md:text-base ">
                           Subscriber
                        </div>
                     </div>
                     <div className="flex gap-2">
                        {NewsLetter().map((item, index) => (
                           <div
                              key={index}
                              className="bg-neutral-200 rounded-full p-2 flex items-center justify-center"
                           >
                              <item.icon
                                 size={20}
                                 color="black"
                              />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};
function HeaderLogo() {
   return [
      {
         icon: a,
      },
      {
         icon: b,
      },
      {
         icon: c,
      },
      {
         icon: d,
      },
      {
         icon: e,
      },
   ];
}
function QuickLinks() {
   return [
      {
         title: 'About',
      },
      {
         title: 'Blogs',
      },
      {
         title: 'Contact',
      },
      {
         title: 'FAQ',
      },
   ];
}

function Account() {
   return [
      {
         title: 'My Account',
      },
      {
         title: 'Orders Tracking',
      },
      {
         title: 'Checkout',
      },
      {
         title: 'Wishlist',
      },
   ];
}

function NewsLetter() {
   return [
      {
         icon: Facebook,
      },
      {
         icon: Twitter,
      },
      {
         icon: Youtube,
      },
      {
         icon: Instagram,
      },
      {
         icon: Linkedin,
      },
   ];
}
export default Footer;
