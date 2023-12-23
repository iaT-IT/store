import a from '@/public/header/1.webp';
import b from '@/public/header/2.webp';
import c from '@/public/header/3.webp';
import d from '@/public/header/4.webp';
import e from '@/public/header/5.webp';
//Trả về danh sách các hình ảnh cho phần Gallery
const getGalleryImage = () => {
   return [
      {
         image: a,
         title: 'Thời trang Nữ',
         text: 'Sáng tạo, đa dạng, phong cách.',
         button: 'SHOP NOW',
      },
      {
         image: b,
         title: 'Thời trang nam',
         text: 'Nam tính, chín chắn, linh hoạt.',
         button: 'SHOP NOW',
      },
      {
         image: c,
         title: 'Thời trang trẻ em',
         text: 'Ngộ nghĩnh, thoải mái, an toàn',
         button: 'SHOP NOW',
      },
      {
         image: d,
         title: 'Thời trang Unisex',
         text: 'Đồng nhất, linh hoạt, hiện đại.',
         button: 'SHOP NOW',
      },
      {
         image: e,
         title: 'Phụ kiện thời trang',
         text: 'Hoàn thiện, cá tính, điểm nhấn',
         button: 'SHOP NOW',
      },
   ];
};
export default getGalleryImage;// Xuất hàm getGalleryImage
