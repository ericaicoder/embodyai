'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, type Locale } from '@/i18n/config';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const getLocalizedPath = (newLocale: Locale): string => {
    // More robust path construction
    const pathSegments = pathname.split('/');
    const isCurrentLocaleInPath = locales.includes(pathSegments[1] as Locale);
    
    let pathWithoutLocale: string;
    if (isCurrentLocaleInPath) {
      // Remove the locale segment
      pathWithoutLocale = '/' + pathSegments.slice(2).join('/');
    } else {
      // No locale in path, use the full path
      pathWithoutLocale = pathname;
    }
    
    // Ensure we don't have double slashes
    pathWithoutLocale = pathWithoutLocale === '/' ? '' : pathWithoutLocale;
    
    // Construct the new path with the new locale
    return `/${newLocale}${pathWithoutLocale}`;
  };

  const getLanguageDisplay = (localeCode: Locale): string => {
    switch (localeCode) {
      case 'en':
        return 'EN';
      case 'ja':
        return 'JP';
      default:
        return 'EN'; // fallback to English
    }
  };

  const getLanguageName = (localeCode: Locale): string => {
    switch (localeCode) {
      case 'en':
        return 'English';
      case 'ja':
        return '日本語';
      default:
        return 'English'; // fallback to English
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
        aria-label="Switch language"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span>{getLanguageDisplay(locale)}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-32 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
          {locales.map((localeOption) => (
            <Link
              key={localeOption}
              href={getLocalizedPath(localeOption)}
              onClick={() => setIsOpen(false)}
              className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${
                locale === localeOption
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {getLanguageName(localeOption)}
            </Link>
          ))}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher; 