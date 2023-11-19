import AppointmentButton from '@/components/home/AppointmentButton';
import SidebarOpenWrapper from '@/components/sidebar/SidebarOpenWrapper';
import Calendar from '@/components/svg/Calendar';
import Doctor from '@/components/svg/Doctor';
import Location from '@/components/svg/Location';
import Mail from '@/components/svg/Mail';

export default function Home() {
  return (
    <SidebarOpenWrapper>
      <div className='flex w-full justify-center items-center flex-wrap px-[10px]'>
        <div className='flex flex-col'>
          <div className='flex flex-col font-[700] justify-center items-center text-[62px] leading-[116%] text-black-primary'>
            <h1>Give Your Pet</h1>
            <h1>More For Less</h1>
          </div>
          <p className='text-[20px] font-[400] leading-[173%] text-black-8 py-10'>
            Our professional team will take care of you, we value your time and
            health.
          </p>
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
          <div className='flex justify-around items-center flex-wrap py-5'>
            <AppointmentButton />
            <div className='flex flex-col justify-center w-[170px] items-center'>
              <div className='flex justify-between w-full text-brown-primary text-[16px] font-[500] leading-normal'>
                <span>Sat-Thu</span>
                <span>11AM-9PM</span>
              </div>
              <div className='flex justify-between w-full text-brown-primary text-[16px] font-[500] leading-normal'>
                <span>Fri</span>
                <span>2PM-8PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarOpenWrapper>
  );
}
