import { Size } from '@/type';
import axios from 'axios';
import toast from 'react-hot-toast';

// Hàm lấy danh sách các kích thước
const getSizes = async (): Promise<Size[]> => {
   const key = 'sizes';// Khai báo key để xác định loại dữ liệu cần lấy từ server
   const URL = `${process.env.NEXT_PUBLIC_API_URL}/${key}`;// Xây dựng URL để request

   // Thực hiện request HTTP
   const res = await axios.get(URL).catch((error) => {
      console.log('🚀 ~ error:', error);
      toast.error('Something went wrong.');// Nếu có lỗi trong quá trình request, hiển thị log và thông báo lỗi
   });
   return res?.data;// Trả về dữ liệu từ kết quả request (nếu có)
};

export default getSizes;// Xuất hàm getSizes
