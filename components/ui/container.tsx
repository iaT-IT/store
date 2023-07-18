import { cn } from '@/lib/utils';
interface ContainerProps {
   children: React.ReactNode;
   className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
   return <div className={cn('mx-14 my-7', className)}>{children}</div>;
};
export default Container;
