'use client';
import useNavigationStore from '@/store/NavigationStore';
import Link from 'next/link';

export default function Sidebar() {
  const isOpen = useNavigationStore((state) => state.isOpen);
  return isOpen ? (
    <div className='sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid left-0 z-10'>
      <ul className='sidebar-nav text-center leading-relaxed text-xl'>
        <li>
          <Link href='/'>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href='/services'>
            <p>Our Services</p>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <p>Blog</p>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <Link href='/contacts'>
            <p>Contact Us</p>
          </Link>
        </li>
      </ul>
    </div>
  ) : null;
}
