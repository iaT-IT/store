import { Product, Query } from '@/type';
import axios from 'axios';
import toast from 'react-hot-toast';
import qs from 'query-string';

const key = 'products';
const URL = `${process.env.NEXT_PUBLIC_API_URL}/${key}`;// Khai báo key và URL chung cho việc lấy dữ liệu sản phẩm từ server

// Lấy danh sách sản phẩm từ server
const getProducts = async (query: Query): Promise<Product[]> => {
   const url = qs.stringifyUrl({
      // Sử dụng thư viện query-string để tạo URL với các tham số truy vấn
      url: URL,
      query: {
         colorId: query?.colorId,
         categoryId: query?.categoryId,
         sizeId: query?.sizeId,
         isFeatured: query?.isFeatured,
      },
   });

   // Thực hiện request HTTP sử dụng axios và xử lý kết quả
   const res = await axios.get(url).catch((error) => {
      console.log('🚀 ~ error:', error);
      toast.error('Something went wrong.');// Nếu có lỗi trong quá trình request, hiển thị log và thông báo lỗi
   });
   return res?.data;// Trả về dữ liệu từ kết quả request
};

export default getProducts;// Xuất hàm getProducts
