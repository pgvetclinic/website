import AppointmentButton from '@/components/home/intro/AppointmentButton';
import Characteristics from '@/components/home/intro/Characteristics';
import Description from '@/components/home/intro/Description';
import IntroImage from '@/components/home/intro/IntroImage';
import OpenHours from '@/components/home/intro/OpenHours';
import ServiceSection from '@/components/home/services/Service';
import Title from '@/components/home/intro/Title';
import WhyUs from '@/components/home/whyus/WhyUs';
import Doctors from '@/components/home/doctors/Doctors';
import SidebarOpenWrapper from '@/components/sidebar/SidebarOpenWrapper';
import ServiceLeftArrow from '@/components/svg/ServiceLeftArrow';
import ServiceRightArrow from '@/components/svg/ServiceRightArrow';
import Footer from '@/components/home/footer/Footer';

export default function Home() {
  return (
    <SidebarOpenWrapper>
      <main className='flex flex-col w-full h-full justify-center items-center'>
        <section className='flex flex-wrap-reverse w-full justify-center items-center px-[10px]'>
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
            <ServiceSection />
          </div>
        </section>
        <section className='flex flex-col m-5 w-full justify-center items-center'>
          <div className='flex w-full justify-around items-center'>
            <h3 className='text-black-primary text-[28px] font-[700] leading-[112%]'>
              Why Us
            </h3>
          </div>
          <div className='flex justify-center pt-5 gap-4 flex-wrap items-start'>
            <WhyUs />
          </div>
        </section>
        <section className='flex flex-col m-5 w-full justify-center items-center bg-brown-secondary py-5'>
          <div className='flex w-full justify-around items-center'>
            <h3 className='text-black-primary text-[28px] font-[700] leading-[112%]'>
              Our Qualified Doctors
            </h3>
          </div>
          <div className='flex justify-center pt-5 gap-4 flex-wrap items-start'>
            <Doctors />
          </div>
        </section>
        <section className='flex flex-col m-5 w-full justify-center items-center'>
          <div className='flex w-full justify-around items-center'>
            <h3 className='text-black-primary text-[28px] font-[700] leading-[112%]'>
              Testimonials
            </h3>
            <div className='flex gap-x-3'>
              <ServiceLeftArrow />
              <ServiceRightArrow />
            </div>
          </div>
          <div className='flex justify-center pt-5 gap-4 flex-wrap items-start'>
            ola
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </SidebarOpenWrapper>
  );
}
