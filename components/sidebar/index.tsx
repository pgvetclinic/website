'use client';

import useNavigationStore from '@/store/NavigationStore';
import Link from 'next/link';
import Option from './Option';
import { getLinkRoute } from '@/lib/Route';
import { usePathname } from 'next/navigation';
import { reverseLayout } from '@/lib/Internatinalization';

type SidebarProps = {
  lang: string;
};

export default function Sidebar({ lang }: SidebarProps) {
  const isOpen = useNavigationStore((state) => state.isOpen);

  const path = usePathname();
  return isOpen ? (
    <div className='absolute w-full h-[90%] overflow-hidden justify-center bg-blue-page grid left-0 z-50'>
      <ul className='sidebar-nav'>
        <li>
          <Link href={getLinkRoute(path, '')}>
            <Option
              pathName=''
              pathText={reverseLayout(lang) ? 'بيت' : 'Home'}
            />
          </Link>
        </li>
        <li>
          <Link href={getLinkRoute(path, '/services')}>
            <Option
              pathName='/services'
              pathText={reverseLayout(lang) ? 'خدماتنا' : 'Our Services'}
            />
          </Link>
        </li>
        <li>
          <Link href={getLinkRoute(path, '/blog')}>
            <Option
              pathName='/blog'
              pathText={reverseLayout(lang) ? 'مدونة' : 'Blog'}
            />
          </Link>
        </li>
        <li>
          <Link href={getLinkRoute(path, '/about')}>
            <Option
              pathName='/about'
              pathText={reverseLayout(lang) ? 'معلومات عنا' : 'About Us'}
            />
          </Link>
        </li>
        <li>
          <Link href={getLinkRoute(path, '/contacts')}>
            <Option
              pathName='/contacts'
              pathText={reverseLayout(lang) ? 'اتصل بنا' : 'Contact Us'}
            />
          </Link>
        </li>
      </ul>
    </div>
  ) : null;
}
