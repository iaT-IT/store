import { cn } from '@/lib/utils';

interface ScaleProps {
   active?: boolean;
}
const Scale: React.FC<ScaleProps> = ({ active }) => {
   return (
      <span
         className={cn(
            'absolute w-full  bottom-0 left-0 transition duration-500 translate-y-1/2 border-2 rounded-md scale-0 border-rose-500 peer-hover:scale-100',
            active && 'scale-100',
         )}
      />
   );
};
export default Scale;
