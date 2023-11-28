export function getRedirectedPathName(pathName: string, locale: string) {
  if (!pathName) return '/';
  const segments = pathName.split('/');
  segments[1] = locale;
  return segments.join('/');
}

export function getLinkRoute(pathName: string, route: string) {
  if (!pathName) return '/';
  return `${pathName.split('/').slice(0, 2).join('/')}${route}`;
}

export function isPathSameRoute(pathName: string, route: string) {
  if (!pathName) return false;
  if (pathName.length === 1) return route === '/';
  return pathName.substring(3) === route;
}

export function getLocaleName(locale: string) {
  switch (locale) {
    case 'en':
      return 'English';
    case 'ar':
      return 'العربية';
    default:
      return 'English';
  }
}
