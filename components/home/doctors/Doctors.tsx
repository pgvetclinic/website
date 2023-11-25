import DoctorCard from './DoctorCard';

export default function Doctors() {
  return (
    <div className='flex justify-center items-center gap-x-28 gap-y-8 flex-wrap'>
      <DoctorCard
        imageSrc='/images/lady.png'
        name='Dr. Sara Elsaied'
        role='Leading Diagnostic Doctor'
        experience='23 years of experience'
      />
      <DoctorCard
        imageSrc='/images/lady.png'
        name='Dr. Salma Emed'
        role='Diagnostic Doctor'
        experience='2 years of experience'
      />
    </div>
  );
}
