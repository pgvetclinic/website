import Chart from '../svg/Chart';
import Medicine from '../svg/Medicine';
import Wallet from '../svg/Wallet';
import Reason from './whyus/Reason';

export default function WhyUsSection() {
  return (
    <div className='flex justify-center items-center gap-x-28 gap-y-8 flex-wrap'>
      <Reason
        symbol={<Wallet />}
        title='Affordable Prices'
        description1='We are proud to offer the best prices'
        description2='without compromising on quality.'
      />
      <Reason
        symbol={<Chart />}
        title='Continuos Monitoring'
        description1='We will text you when your pet needs'
        description2='any type of treatment or vaccination.'
      />
      <Reason
        symbol={<Medicine />}
        title='Medical Support'
        description1='We have a huge amount of high'
        description2='quality medicine.'
      />
    </div>
  );
}
