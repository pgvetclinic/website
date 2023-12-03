import Image from 'next/image';
import Facebook from '@/components/svg/Facebook';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

type FooterProps = {
  lang: Locale;
};

export default async function Footer({ lang }: FooterProps) {
  const dictionary = await getDictionary(lang);
  return (
    <footer className='z-0 relative overflow-hidden'>
      <div className='flex flex-col justify-center items-center w-full py-10 bg-blue-footer'>
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
              {dictionary.footer.address}
            </p>
            <p className='text-black-primary text-[14px] font-[500] leading-normal pt-2'>
              {dictionary.footer.phone}
            </p>
            <div className='flex justify-center items-center pt-2'>
              <a href='https://www.facebook.com/pgvetclinic'>
                <div className='bg-black-2 w-[50px] h-[50px] flex justify-center items-center rounded-[50%]'>
                  <Facebook />
                </div>
              </a>
            </div>
          </div>
          <div className='flex flex-col justify-between items-start h-full w-[300px]'>
            <h4 className='text-[20px] font-[600] leading-normal text-black-primary'>
              {dictionary.footer.explore}
            </h4>
            <div className='flex flex-col justify-center items-start pt-5'>
              <p className='text-black-7 text-[14px] font-[500] leading-normal'>
                {dictionary.footer.feature}
              </p>
              <p className='text-black-7 text-[14px] font-[500] leading-normal pt-2'>
                {dictionary.footer.about}
              </p>
              <p className='text-black-7 text-[14px] font-[500] leading-normal pt-2'>
                {dictionary.footer.faq}
              </p>
              <p className='text-black-7 text-[14px] font-[500] leading-normal pt-2'>
                {dictionary.footer.contact}
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-start w-[300px]'>
            <h4 className='text-[20px] font-[600] leading-normal text-black-primary'>
              {dictionary.footer.legal}
            </h4>
            <div className='flex flex-col justify-center items-start pt-5'>
              <p className='text-black-7 text-[14px] font-[500] leading-normal'>
                {dictionary.footer.privacy}
              </p>
              <p className='text-black-7 text-[14px] font-[500] leading-normal pt-2'>
                {dictionary.footer.terms}
              </p>
            </div>
          </div>
        </div>
        <div className='h-[1px] mt-4 sm:w-[82%] w-[88%] bg-black-2'></div>
        <div className='flex justify-evenly px-1 pt-4 items-center gap-y-4 flex-wrap w-full'>
          <p className='text-black-4 text-[12px] font-[500] sm:w-[250px] w-[300px] leading-normal'>
            {dictionary.footer.rights}
          </p>
          <div className='flex justify-center items-center flex-wrap'>
            <p className='text-black-5 text-[12px] font-[500] sm:w-[250px] w-[300px] leading-normal'>
              {dictionary.footer.privacy}
            </p>
            <p className='text-black-5 text-[12px] font-[500] sm:w-[250px] w-[300px] leading-normal'>
              {dictionary.footer.terms}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
