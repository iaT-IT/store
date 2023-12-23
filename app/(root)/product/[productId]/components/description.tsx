import { Separator } from '@/components/ui/separator';

const text = `Mô tả chi tiết sản phẩm`;
// Component Description hiển thị phần mô tả
const Description = () => {
   // Render component Description
   return (
      <div className="flex flex-col gap-4">
         {/* Tiêu đề "Description" với đường phân cách */}
         <span className="text-neutral-900 text-base font-semibold flex items-center justify-center gap-10">
            <Separator className="w-1/2 " />{' '}
            <p className="dark:text-white">Description</p>{' '}
            <Separator className="w-1/2" />
         </span>
         {/* Nội dung mô tả */}
         <span className="text-neutral-500 text-sm dark:text-neutral-400">
            {text}
         </span>
      </div>
   );
};
export default Description;// Xuất component Description
