import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

type OpenHoursProps = {
  lang: Locale;
  weekday?: boolean;
};

export default async function OpenHours({ lang, weekday }: OpenHoursProps) {
  const dictionary = await getDictionary(lang);
  return (
    <div className='flex justify-between w-full text-brown-primary text-[16px] font-[500] leading-normal'>
      <span>
        {weekday
          ? dictionary.home.openingHours.weekdays.days
          : dictionary.home.openingHours.weekends.days}
      </span>
      <span>
        {weekday
          ? dictionary.home.openingHours.weekends.hours
          : dictionary.home.openingHours.weekends.hours}
      </span>
    </div>
  );
}
