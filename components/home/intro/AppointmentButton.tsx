import { getDictionary } from '@/get-dictionary';
import Arrow from '../../svg/Arrow';
import { Locale } from '@/i18n-config';
import { reverseLayout } from '@/lib/Internatinalization';
import Link from 'next/link';

type AppointmentButtonProps = {
  lang: Locale;
};

export default async function AppointmentButton({
  lang,
}: AppointmentButtonProps) {
  const dictionary = await getDictionary(lang);
  return (
    <button className='inline-flex min-w-[300px] py-[16px] px-[32px] justify-center items-center rounded-[55px] bg-blue-primary'>
      <Link href={`/${lang}/contacts`}>
        <span className='text-white-0 text-[20px] px-[22px] font-[500] leading-[173%]'>
          {dictionary.home.appointment.button}
        </span>
      </Link>
      <Arrow rotate={reverseLayout(lang)} />
    </button>
  );
}
