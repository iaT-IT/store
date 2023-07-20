import { Product, Query } from '@/type';
import axios from 'axios';
import toast from 'react-hot-toast';
import qs from 'query-string';

const key = 'products';
const URL = `${process.env.NEXT_PUBLIC_API_URL}/${key}`;
const getProducts = async (query: Query): Promise<Product[]> => {
   const url = qs.stringifyUrl({
      url: URL,
      query: {
         colorId: query?.colorId,
         categoryId: query?.categoryId,
         sizeId: query?.sizeId,
         isFeatured: query?.isFeatured,
      },
   });

   const res = await axios.get(url).catch((error) => {
      console.log('🚀 ~ error:', error);
      toast.error('Something went wrong.');
   });
   return res?.data;
};

export default getProducts;
