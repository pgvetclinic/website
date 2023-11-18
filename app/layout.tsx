import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Sidebar from '@/components/sidebar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Pg Vet Clinic',
  description:
    'Our dedicated team provides outstanding care for your furry companions at unbeatable prices.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navigation />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
