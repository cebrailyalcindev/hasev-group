import { MetadataRoute } from 'next';
import { locales } from '@/../../seo.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hasev-group.vercel.app';
  const routes = ['', '/about', '/contact', '/legal', '/services'];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1.0 : 0.8,
    }))
  );
}
