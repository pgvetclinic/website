import Link from 'next/link';
import Logo from './Logo';
import { Poppins } from 'next/font/google';
import useNavigationStore from '@/store/NavigationStore';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
});

export default function NavBar() {
  const isOpen = useNavigationStore((state) => state.isOpen);
  const toggle = useNavigationStore((state) => state.toggleIsOpen);
  return (
    <>
      <div className='w-full h-20 sticky top-0'>
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
            <ul
              style={poppins.style}
              className='hidden leading-normal flex-row-reverse text-black-7 text-[20px] md:flex gap-x-6'
            >
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
