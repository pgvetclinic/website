import { Locale } from '@/i18n-config';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const SERVICES_DIR_EN = path.resolve('./static-info/en/services');
const SERVICES_DIR_AR = path.resolve('./static-info/ar/services');

function getServicesDirectory(lang: Locale): string {
  if (lang === 'en') {
    return SERVICES_DIR_EN;
  }
  return SERVICES_DIR_AR;
}

type ServiceId = {
  params: {
    id: string;
  };
};

export function getAllServiceIds(lang: Locale): ServiceId[] {
  const fileNames = fs.readdirSync(getServicesDirectory(lang));

  return fileNames.map((fileNames) => {
    return {
      params: {
        id: fileNames.replace(/\.md$/, ''),
      },
    };
  });
}

export function getSortedServiceData(lang: Locale) {
  const servicesDir = getServicesDirectory(lang);
  console.log('Using dir:', servicesDir);
  const fileNames = fs.readdirSync(servicesDir);

  const allServicesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(servicesDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data } = matter(fileContents);

    return {
      id,
      data,
    };
  });

  return allServicesData.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}
