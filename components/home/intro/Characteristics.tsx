import Calendar from '../../svg/Calendar';
import Doctor from '../../svg/Doctor';
import Mail from '../../svg/Mail';
import Location from '../../svg/Location';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

type CharacteristicsProps = {
  lang: Locale;
};

export default async function Characteristics({ lang }: CharacteristicsProps) {
  const dictionary = await getDictionary(lang);
  return (
    <div className='flex flex-col bg-white-1 rounded-[30px] justify-center items-center py-10'>
      <div className='flex flex-wrap'>
        <div className='flex py-10 px-10 w-[315px]'>
          <div className='flex w-[40px] h-[40px] justify-center items-center py-[2.5px] px-[5.75px]'>
            <Calendar />
          </div>
          <div className='flex flex-col'>
            <h6 className='text-black-9 text-[16px] font-[600] leading-normal'>
              {dictionary.home.characteristics.appointment.title}
            </h6>
            <span className='text-black-8 text-[14px] font-[500] leading-normal'>
              {dictionary.home.characteristics.appointment.description}
            </span>
          </div>
        </div>
        <div className='flex py-10 px-10 w-[315px]'>
          <div className='flex w-[40px] h-[40px] justify-center items-center py-[2.5px] px-[5.75px]'>
            <Doctor />
          </div>
          <div className='flex flex-col'>
            <h6 className='text-black-9 text-[16px] font-[600] leading-normal'>
              {dictionary.home.characteristics.monitoring.title}
            </h6>
            <span className='text-black-8 text-[14px] font-[500] leading-normal'>
              {dictionary.home.characteristics.monitoring.description}
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='flex py-10 px-10 w-[315px]'>
          <div className='flex w-[40px] h-[40px] justify-center items-center py-[2.5px] px-[5.75px]'>
            <Location />
          </div>
          <div className='flex flex-col'>
            <h6 className='text-black-9 text-[16px] font-[600] leading-normal'>
              {dictionary.home.characteristics.visit.title}
            </h6>
            <span className='text-black-8 text-[14px] font-[500] leading-normal'>
              {dictionary.home.characteristics.visit.description}
            </span>
          </div>
        </div>
        <div className='flex py-10 px-10 w-[315px]'>
          <div className='flex w-[40px] h-[40px] justify-center items-center py-[2.5px] px-[5.75px]'>
            <Mail />
          </div>
          <div className='flex flex-col'>
            <h6 className='text-black-9 text-[16px] font-[600] leading-normal'>
              {dictionary.home.characteristics.questions.description}
            </h6>
            <span className='text-black-8 text-[14px] font-[500] leading-normal'>
              {dictionary.home.characteristics.questions.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
