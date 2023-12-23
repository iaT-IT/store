'use client';

import banner from '@/public/banner/1.webp';
import Image from 'next/image';
import BannerCard from './banner-card';

// Component Banner để hiển thị banner với nội dung từ BannerCard
const Banner = () => {
   return (
      // Thẻ div chứa banner và BannerCard
      <div className="relative flex items-center justify-center">
         {/* Hiển thị hình ảnh banner */}
         <Image
            alt=""
            src={banner}
            className=""
         />

         {/* Div chứa BannerCard, hiển thị trên banner */}
         <div className="absolute flex items-center">
            {' '}
            <BannerCard />
         </div>
      </div>
   );
};

// Cài đặt cho carousel (nếu sử dụng)
const settings = {
   speed: 500,
   infinite: false,
   slidesToShow: 1,
};
export default Banner;// Xuất Component Banner
