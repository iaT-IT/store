import { Category } from '@/type';
import axios from 'axios';
import toast from 'react-hot-toast';

// Hàm lấy danh sách các danh mục từ server
const getCategories = async (): Promise<Category[]> => {
   const key = 'categories';// Khai báo key để xác định loại dữ liệu cần lấy từ server
   const URL = `${process.env.NEXT_PUBLIC_API_URL}/${key}`;// Xây dựng URL để request, sử dụng biến môi trường NEXT_PUBLIC_API_URL

   // Thực hiện request HTTP sử dụng axios và xử lý kết quả
   const res = await axios.get(URL).catch((error) => {
      console.log('🚀 ~ error:', error);// Nếu có lỗi trong quá trình request, hiển thị log và thông báo lỗi
      toast.error('Something went wrong.');
   });
   return res?.data;// Trả về dữ liệu từ kết quả request
};

export default getCategories;// Xuất hàm getCategories
