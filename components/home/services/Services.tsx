'use client';

import ServiceCard from './ServiceCard';
import { FadeLoader } from 'react-spinners';
import useSWR from 'swr';
import { fetcher } from '@/fetch/utils';
import { Locale } from '@/i18n-config';
import { reverseLayout } from '@/lib/Internatinalization';

export type ServiceData = {
  id: string;
  data: {
    title: string;
    src: string;
  };
};

type ServicesProps = {
  lang: Locale;
};

export default function Services({ lang }: ServicesProps) {
  const { data, isLoading, error } = useSWR('/api/service', fetcher);

  if (isLoading) return <FadeLoader color='rgba(40, 118, 232, 0.84)' />;
  if (error)
    return (
      <div>
        {reverseLayout(lang)
          ? 'حدث خطأ أثناء جلب المعلومات'
          : 'Error while fetching information'}
      </div>
    );

  return data.map((serviceData: ServiceData) => (
    <ServiceCard
      src={serviceData.data.src}
      title={serviceData.data.title}
      key={serviceData.data.title.replaceAll(' ', '-').toLowerCase()}
    />
  ));
}
