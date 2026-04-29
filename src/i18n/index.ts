import { es } from './es';
import { en } from './en';
import type { Translations } from './es';

export type Lang = 'es' | 'en';

const translations: Record<Lang, Translations> = { es, en };

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return 'es';
}

export function useTranslations(lang: Lang): Translations {
  return translations[lang];
}

/** Given a Spanish-default path, return the equivalent path for a given lang */
export function localePath(lang: Lang, path: string): string {
  if (lang === 'en') return `/en${path === '/' ? '' : path}`;
  return path;
}

/** Given the current URL, return the alternate-language URL */
export function alternatePath(currentLang: Lang, pathname: string): string {
  if (currentLang === 'es') {
    // Spanish is at root; English is at /en/...
    return `/en${pathname === '/' ? '' : pathname}`;
  } else {
    // Remove /en prefix to get Spanish path
    return pathname.replace(/^\/en/, '') || '/';
  }
}
