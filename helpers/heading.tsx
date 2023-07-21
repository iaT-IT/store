import Scale from '@/helpers/scale';
import { cn } from '@/lib/utils';

interface HeadingProps {
   text: string;
   active?: boolean;
   className?: string;
}
const Heading: React.FC<HeadingProps> = ({ text, active, className }) => {
   return (
      <div className="relative w-fit">
         <span
            className={cn(
               'peer  text-lg text-black dark:text-white font-semibold uppercase',
               className,
            )}
         >
            {text}
         </span>
         <Scale active={active} />
      </div>
   );
};
export default Heading;
