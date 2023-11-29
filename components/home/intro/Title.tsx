import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { reverseItemsAlign, reverseTextAlign } from '@/lib/Internatinalization';

type TitleProps = {
  lang: Locale;
};

export default async function Title({ lang }: TitleProps) {
  const dictionary = await getDictionary(lang);
  const itemsPosition = reverseItemsAlign(lang);
  const textPosition = reverseTextAlign(lang);

  return (
    <div
      className={`flex flex-col font-[700] justify-center ${itemsPosition} text-[62px] leading-[116%] text-black-primary`}
    >
      <h1 className={textPosition}>{dictionary.home.title.text1}</h1>
      <h1 className={textPosition}>{dictionary.home.title.text2}</h1>
    </div>
  );
}
