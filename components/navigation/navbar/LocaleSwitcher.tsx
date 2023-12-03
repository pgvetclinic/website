'use client';

import { i18n } from '@/i18n-config';
import { usePathname, useRouter } from 'next/navigation';
import { getLocaleName, getRedirectedPathName } from '@/lib/Route';

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const router = useRouter();
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const locale = e.target.value;
    router.push(getRedirectedPathName(pathName, locale));
  };

  const activeLocale =
    pathName.length > 2 ? pathName.split('/')[1] : i18n.defaultLocale;

  return (
    <select
      className='font-[500] leading-normal bg-blue-page text-black-7 text-[12px] sm:text-[16px] text-right'
      onChange={(e) => onSelectChange(e)}
      value={activeLocale}
    >
      {i18n.locales.map((locale) => {
        return (
          <option key={locale} value={locale}>
            {getLocaleName(locale)}
          </option>
        );
      })}
    </select>
  );
}
