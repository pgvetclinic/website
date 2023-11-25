import Calendar from '../../svg/Calendar';
import Doctor from '../../svg/Doctor';
import Mail from '../../svg/Mail';
import Location from '../../svg/Location';

export default function Characteristics() {
  return (
    <div className='flex flex-col bg-white-1 rounded-[30px] justify-center items-center py-10'>
      <div className='flex flex-wrap'>
        <div className='flex py-10 px-10 w-[315px]'>
          <div className='flex w-[40px] h-[40px] justify-center items-center py-[2.5px] px-[5.75px]'>
            <Calendar />
          </div>
          <div className='flex flex-col'>
            <h6 className='text-black-9 text-[16px] font-[600] leading-normal'>
              Make an Appointment
            </h6>
            <span className='text-black-8 text-[14px] font-[500] leading-normal'>
              Select the best time for you.
            </span>
          </div>
        </div>
        <div className='flex py-10 px-10 w-[315px]'>
          <div className='flex w-[40px] h-[40px] justify-center items-center py-[2.5px] px-[5.75px]'>
            <Doctor />
          </div>
          <div className='flex flex-col'>
            <h6 className='text-black-9 text-[16px] font-[600] leading-normal'>
              Continuous monitoring
            </h6>
            <span className='text-black-8 text-[14px] font-[500] leading-normal'>
              We care for your pet all the time.
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
              Visit the clinic
            </h6>
            <span className='text-black-8 text-[14px] font-[500] leading-normal'>
              Take care of your issues.
            </span>
          </div>
        </div>
        <div className='flex py-10 px-10 w-[315px]'>
          <div className='flex w-[40px] h-[40px] justify-center items-center py-[2.5px] px-[5.75px]'>
            <Mail />
          </div>
          <div className='flex flex-col'>
            <h6 className='text-black-9 text-[16px] font-[600] leading-normal'>
              Ask Questions
            </h6>
            <span className='text-black-8 text-[14px] font-[500] leading-normal'>
              Ask questions any time.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
