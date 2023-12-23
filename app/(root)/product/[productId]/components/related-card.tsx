import ProductCard from '@/components/(contents)/(product)/product-card';
import NoResult from '@/helpers/no-result';
import { Product } from '@/type';

// Interface định nghĩa các props cho component RelatedCard
interface RelatedCardProps {
   products: Product[];
}
// Component RelatedCard hiển thị các sản phẩm liên quan
const RelatedCard: React.FC<RelatedCardProps> = ({ products }) => {
   // Kiểm tra nếu có sản phẩm, hiển thị grid sản phẩm, ngược lại hiển thị component NoResult
   return products && products.length !== 0 ? (
      <div className="grid grid-cols-1  md:grid-cols-4">
         {/* Mapping qua mảng sản phẩm và render ProductCard cho mỗi sản phẩm */}
         {products.map((product) => (
            <ProductCard
               key={product.id}
               product={product}
            />
         ))}
      </div>
   ) : (
     
         <NoResult />// Hiển thị component NoResult khi không có sản phẩm
     
   );
};
export default RelatedCard;// Xuất component RelatedCard
