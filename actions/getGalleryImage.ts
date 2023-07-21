import a from '@/public/header/1.webp';
import b from '@/public/header/2.webp';
import c from '@/public/header/3.webp';
import d from '@/public/header/4.webp';
import e from '@/public/header/5.webp';
const getGalleryImage = () => {
   return [
      {
         image: a,
         title: 'Women’s fashion',
         text: 'Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.',
         button: 'SHOP NOW',
      },
      {
         image: b,
         title: 'Men’s fashion',
         text: '358 items',
         button: 'SHOP NOW',
      },
      {
         image: c,
         title: 'Kid’s fashion',
         text: '273 items',
         button: 'SHOP NOW',
      },
      {
         image: d,
         title: 'Cosmetics',
         text: '159 items',
         button: 'SHOP NOW',
      },
      {
         image: e,
         title: 'Accessories',
         text: '792 items',
         button: 'SHOP NOW',
      },
   ];
};
export default getGalleryImage;
