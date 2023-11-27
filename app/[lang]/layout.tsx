import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Sidebar from '@/components/sidebar';
import { i18n } from '@/i18n-config';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Pg Vet Clinic',
  description:
    'Our dedicated team provides outstanding care for your furry companions at unbeatable prices.',
  icons: {
    icon: '/icon.ico',
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={poppins.className}>
        <Navigation />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
