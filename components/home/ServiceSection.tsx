'use client';

import Service from './Service';
import { FadeLoader } from 'react-spinners';
import useSWR from 'swr';
import { fetcher } from '@/fetch/utils';

export type ServiceData = {
  id: string;
  data: {
    title: string;
    src: string;
  };
};

export default function ServiceSection() {
  const { data, isLoading, error } = useSWR('/api/service', fetcher);

  if (isLoading) return <FadeLoader color='rgba(40, 118, 232, 0.84)' />;
  if (error) return <div>Error while fetching information</div>;

  return data.map((serviceData: ServiceData) => (
    <Service
      src={serviceData.data.src}
      title={serviceData.data.title}
      key={serviceData.data.title.replaceAll(' ', '-').toLowerCase()}
    />
  ));
}
