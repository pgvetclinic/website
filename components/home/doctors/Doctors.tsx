import { Locale } from '@/i18n-config';
import DoctorCard from './DoctorCard';
import { getDictionary } from '@/get-dictionary';

type DoctorsProps = {
  lang: Locale;
};

export default async function Doctors({ lang }: DoctorsProps) {
  const dictionary = await getDictionary(lang);
  return (
    <div className='flex justify-center items-center gap-x-28 gap-y-8 flex-wrap'>
      <DoctorCard
        imageSrc='/images/lady.png'
        name={dictionary.doctors.doctor1.name}
        role={dictionary.doctors.doctor1.role}
        experience={dictionary.doctors.doctor1.experience}
      />
      <DoctorCard
        imageSrc='/images/lady.png'
        name={dictionary.doctors.doctor2.name}
        role={dictionary.doctors.doctor2.role}
        experience={dictionary.doctors.doctor2.experience}
      />
    </div>
  );
}
