import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { reverseItemsAlign } from '@/lib/Internatinalization';

type DescriptionProps = {
  lang: Locale;
};

export default async function Description({ lang }: DescriptionProps) {
  const dictionary = await getDictionary(lang);
  const itemsPosition = reverseItemsAlign(lang);
  return (
    <p
      className={`flex flex-col justify-center ${itemsPosition} text-[20px] font-[400] leading-[173%] text-black-8 py-10`}
    >
      <span>{dictionary.home.description.text1}</span>
      <span>{dictionary.home.description.text2}</span>
    </p>
  );
}
