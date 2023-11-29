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
import Testimonial from '@/components/home/testimonials/Testimonial';
import { Locale } from '@/i18n-config';
import { reverseRowLayout } from '@/lib/Internatinalization';
// import { getDictionary } from '@/get-dictionary';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const dictionary = await getDictionary(lang);
  const reverseRow = reverseRowLayout(lang);
  return (
    <SidebarOpenWrapper>
      <main className='flex flex-col w-full h-full justify-center items-center'>
        <section
          className={`flex flex-wrap-reverse ${reverseRow} w-full justify-center items-center px-[10px]`}
        >
          <div className='flex flex-col'>
            <Title lang={lang} />
            <Description lang={lang} />
            <Characteristics lang={lang} />
            <div
              className={`flex justify-around ${reverseRow} items-center flex-wrap py-5`}
            >
              <AppointmentButton lang={lang} />
              <div className='flex flex-col justify-center w-[170px] items-center'>
                <OpenHours lang={lang} weekday />
                <OpenHours lang={lang} />
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
          <div className='flex justify-center pt-5 gap-x-10 flex-wrap items-start'>
            <Testimonial src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid037g5hMw3Bor9YKrp1qdf3SRvs9ojo2xr1Kiq8SXj66YJ2VWJ7ro2BNcTukW96e3e5l%26id%3D100008377443191' />
            <Testimonial src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgadil.mourad%2Fposts%2Fpfbid02cUn8yZsbSTVCAXKqZKPgKLSdfFTz9rEBYKxRHaGJjZDNzn9ZwCNoFBz7Arr7GnC5l&show_text=true&width=500' />
          </div>
        </section>
      </main>
    </SidebarOpenWrapper>
  );
}
