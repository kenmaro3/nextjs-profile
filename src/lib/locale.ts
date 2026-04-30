export type Locale = 'ja' | 'en';

export function isLocale(value: string): value is Locale {
  return value === 'ja' || value === 'en';
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ja';
}

export function removeLocalePrefix(pathname: string) {
  if (pathname === '/en') {
    return '/';
  }

  if (pathname.startsWith('/en/')) {
    return pathname.replace(/^\/en/, '');
  }

  return pathname;
}

export function withLocale(pathname: string, locale: Locale) {
  const normalized = removeLocalePrefix(pathname);

  if (locale === 'ja') {
    return normalized;
  }

  return normalized === '/' ? '/en' : `/en${normalized}`;
}
