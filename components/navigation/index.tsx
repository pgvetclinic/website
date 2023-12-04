'use client';

import useNavigationStore from '@/store/NavigationStore';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './navbar/Logo';
import Menu from '../svg/Menu';
import Close from '../svg/Close';
import Link from 'next/link';
import { getLinkRoute } from '@/lib/Route';
import LocaleSwitcher from './navbar/LocaleSwitcher';
import { Locale } from '@/i18n-config';
import { reverseLayout } from '@/lib/Internatinalization';

type NavigationProps = {
  lang: Locale;
};

export default function Navigation({ lang }: NavigationProps) {
  const isOpen = useNavigationStore((state) => state.isOpen);
  const toggle = useNavigationStore((state) => state.toggleIsOpen);
  const hideNavBar = useNavigationStore((state) => state.hidden);
  const updateScroll = useNavigationStore((state) => state.updateCurrentYpos);
  const routeChange = useNavigationStore((state) => state.routeChange);

  const handleScroll = () => updateScroll(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const path = usePathname();
  useEffect(() => {
    routeChange();
  }, [path, routeChange]);

  return (
    <>
      <div
        style={{
          top: hideNavBar && !isOpen ? '-200px' : '0',
          transition: 'top 0.5s',
        }}
        className='w-full bg-blue-page h-20 sticky z-50'
      >
        <div className='container mx-auto px-4 h-full'>
          <div className='flex justify-around h-full items-center'>
            <Logo />
            <button
              type='button'
              className='inline-flex items-center md:hidden'
              onClick={toggle}
            >
              <div className='w-[42px] h-[42px] shrink-0 rounded-[50%] border-blue-primary border-[1px] border-solid flex justify-center items-center'>
                {!isOpen ? <Menu /> : <Close />}
              </div>
            </button>
            <ul className='hidden font-[500] leading-normal text-black-7 text-[20px] md:flex gap-x-6'>
              <li>
                <Link href={getLinkRoute(path, '')}>
                  <p>{reverseLayout(lang) ? 'بيت' : 'Home'}</p>
                </Link>
              </li>
              <li>
                <Link href={getLinkRoute(path, '/services')}>
                  <p>{reverseLayout(lang) ? 'خدماتنا' : 'Our Services'}</p>
                </Link>
              </li>
              <li>
                <Link href={getLinkRoute(path, '/blog')}>
                  <p>{reverseLayout(lang) ? 'مدونة' : 'Blog'}</p>
                </Link>
              </li>
              <li>
                <Link href={getLinkRoute(path, '/about')}>
                  <p>{reverseLayout(lang) ? 'معلومات عنا' : 'About Us'}</p>
                </Link>
              </li>
              <li>
                <Link href={getLinkRoute(path, '/contacts')}>
                  <p>{reverseLayout(lang) ? 'اتصل بنا' : 'Contact Us'}</p>
                </Link>
              </li>
            </ul>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
