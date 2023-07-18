import '@/app/styles/globals.css';
import Footer from '@/components/(footer)/footer';
import Header from '@/components/(header)/header';
import ToastProvider from '@/providers/toast-provider';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';

const font = Montserrat({ subsets: ['latin'] });

export const metadata = {
   title: 'Clothes Shop',
   description: 'Clothes Shop',
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
               defaultTheme="system"
               enableSystem
            >
               <ToastProvider />
               <Header />
               {children}
               <Footer />
            </ThemeProvider>
         </body>
      </html>
   );
}
