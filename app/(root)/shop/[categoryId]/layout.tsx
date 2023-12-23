import getColors from '@/actions/getColors';
import getSizes from '@/actions/getSizes';
import Container from '@/components/ui/container';
import Filter from '../components/filter';
import MobileFilter from '../components/mobile-filter';

// Component RootLayout là layout chính cho trang, nhận các tham số và hiển thị children
export default async function RootLayout({
   children,
   params: { categoryId },
}: {
   children: React.ReactNode;
   params: { categoryId: string };
}) {
   // Lấy danh sách màu sắc và kích thước từ API
   const colors = await getColors();
   const sizes = await getSizes();
   // Trả về giao diện layout chính với phần hiển thị filter và children
   return (
      <Container className="ml-4 mr-2 md:mx-14">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="col-span-1">
               <div className="grid grid-cols-1 gap-5">
                  {' '}
                  {/* Hiển thị bộ lọc cho màn hình di động */} 
                  <MobileFilter
                     colors={colors}
                     sizes={sizes}
                  />
                  {/* Hiển thị bộ lọc cho màu sắc */}
                  <Filter
                     data={colors}
                     type="Colors"
                  />
                  {/* Hiển thị bộ lọc cho kích thước */}
                  <Filter
                     data={sizes}
                     type="Sizes"
                  />
               </div>
            </div>
            <div className="md:col-span-3 h-screen overflow-y-auto">
               {/* Hiển thị danh sách sản phẩm (children) theo grid */}
               <div className="grid grid-cols-1 md:grid-cols-3">{children}</div>
            </div>
         </div>
      </Container>
   );
}
