import Arrow from '../../svg/Arrow';

export default function AppointmentButton() {
  return (
    <button className='inline-flex py-[16px] px-[32px] justify-center items-center rounded-[55px] bg-blue-primary'>
      <span className='text-white-0 text-[20px] px-[22px] font-[500] leading-[173%]'>
        Make Appointment
      </span>
      <Arrow />
    </button>
  );
}
