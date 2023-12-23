import getGalleryImage from '@/actions/getGalleryImage';
import GalleryCard from './gallery-card';
// Component Gallery
const Gallery = () => {
   const galleries = getGalleryImage();// Gọi hàm getGalleryImage để lấy danh sách ảnh từ thư viện
   return (
      // Sử dụng div để chứa GalleryCard
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
         {/* Phần đầu tiên của danh sách ảnh */}
         <div className="col-span-1">
            {/* Sử dụng GalleryCard cho phần đầu tiên */}
            <GalleryCard
               key={galleries[0].title}
               gallery={galleries[0]}
               className="text-4xl"
            />
         </div>
         {/* Phần còn lại của danh sách ảnh */}
         <div className="col-span-1">
            {/* Sử dụng grid để chứa nhiều GalleryCard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
               {/* Lặp qua danh sách ảnh và sử dụng GalleryCard cho mỗi ảnh */}
               {galleries.slice(1, galleries.length).map((gallery) => (
                  <GalleryCard
                     key={gallery.title}
                     gallery={gallery}
                     className="text-xl"
                  />
               ))}
            </div>
         </div>
      </div>
   );
};
export default Gallery;// Xuất Gallery
