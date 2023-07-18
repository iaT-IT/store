import { Size } from '@/type';
import axios from 'axios';
import toast from 'react-hot-toast';

const getSizes = async (): Promise<Size[]> => {
   const key = 'sizes';
   const URL = `${process.env.NEXT_PUBLIC_API_URL}/${key}`;

   const res = await axios.get(URL).catch((error) => {
      console.log('🚀 ~ error:', error);
      toast.error('Something went wrong.');
   });
   return res?.data;
};

export default getSizes;
