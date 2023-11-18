'use client';
import useNavigationStore from '@/store/NavigationStore';
import Link from 'next/link';

export default function Sidebar() {
  const isOpen = useNavigationStore((state) => state.isOpen);
  const toggle = useNavigationStore((state) => state.toggleIsOpen);
  return (
    <>
      <div
        className='sidebar-container bg-background-0 fixed w-full h-full overflow-hidden justify-center bg-white grid left-0 z-10'
        style={{
          opacity: isOpen ? '1' : '0',
        }}
      >
        <ul className='sidebar-nav text-center leading-relaxed text-xl'>
          <li>
            <Link href='/' onClick={toggle}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href='/services' onClick={toggle}>
              <p>Our Services</p>
            </Link>
          </li>
          <li>
            <Link href='/blog' onClick={toggle}>
              <p>Blog</p>
            </Link>
          </li>
          <li>
            <Link href='/about' onClick={toggle}>
              <p>About Us</p>
            </Link>
          </li>
          <li>
            <Link href='/contacts' onClick={toggle}>
              <p>Contact Us</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
