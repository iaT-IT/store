import Image from 'next/image';
import a from '@/public/instagram/1.webp';
import b from '@/public/instagram/2.webp';
import c from '@/public/instagram/3.webp';
import d from '@/public/instagram/4.webp';
import e from '@/public/instagram/5.webp';
import f from '@/public/instagram/6.webp';
import { Instagram } from 'lucide-react';
const InstagramCard = () => {
   const text = '@bmo_shop';
   return (
      <div className="grid grid-cols-1 md:grid-cols-6">
         {InstagramItem().map((item, index) => (
            <div
               key={index}
               className="relative group"
            >
               <Image
                  alt=""
                  src={item.image}
                  className="w-full md:w-auto h-full object-contain object-center"
               />
               <div className="absolute top-0 left-0 scale-0 group-hover:scale-100 w-full h-full flex flex-col gap-3 items-center justify-center bg-slate-100/80 transition duration-300 ease-linear delay-150">
                  <Instagram
                     size={30}
                     className="text-black"
                  />
                  <span className="text-base text-black">{text}</span>
               </div>
            </div>
         ))}
      </div>
   );
};
function InstagramItem() {
   return [
      {
         image: a,
      },
      {
         image: b,
      },
      {
         image: c,
      },
      {
         image: d,
      },
      {
         image: e,
      },
      {
         image: f,
      },
   ];
}
export default InstagramCard;
