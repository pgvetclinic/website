import AppointmentButton from '@/components/home/AppointmentButton';
import Characteristics from '@/components/home/Characteristics';
import Description from '@/components/home/Description';
import IntroImage from '@/components/home/IntroImage';
import OpenHours from '@/components/home/OpenHours';
import Service from '@/components/home/Service';
import Title from '@/components/home/Title';
import SidebarOpenWrapper from '@/components/sidebar/SidebarOpenWrapper';
import ServiceLeftArrow from '@/components/svg/ServiceLeftArrow';
import ServiceRightArrow from '@/components/svg/ServiceRightArrow';

export default function Home() {
  return (
    <SidebarOpenWrapper>
      <div className='flex flex-col w-full justify-start items-center px-[10px]'>
        <section className='flex flex-wrap-reverse w-full justify-center items-center'>
          <div className='flex flex-col'>
            <Title />
            <Description />
            <Characteristics />
            <div className='flex justify-around items-center flex-wrap py-5'>
              <AppointmentButton />
              <div className='flex flex-col justify-center w-[170px] items-center'>
                <OpenHours days='Sat-Thu' hours='11AM-9PM' />
                <OpenHours days='Fri' hours='2PM-8PM' />
              </div>
            </div>
          </div>
          <div className='relative w-[473px] h-[821px] mx-10 mb-5'>
            <IntroImage />
          </div>
        </section>
        <section className='flex flex-col m-5 w-full justify-center items-center'>
          <div className='flex w-full justify-around items-center'>
            <h3 className='text-black-primary text-[28px] font-[700] leading-[112%]'>
              Our Services
            </h3>
            <div className='flex gap-x-3'>
              <ServiceLeftArrow />
              <ServiceRightArrow />
            </div>
          </div>
          <div className='flex justify-center pt-5 gap-4 flex-wrap items-start'>
            <Service
              src='/images/cat-vaccination.jpg'
              title='Cat Vaccination'
              key='cat-vaccination'
            />
            <Service
              src='/images/dog-vaccination.jpeg'
              title='Dog Vaccination'
              key='dog-vaccination'
            />
            <Service
              src='/images/dog-surgery.jpeg'
              title='Surgery'
              key='surgery'
            />
          </div>
        </section>
      </div>
    </SidebarOpenWrapper>
  );
}
