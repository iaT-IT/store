const LoadingPage = () => {
   return (
      <div className="fixed inset-0 w-full h-screen overflow-hidden opacity-50 bg-slate-600 flex items-center justify-center z-40">
         <span className="flex items-center justify-center">
            <div className="border-4 border-t-4 rounded-full mb-4 ease-linear border-slate-200 border-t-rose-600  h-12 w-12 animate-spin  bg-transparent" />
         </span>
      </div>
   );
};
export default LoadingPage;
