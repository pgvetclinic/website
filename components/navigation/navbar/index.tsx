import Link from 'next/link';
import Logo from './Logo';
import useNavigationStore from '@/store/NavigationStore';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NavBar() {
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
          top: hideNavBar ? '-200px' : '0',
          transition: 'top 0.5s',
        }}
        className='w-full bg-blue-footer h-20 sticky z-50'
      >
        <div className='container mx-auto px-4 h-full'>
          <div className='flex flex-row-reverse justify-around h-full items-center'>
            <Logo />
            <button
              type='button'
              className='inline-flex items-center md:hidden'
              onClick={toggle}
            >
              {!isOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='rgba(6, 33, 38, 0.60)'
                    d='M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-black'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='rgba(6, 33, 38, 0.60)'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
            <ul className='hidden font-[500] leading-normal flex-row-reverse text-black-7 text-[20px] md:flex gap-x-6'>
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
        </div>
      </div>
    </>
  );
}
