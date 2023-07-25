import { Separator } from '@/components/ui/separator';

const LoadingPage = ({ children }: { children?: React.ReactNode }) => {
   console.log('🚀 ~ children:', children);
   return (
      <div className="mx-5 md:mx-14">
         <Separator />

         {children ? (
            children
         ) : (
            <div className="grid grid-cols-2 gap-5">
               <div className="grid grid-cols-4 gap-2">
                  <div className="col-span-1 bg-slate-300 animate-pulse max-h-full rounded-lg" />
                  <div className="col-span-3 bg-slate-300 animate-pulse max-h-full rounded-lg" />
               </div>
               <div className="w-full aspect-square animate-pulse  rounded-lg flex flex-col gap-2">
                  <div className="bg-slate-300 w-full rounded-lg h-1/4" />
                  <div className="bg-slate-300 w-full rounded-lg h-1/6" />
                  <div className="bg-slate-300 w-full rounded-lg h-1/4" />
                  <div className="bg-slate-300 w-full rounded-lg h-1/6" />
                  <div className="bg-slate-300 w-full rounded-lg h-1/12" />
               </div>
            </div>
         )}
         <Separator />

         <div className="fixed inset-0 w-full h-screen overflow-hidden opacity-50 bg-slate-600 flex items-center justify-center z-40">
            <span className="flex items-center justify-center">
               <div className="border-4 border-t-4 rounded-full mb-4 ease-linear border-slate-200 border-t-rose-600  h-12 w-12 animate-spin  bg-transparent" />
            </span>
         </div>
      </div>
   );
};
export default LoadingPage;
