import getGalleryImage from '@/actions/getGalleryImage';
import GalleryCard from './gallery-card';

const Gallery = () => {
   const galleries = getGalleryImage();
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
         <div className="col-span-1">
            <GalleryCard
               key={galleries[0].title}
               gallery={galleries[0]}
               className="text-4xl"
            />
         </div>
         <div className="col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
export default Gallery;
