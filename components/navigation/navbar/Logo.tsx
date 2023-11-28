'use client';

import { getLinkRoute } from '@/lib/Route';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Logo() {
  const [width, setWidth] = useState(0);

  const updateWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Link href={getLinkRoute(usePathname(), '')} className='block'>
      <Image
        src={'/images/logo.png'}
        alt='Pg Vet Clinic Logo'
        width={width < 1024 ? '50' : '70'}
        height={width < 1024 ? '40' : '60'}
        className='relative'
      />
    </Link>
  );
}
