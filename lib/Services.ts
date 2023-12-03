import { Locale } from '@/i18n-config';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const getServicesDirectory = (lang: Locale) =>
  path.join(process.cwd(), 'markdown', lang, 'services');

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
