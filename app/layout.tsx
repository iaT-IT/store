import '@/app/styles/globals.css';
import Footer from '@/components/(footer)/footer';
import Header from '@/components/(header)/header';
import ToastProvider from '@/providers/toast-provider';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import TooltipProvider from '@/providers/tooltip-provider';

// Khai báo font chữ Montserrat cho trang web
const font = Montserrat({ subsets: ['latin'] });

// Metadata cho trang web
export const metadata = {
   title: 'Clothing Store',
   description: 'Clothing Store',
};

// Hàm RootLayout, là layout chính của trang web
export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      // Khai báo ngôn ngữ của trang là 'en'
      <html lang="en">
         {/* Thẻ body với className được thiết lập bằng font className của Montserrat */}
         <body className={font.className}>
            {/* Provider để quản lý theme với mặc định là light và hỗ trợ chế độ dark mode hệ thống */}
            <ThemeProvider
               attribute="class"
               defaultTheme="light"
               enableSystem
            >
               {/* Provider để quản lý tooltip */}
               <TooltipProvider>
                  <ToastProvider />{/* Provider để quản lý toast */}
                  <Header />{/* Hiển thị component Header */}
                  {children}{/* Hiển thị nội dung chính của trang */}
                  <Footer />{/* Hiển thị component Footer */}
               </TooltipProvider>
            </ThemeProvider>
         </body>
      </html>
   );
}
