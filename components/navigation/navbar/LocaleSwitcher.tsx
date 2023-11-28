'use client';

import { i18n } from '@/i18n-config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRedirectedPathName } from '@/lib/Route';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  return (
    <div>
      <p>Locale Switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={getRedirectedPathName(pathName, locale)}>
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
