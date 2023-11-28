import { isPathSameRoute } from '@/lib/Route';
import { usePathname } from 'next/navigation';

type OptionProps = {
  pathName: string;
  pathText: string;
};

export default function Option({ pathName, pathText }: OptionProps) {
  const path = usePathname();

  const samePath = isPathSameRoute(path, pathName);
  return (
    <div className='flex justify-between items-center'>
      <div
        className={`h-[4px] mr-4 w-[20px] ${
          samePath ? 'bg-blue-primary' : 'bg-blue-footer'
        }`}
      ></div>
      <p
        className={`text-[20px] w-full font-[500] leading-normal ${
          samePath ? 'text-blue-primary' : 'text-black-7'
        }`}
      >
        {pathText}
      </p>
    </div>
  );
}
