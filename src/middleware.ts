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
  // Match all pathnames except for those starting with:
  // - /api (API routes)
  // - /trpc (tRPC routes)  
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - files with extensions (e.g. favicon.ico)
  matcher: [
    '/',
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
    '/kidou/releases/:path*'
  ]
};