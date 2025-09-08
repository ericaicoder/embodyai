import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const baseUrl = 'https://embodyai.co.jp';

// Define all the pages/routes in the application with their metadata
const routes = [
  {
    path: '', // Home page
    priority: 1.0,
    changeFrequency: 'weekly' as const,
  },
  {
    path: '/kidou',
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  },
  {
    path: '/kidou/releases',
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  },
  {
    path: '/about',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/contact',
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/privacy-policy',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
  {
    path: '/terms-of-service',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
  {
    path: '/signin',
    priority: 0.4,
    changeFrequency: 'monthly' as const,
  },
  {
    path: '/signup',
    priority: 0.4,
    changeFrequency: 'monthly' as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      // All locales now have their own path: /en, /ja
      const url = `${baseUrl}/${locale}${route.path}`;
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: locales.reduce((acc, altLocale) => {
            const altUrl = `${baseUrl}/${altLocale}${route.path}`;
            acc[altLocale] = altUrl;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });
  });

  return sitemapEntries;
}