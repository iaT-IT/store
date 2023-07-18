import { Color } from '@/type';
import axios from 'axios';
import toast from 'react-hot-toast';

const getColors = async (): Promise<Color[]> => {
   const key = 'colors';
   const URL = `${process.env.NEXT_PUBLIC_API_URL}/${key}`;

   const res = await axios.get(URL).catch((error) => {
      console.log('🚀 ~ error:', error);
      toast.error('Something went wrong.');
   });
   return res?.data;
};

export default getColors;
