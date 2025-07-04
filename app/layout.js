import MainHeader from '@/components/main-header/Main-Header';
import './globals.css';
import Footer from '@/components/footer/Footer';
import background from '@/assets/background-overlay.jpg'
import Image from 'next/image';

export const metadata = {
  title: 'Top Shot Trading',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Image src={background} className="backgroundOverlay"/>
        <MainHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
