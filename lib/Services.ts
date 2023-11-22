import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const SERVICES_DIRECTORY = path.join(process.cwd(), 'static_info/services');

type ServiceId = {
  params: {
    id: string;
  };
};

export function getAllServiceIds(): ServiceId[] {
  const fileNames = fs.readdirSync(SERVICES_DIRECTORY);

  return fileNames.map((fileNames) => {
    return {
      params: {
        id: fileNames.replace(/\.md$/, ''),
      },
    };
  });
}

export function getSortedServiceData() {
  const fileNames = fs.readdirSync(SERVICES_DIRECTORY);

  const allServicesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(SERVICES_DIRECTORY, fileName);
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
