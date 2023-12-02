import { getDictionary } from '@/get-dictionary';
import Chart from '../../svg/Chart';
import Medicine from '../../svg/Medicine';
import Wallet from '../../svg/Wallet';
import Reason from './Reason';
import { Locale } from '@/i18n-config';

type WhyUsProps = {
  lang: Locale;
};

export default async function WhyUs({ lang }: WhyUsProps) {
  const dictionary = await getDictionary(lang);

  return (
    <div className='flex justify-center items-center gap-x-28 gap-y-8 flex-wrap'>
      <Reason
        symbol={<Wallet />}
        title={dictionary.whyus.reason1.title}
        description1={dictionary.whyus.reason1.description1}
        description2={dictionary.whyus.reason1.description2}
      />
      <Reason
        symbol={<Chart />}
        title={dictionary.whyus.reason2.title}
        description1={dictionary.whyus.reason2.description1}
        description2={dictionary.whyus.reason2.description2}
      />
      <Reason
        symbol={<Medicine />}
        title={dictionary.whyus.reason3.title}
        description1={dictionary.whyus.reason3.description1}
        description2={dictionary.whyus.reason3.description2}
      />
    </div>
  );
}
