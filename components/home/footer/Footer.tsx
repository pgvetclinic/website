import Image from 'next/image';
import Facebook from '@/components/svg/Facebook';

export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center w-full py-10 bg-blue-page'>
      <div className='flex sm:pl-24 justify-evenly items-start w-full flex-wrap gap-y-8'>
        <div className='flex flex-col justify-center items-start w-[300px]'>
          <div className='flex justify-start gap-x-6 items-center w-full'>
            <Image
              src={'/images/logo.png'}
              alt='Pg Vet Clinic Logo'
              width={30}
              height={30}
            />
            <p className='text-[20px] font-[600] leading-normal text-black-primary'>
              PG Vet Clinic
            </p>
          </div>
          <p className='text-black-7 text-[14px] font-[500] leading-normal pt-5'>
            1429 Something Bridge, LA 4281
          </p>
          <p className='text-black-primary text-[14px] font-[500] leading-normal pt-2'>
            Call: (20) 01 1446 00522
          </p>
          <div className='flex justify-center items-center pt-2'>
            <div className='bg-black-2 w-[50px] h-[50px] flex justify-center items-center rounded-[50%]'>
              <Facebook />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between items-start h-full w-[300px]'>
          <h4 className='text-[20px] font-[600] leading-normal text-black-primary'>
            Explore
          </h4>
          <div className='flex flex-col justify-center items-start pt-5'>
            <p className='text-black-7 text-[14px] font-[500] leading-normal'>
              Feature
            </p>
            <p className='text-black-7 text-[14px] font-[500] leading-normal pt-2'>
              About Us
            </p>
            <p className='text-black-7 text-[14px] font-[500] leading-normal pt-2'>
              FAQs
            </p>
            <p className='text-black-7 text-[14px] font-[500] leading-normal pt-2'>
              Contact
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-start w-[300px]'>
          <h4 className='text-[20px] font-[600] leading-normal text-black-primary'>
            Legal
          </h4>
          <div className='flex flex-col justify-center items-start pt-5'>
            <p className='text-black-7 text-[14px] font-[500] leading-normal'>
              Privacy Policy
            </p>
            <p className='text-black-7 text-[14px] font-[500] leading-normal pt-2'>
              Terms of Services
            </p>
          </div>
        </div>
      </div>
      <div className='h-[1px] mt-4 sm:w-[82%] w-[88%] bg-black-2'></div>
      <div className='flex justify-evenly px-1 pt-4 items-center gap-y-4 flex-wrap w-full'>
        <p className='text-black-4 text-[12px] font-[500] sm:w-[250px] w-[300px] leading-normal'>
          © 2023 Pg Vet Clinic, All Rights Reserved
        </p>
        <div className='flex justify-center items-center flex-wrap'>
          <p className='text-black-5 text-[12px] font-[500] sm:w-[250px] w-[300px] leading-normal'>
            Privacy Policy
          </p>
          <p className='text-black-5 text-[12px] font-[500] sm:w-[250px] w-[300px] leading-normal'>
            Terms of Services
          </p>
        </div>
      </div>
    </div>
  );
}
