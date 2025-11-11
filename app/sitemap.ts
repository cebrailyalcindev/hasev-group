import { MetadataRoute } from 'next';
import { locales } from '@/../../seo.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hasev-group.be';
  const routes = ['', '/about', '/contact'];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1.0 : 0.8,
    }))
  );
}
