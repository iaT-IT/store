import {
   TooltipContent,
   TooltipTrigger,
   Tooltip,
} from '@/components/ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const TooltipInfo = ({
   children,
   text,
}: {
   children: React.ReactNode;
   text: string;
}) => {
   return (
      <Tooltip>
         <TooltipTrigger>{children}</TooltipTrigger>
         <TooltipContent className="bg-neutral-700">
            <p className="text-xs capitalize text-white">{text}</p>
         </TooltipContent>
      </Tooltip>
   );
};

export default TooltipInfo;
