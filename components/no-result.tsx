import Image from 'next/image';
import result from '@/public/no-result/no-result-nonebg.png';
const NoResult = () => {
   return (
      <div className="w-full h-full flex justify-center">
         <div className="m-5 flex flex-col items-center justify-center h-full  w-2/3 rounded-md">
            <Image
               alt="No result"
               src={result}
               className="object-contain object-center"
               sizes="100vw"
            />
            <p className="text-center text-neutral-500 dark:text-neutral-200 p-5 text-xl ">
               {' '}
               No result found.
            </p>
         </div>
      </div>
   );
};
export default NoResult;
