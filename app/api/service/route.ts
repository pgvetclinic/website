import { getSortedServiceData } from '@/lib/Services';
import { Locale, i18n } from '@/i18n-config';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get('lang') as Locale;

  console.log('lang', lang);

  if (!lang || !i18n.locales.includes(lang)) {
    return NextResponse.json(`'${lang}' is not a valid locale.`, {
      status: 400,
    });
  }

  const allServicesData = getSortedServiceData(lang);
  return Response.json(allServicesData);
}
