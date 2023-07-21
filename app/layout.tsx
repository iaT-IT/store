import '@/app/styles/globals.css';
import Footer from '@/components/(footer)/footer';
import Header from '@/components/(header)/header';
import ToastProvider from '@/providers/toast-provider';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import TooltipProvider from '@/providers/tooltip-provider';

const font = Montserrat({ subsets: ['latin'] });

export const metadata = {
   title: 'Clothing Store',
   description: 'Clothing Store',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={font.className}>
            <ThemeProvider
               attribute="class"
               defaultTheme="light"
               enableSystem
            >
               <TooltipProvider>
                  <ToastProvider />
                  <Header />
                  {children}
                  <Footer />
               </TooltipProvider>
            </ThemeProvider>
         </body>
      </html>
   );
}
