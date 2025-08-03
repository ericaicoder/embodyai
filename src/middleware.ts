import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
  
  // When this is enabled, next-intl ensures that
  // all requested pathnames include the locale prefix
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  // Updated matcher pattern for Next.js 15 app router
  matcher: ['/', '/(ja|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
}; 