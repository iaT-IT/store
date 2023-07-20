import getCategories from '@/actions/getCategories';
import getColors from '@/actions/getColors';
import getSizes from '@/actions/getSizes';
import Container from '@/components/ui/container';
import Filter from '../filter';
import MobileFilter from '../mobile-filter';

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const colors = await getColors();
   const sizes = await getSizes();
   const categories = await getCategories();
   return (
      <>
         <>
            <Container className="ml-4 mr-2 md:mx-14">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                  <div className="col-span-1">
                     <div className="grid grid-cols-1 gap-5">
                        {' '}
                        <MobileFilter
                           categories={categories}
                           colors={colors}
                           sizes={sizes}
                        />
                        <Filter
                           data={categories}
                           type="Categories"
                        />
                        <Filter
                           data={colors}
                           type="Colors"
                        />
                        <Filter
                           data={sizes}
                           type="Sizes"
                        />
                     </div>
                  </div>
                  <div className="md:col-span-3 h-screen overflow-y-auto">
                     <div className="grid grid-cols-1 md:grid-cols-3">
                        {children}
                     </div>
                  </div>
               </div>
            </Container>
         </>
      </>
   );
}
