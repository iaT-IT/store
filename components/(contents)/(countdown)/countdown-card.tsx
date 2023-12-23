'use client';
import { cn } from '@/lib/utils';
import countdown from '@/public/countdown/1.webp';
import { Cookie } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ShopButton from '../../../helpers/shop-button';
import { Card, CardContent } from '../../ui/card';
import CountDownTimer from './countdown-timer';
const font = Cookie({ subsets: ['latin'], weight: '400' });// Khai báo font cho hình ảnh

// Component CountdownCard để hiển thị countdown và thông tin khuyến mãi
const CountdownCard = () => {
  // Deadline cho countdown
  const deadline = 'December, 31, 2023';
  const [isMounted, setMounted] = useState(false);// State để kiểm tra đã render xong component chưa
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) return null;// Nếu chưa render xong thì return null
  return (
    // Thẻ div chứa countdown và thông tin khuyến mãi
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Phần hiển thị hình ảnh countdown */}
      <div className="w-full">
        {' '}
        <Image
          alt=""
          src={countdown}
          className="w-full object-contain"
        />
      </div>
      {/* Phần thông tin khuyến mãi */}
      <div className="bg-neutral-200">
        <Card className="h-full  bg-neutral-200 flex flex-col justify-center items-center gap-8">
          {/* Phần nội dung của Card */}
          <CardContent className="p-2 top-5 md:top-0  relative flex flex-col justify-center items-center">
             {/* Hình tròn phía trên */}
            <span className="w-36 h-36 md:w-40 md:h-40 absolute  border-none bg-white rounded-full" />
             {/* Phần nội dung chính */}  
            <div className="flex flex-col gap-2 items-center justify-center z-10">
              <span className="text-xs text-neutral-500">DISCOUNT</span>
              <h2 className={cn('text-5xl text-red-600', font.className)}>
                Summer 2023
              </h2>
              <div className="text-xs text-neutral-500 flex items-center gap-2">
                <span className="text-base font-semibold">Sale</span>
                <h2 className="font-bold text-lg text-red-500">50%</h2>
              </div>
            </div>
          </CardContent>
          {/* Phần hiển thị countdown và nút SHOP NOW */}
          <div className="flex flex-col gap-2 items-center">
            <CountDownTimer deadline={deadline} />
            <ShopButton button="SHOP NOW" />
          </div>
        </Card>
      </div>
    </div>
  );
};
export default CountdownCard;// Xuất CountdownCard
