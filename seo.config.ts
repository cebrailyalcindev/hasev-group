const baseUrl = 'https://hasev-group.be';

export const locales = ['fr', 'en', 'nl', 'de'] as const;
export type Locale = typeof locales[number];

export const seoConfigByLocale: Record<Locale, any> = {
  fr: {
    titleTemplate: '%s | Hasev Group',
    defaultTitle: 'Hasev Group - Import Export à Bruxelles',
    description:
      "Hasev Group est une société d'import-export basée à Bruxelles, spécialisée dans les échanges internationaux de produits de qualité.",
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url: `${baseUrl}/fr`,
      site_name: 'Hasev Group',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Hasev Group',
        },
      ],
    },
  },
  en: {
    titleTemplate: '%s | Hasev Group',
    defaultTitle: 'Hasev Group - Import Export in Brussels',
    description:
      'Hasev Group is an import-export company based in Brussels, specialized in high-quality international trade.',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${baseUrl}/en`,
      site_name: 'Hasev Group',
    },
  },
  nl: {
    titleTemplate: '%s | Hasev Group',
    defaultTitle: 'Hasev Group - Import Export in Brussel',
    description:
      'Hasev Group is een import-exportbedrijf gevestigd in Brussel, gespecialiseerd in internationale handel van hoge kwaliteit.',
    openGraph: {
      type: 'website',
      locale: 'nl_BE',
      url: `${baseUrl}/nl`,
      site_name: 'Hasev Group',
    },
  },
  de: {
    titleTemplate: '%s | Hasev Group',
    defaultTitle: 'Hasev Group - Import Export in Brüssel',
    description:
      'Hasev Group ist ein Import-Export-Unternehmen mit Sitz in Brüssel, spezialisiert auf internationalen Handel mit Qualitätsprodukten.',
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      url: `${baseUrl}/de`,
      site_name: 'Hasev Group',
    },
  },
};
