import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

type TitleProps = {
  lang: Locale;
};

export default async function Title({ lang }: TitleProps) {
  const dictionary = await getDictionary(lang);

  return (
    <div className='flex flex-col font-[700] justify-center text-[62px] leading-[116%] text-black-primary'>
      <h1>{dictionary.home.title.text1}</h1>
      <h1>{dictionary.home.title.text2}</h1>
    </div>
  );
}
