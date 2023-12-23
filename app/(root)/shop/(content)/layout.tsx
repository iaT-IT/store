import getCategories from '@/actions/getCategories';
import getColors from '@/actions/getColors';
import getSizes from '@/actions/getSizes';
import Container from '@/components/ui/container';
import Filter from '../components/filter';
import MobileFilter from '../components/mobile-filter';

// Component RootLayout chứa layout chính của trang
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Lấy danh sách các màu sắc, kích thước và danh mục từ API
  const colors = await getColors();
  const sizes = await getSizes();
  const categories = await getCategories();
  return (
    <>
      <>
        {/* Container chứa toàn bộ nội dung của trang, có padding và margin tương ứng */}
        <Container className="ml-4 mr-2 md:mx-14">
          {/* Grid chia layout thành 4 cột trên màn hình lớn và 1 cột trên màn hình nhỏ */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Phần cột trái chứa các bộ lọc */}
            <div className="col-span-1">
              <div className="grid grid-cols-1 gap-5">
                {/* MobileFilter chứa bộ lọc dành cho màn hình di động */}
                {' '}
                <MobileFilter
                  categories={categories}
                  colors={colors}
                  sizes={sizes}
                />
                {/* Filter chứa bộ lọc cho các danh mục, màu sắc và kích thước */}
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
            {/* Phần cột phải chứa nội dung chính (children) */}
            <div className="md:col-span-3 h-screen overflow-y-auto">
              {children}
            </div>
          </div>
        </Container>
      </>
    </>
  );
}
