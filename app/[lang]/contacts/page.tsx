import SidebarOpenWrapper from '@/components/sidebar/SidebarOpenWrapper';
import ContactMail from '@/components/svg/ContactMail';
import Phone from '@/components/svg/Phone';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { reverseRowLayout } from '@/lib/Internatinalization';
import Image from 'next/image';

export default async function Contacts({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const reverse = reverseRowLayout(lang);

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
        </div>
        <h2 className='text-black-primary py-5 text-center text-[40px] font-[700] leading-[122%]'>
          {dictionary.contacts.title}
        </h2>
        <div
          className={`flex justify-center gap-x-8 gap-y-5 items-center flex-wrap-reverse ${reverse}`}
        >
          <div className='flex flex-col justify-center items-start gap-y-1'>
            <div
              className={`flex justify-center items-center gap-2 ${reverse}`}
            >
              <Phone rotate={reverse.length !== 0} />
              <p className='text-black-primary text-center text-[17px] font-[500] leading-[173%]'>
                01126264342
              </p>
            </div>
            <div
              className={`flex justify-center items-center gap-2 ${reverse}`}
            >
              <Phone rotate={reverse.length !== 0} />
              <p className='text-black-primary text-center text-[17px] font-[500] leading-[173%]'>
                0226429022
              </p>
            </div>
            <div
              className={`flex justify-center items-center gap-2 ${reverse}`}
            >
              <ContactMail />
              <p className='text-black-primary text-center text-[17px] font-[500] leading-[173%]'>
                abdallaashtaalsalem@gmail.com
              </p>
            </div>
          </div>
          <Image
            src='/images/location.png'
            alt='Location'
            width={611}
            height={377}
            className='px-5'
          />
        </div>
      </main>
    </SidebarOpenWrapper>
  );
}
