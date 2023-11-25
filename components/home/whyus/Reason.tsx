type ReasonProps = {
  symbol: React.ReactNode;
  title: string;
  description1: string;
  description2: string;
};

export default function Reason({
  symbol,
  title,
  description1,
  description2,
}: ReasonProps) {
  return (
    <div className='flex flex-col w-[225px] justify-center items-start'>
      <div className='flex justify-center items-center w-[100px] h-[100px] shrink-0 rounded-[160px] bg-blue-secondary py-3'>
        {symbol}
      </div>
      <h3 className='text-black-primary text-[20px] font-[600] leading-[112%] py-3'>
        {title}
      </h3>
      <p className='flex flex-col text-black-8 text-[12px] font-[400] leading-[146%]'>
        <span>{description1}</span>
        <span>{description2}</span>
      </p>
    </div>
  );
}
