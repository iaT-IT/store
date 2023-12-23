import getProducts from '@/actions/getProducts';
import Container from '@/components/ui/container';
import { Category } from '@/type';
import RelatedCard from './related-card';
import Heading from '@/helpers/heading';
import { Separator } from '@/components/ui/separator';
// Interface định nghĩa các props cho component Related
interface RelatedProps {
   category: Category;
   productId: string;
}
// Component Related hiển thị các sản phẩm liên quan
const Related: React.FC<RelatedProps> = async ({ category, productId }) => {
   // Gọi hàm getProducts để lấy danh sách sản phẩm thuộc category
   let products = await getProducts({ categoryId: category.id });
   // Lọc bỏ sản phẩm hiện tại ra khỏi danh sách liên quan
   products = products.filter((product) => product.id !== productId);
   return (
      <div>
         <Separator />
         {/* Phần tiêu đề 'RELATED PRODUCTS' */}
         <div className="flex items-center justify-center py-6">
            {' '}
            <Heading text={'Sản phẩm liên quan'} />
         </div>
         <RelatedCard products={products} />
      </div>
   );
};
export default Related;// Xuất component Related
