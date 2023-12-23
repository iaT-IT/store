import { CircleDollarSign, Headphones, LifeBuoy, Truck } from 'lucide-react';
import Container from '../../ui/container';
// Định nghĩa component Service
const Service = () => {
   return (
      <div className="py-0 md:py-5 ">
         {/* Container để giữ nội dung và áp dụng các kiểu dáng */}
         <Container className="mx-5 md:mx-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5">
               {/* Lặp qua danh sách các dịch vụ và hiển thị từng mục */}
               {ServiceItem().map((item) => (
                  <div
                     key={item.title}
                     className="grid grid-cols-4 "
                  >
                     {/* Cột 1: Hiển thị biểu tượng dịch vụ */}
                     <div className="col-span-1">
                        <item.icon
                           size={40}
                           color="#dc2626"
                        />
                     </div>
                     {/* Cột 2-4: Hiển thị tiêu đề và mô tả của dịch vụ */}
                     <div className="col-span-3">
                        <div className="flex flex-col gap-1">
                           <h2 className="text-base text-black dark:text-white font-semibold">
                              {item.title}
                           </h2>
                           <p className="text-sm text-slate-600 dark:text-slate-300 font-light">
                              {item.text}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </Container>
      </div>
   );
};
export default Service;// Xuất component Service

// Hàm trả về danh sách các dịch vụ với biểu tượng, tiêu đề, và mô tả tương ứng
function ServiceItem() {
   return [
      {
         icon: Truck,
         title: 'Miễn Phí Vận Chuyển',
         text: 'Cho tất cả đơn hàng từ $50',
      },
      {
         icon: CircleDollarSign,
         title: 'Đảm bảo hoàn tiền',
         text: 'Nếu có vấn đề từ NSX',
      },
      {
         icon: LifeBuoy,
         title: 'Nhân viên hỗ trợ 24/7',
         text: 'Hotline: ********',
      },
      {
         icon: Headphones,
         title: 'Thanh toán an toàn',
         text: 'Chính sách thanh toán an toàn tuyệt đối',
      },
   ];
}
