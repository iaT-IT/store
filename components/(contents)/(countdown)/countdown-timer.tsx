'use client';
import useCountdown from '@/hooks/useCountdown';

// Interface để định nghĩa kiểu Props cho CountDownTimer
interface CountDownTimerProps {
   deadline: string;// Chuỗi đại diện cho hạn chót của countdown
}
// Component CountDownTimer
const CountDownTimer: React.FC<CountDownTimerProps> = ({ deadline }) => {
   // Sử dụng custom hook useCountdown để lấy giá trị của ngày, giờ, phút, và giây
   const [days, hours, minutes, seconds] = useCountdown(deadline);

   return (
      // Thẻ div chứa các ô hiển thị ngày, giờ, phút, giây
      <div className="grid grid-cols-4 z-10 gap-2">
         {/* Ô hiển thị ngày */}
         <div className="flex items-end gap-1">
            <span className="w-6 md:w-9 text-black text-xl md:text-2xl font-bold leading-none">
               {days}
            </span>
            <span className="text-xs text-neutral-600 font-semibold">Day</span>
         </div>
         {/* Ô hiển thị giờ */}
         <div className="flex items-end gap-1">
            <span className="w-6 md:w-9 text-black text-xl md:text-2xl font-bold leading-none">
               {hours}
            </span>
            <span className="text-xs text-neutral-600 font-semibold">Hour</span>
         </div>
         {/* Ô hiển thị phút */}
         <div className="flex items-end gap-1">
            <span className="w-6 md:w-9 text-black text-xl md:text-2xl font-bold leading-none">
               {minutes}
            </span>
            <span className="text-xs text-neutral-600 font-semibold">
               Minute
            </span>
         </div>
         {/* Ô hiển thị giây */}
         <div className="flex items-end gap-1">
            <span className="w-6 md:w-9 text-black text-xl md:text-2xl font-bold leading-none">
               {seconds}
            </span>
            <span className="text-xs text-neutral-600 font-semibold">
               Second
            </span>
         </div>
      </div>
   );
};
export default CountDownTimer;// Xuất CountDownTimer
