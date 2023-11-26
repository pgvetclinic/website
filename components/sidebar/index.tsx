'use client';

import useNavigationStore from '@/store/NavigationStore';
import Link from 'next/link';
import Option from './Option';

export default function Sidebar() {
  const isOpen = useNavigationStore((state) => state.isOpen);

  return isOpen ? (
    <div className='sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid left-0 z-10'>
      <ul className='sidebar-nav text-left'>
        <li>
          <Link href='/'>
            <Option pathName='/' pathText='Home' />
          </Link>
        </li>
        <li>
          <Link href='/services'>
            <Option pathName='/services' pathText='Our Services' />
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <Option pathName='/blog' pathText='Blog' />
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <Option pathName='/about' pathText='About Us' />
          </Link>
        </li>
        <li>
          <Link href='/contacts'>
            <Option pathName='/contacts' pathText='Contact Us' />
          </Link>
        </li>
      </ul>
    </div>
  ) : null;
}
