'use client';
import useCountdown from '@/hooks/useCountdown';

interface CountDownTimerProps {
   deadline: string;
}
const CountDownTimer: React.FC<CountDownTimerProps> = ({ deadline }) => {
   const [days, hours, minutes, seconds] = useCountdown(deadline);

   return (
      <div className="grid grid-cols-4 z-10 gap-2">
         <div className="flex items-end gap-1">
            <span className="w-6 md:w-9 text-black text-xl md:text-2xl font-bold leading-none">
               {days}
            </span>
            <span className="text-xs text-neutral-600 font-semibold">Day</span>
         </div>
         <div className="flex items-end gap-1">
            <span className="w-6 md:w-9 text-black text-xl md:text-2xl font-bold leading-none">
               {hours}
            </span>
            <span className="text-xs text-neutral-600 font-semibold">Hour</span>
         </div>
         <div className="flex items-end gap-1">
            <span className="w-6 md:w-9 text-black text-xl md:text-2xl font-bold leading-none">
               {minutes}
            </span>
            <span className="text-xs text-neutral-600 font-semibold">
               Minute
            </span>
         </div>
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
export default CountDownTimer;
