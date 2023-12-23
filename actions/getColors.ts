import { Color } from '@/type';
import axios from 'axios';
import toast from 'react-hot-toast';

// Hàm lấy danh sách các màu
const getColors = async (): Promise<Color[]> => {
   const key = 'colors';// Khai báo key
   const URL = `${process.env.NEXT_PUBLIC_API_URL}/${key}`;// Xây dựng URL để thực hiện request

   // Thực hiện request HTTP sử dụng axios và xử lý kết quả
   const res = await axios.get(URL).catch((error) => {
      console.log('🚀 ~ error:', error);
      toast.error('Something went wrong.');// Nếu có lỗi trong quá trình request, hiển thị log và thông báo lỗi
   });
   return res?.data;// Trả về dữ liệu từ kết quả request
};

export default getColors;// Xuất hàm getColors
