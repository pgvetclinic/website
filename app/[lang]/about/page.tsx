import SidebarOpenWrapper from '@/components/sidebar/SidebarOpenWrapper';
import Quotes from '@/components/svg/Quotes';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import Image from 'next/image';

type AboutProps = {
  params: {
    lang: Locale;
  };
};

export default async function About({ params: { lang } }: AboutProps) {
  const dictionary = await getDictionary(lang);
  return (
    <SidebarOpenWrapper>
      <main className='w-full h-full pb-16'>
        <div className='w-full h-[300px]'>
          <div className='w-full h-[300px] absolute -z-10'>
            <Image
              src='/images/team.jpeg'
              alt='Team'
              fill
              quality={100}
              className='object-cover object-top'
            />
          </div>
          <div className='flex justify-center items-center h-full w-full'>
            <h2 className='text-white-0 p-[32px] gap-[10px] backdrop-filter backdrop-blur-[2.5px] text-center text-[35px] rounded-[30px] bg-black-8 font-[700] leading-[112%]'>
              {dictionary.about.title}
            </h2>
          </div>
        </div>
        <div className='flex justify-center items-start pt-9 px-2'>
          <Quotes />
          <p className='text-black-8 text-[20px] pl-2 pt-10 font-[400] leading-[173%] w-[776px]'>
            {dictionary.about.description}
          </p>
        </div>
      </main>
    </SidebarOpenWrapper>
  );
}
