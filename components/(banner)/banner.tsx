'use client';

import banner from '@/public/banner/1.webp';
import Image from 'next/image';
import BannerCard from './banner-card';
const Banner = () => {
   return (
      <div className="relative flex items-center justify-center">
         <Image
            alt=""
            src={banner}
            className=""
         />

         <div className="absolute flex items-center">
            {' '}
            <BannerCard />
         </div>
      </div>
   );
};

const settings = {
   speed: 500,
   infinite: false,
   slidesToShow: 1,
};
export default Banner;
