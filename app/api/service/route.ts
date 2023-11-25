import { getSortedServiceData } from '@/lib/Services';
import { NextResponse } from 'next/server';

export async function GET() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const allServicesData = getSortedServiceData();
  return NextResponse.json(allServicesData);
}
