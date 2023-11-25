import Image from 'next/image';

type DoctorCardProps = {
  imageSrc: string;
  name: string;
  role: string;
  experience: string;
};

export default function DoctorCard({
  imageSrc,
  name,
  role,
  experience,
}: DoctorCardProps) {
  return (
    <div className='flex flex-col justify-center w-[251px] md:w-[232px] items-start shrink-0 rounded-[30px] bg-white-0 p-[15px]'>
      <Image
        src={imageSrc}
        width={100}
        height={100}
        alt='Doctor Image'
        className='rounded-[50%] w-[100px] h-[100px] object-cover shrink-0'
      />
      <h4 className='text-black-primary text-[20px] font-[600] leading-[112%] pt-4'>
        {name}
      </h4>
      <p className='text-black-7 text-[12px] font-[500] leading-[112%] pt-1'>
        {role}
      </p>
      <p className='text-blue-primary text-[14px] font-[500] leading-[112%] pt-4 pb-1'>
        {experience}
      </p>
    </div>
  );
}
