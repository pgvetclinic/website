type OpenHoursProps = {
  days: string;
  hours: string;
};

export default function OpenHours({ days, hours }: OpenHoursProps) {
  return (
    <div className='flex justify-between w-full text-brown-primary text-[16px] font-[500] leading-normal'>
      <span>{days}</span>
      <span>{hours}</span>
    </div>
  );
}
