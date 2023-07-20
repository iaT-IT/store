import { TooltipProvider as Provider } from '@/components/ui/tooltip';
interface TooltipProviderProps {
   children: React.ReactNode;
}
const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
   return <Provider>{children}</Provider>;
};
export default TooltipProvider;
