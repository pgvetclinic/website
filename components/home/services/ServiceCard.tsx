import Image from 'next/image';

type ServiceProps = {
  src: string;
  title: string;
};

export default function ServiceCard({ src, title }: ServiceProps) {
  return (
    <div className='flex flex-col'>
      <Image
        src={src}
        width={372}
        height={282}
        className='shrink-0 rounded-[30px]'
        alt="Service's image"
      />
      <p className='flex justify-center items-center text-[18px] text-black-primary py-4 font-[500] leading-[112%]'>
        {title}
      </p>
    </div>
  );
}
