import Image from 'next/image';

export default function IntroImage() {
  return (
    <Image
      src='/images/lady-original.jpeg'
      alt='Intro Image'
      sizes='100%'
      className='rounded-[20px] shrink-0 object-cover object-[65%]'
      priority
      fill
    ></Image>
  );
}
