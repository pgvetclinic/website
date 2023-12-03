import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Sidebar from '@/components/sidebar';
import { Locale, i18n } from '@/i18n-config';
import Footer from '@/components/home/footer/Footer';
import { reverseLayout } from '@/lib/Internatinalization';

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
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} dir={reverseLayout(params.lang) ? 'rtl' : 'ltr'}>
      <body className={poppins.className}>
        <Navigation lang={params.lang} />
        <Sidebar lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
