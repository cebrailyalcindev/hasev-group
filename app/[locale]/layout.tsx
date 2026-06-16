import { ReactNode } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { notFound } from 'next/navigation';
import { usePathname } from 'next/navigation';
import '../globals.css';
import { seoConfigByLocale, locales } from '../../seo.config';
import Head from 'next/head';
import { Playfair_Display, Inter } from "next/font/google";
import fr from '../../locales/fr/common.json';
import en from '../../locales/en/common.json';
import nl from '../../locales/nl/common.json';
import de from '../../locales/de/common.json';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const translations: Record<string, any> = { fr, en, nl, de };

export const generateStaticParams = async () => {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'nl' }, { locale: 'de' }];
};

export const metadata = {
  title: 'Hasev Group',
  description: 'Import-export company based in Brussels',
};

export default async function LocaleLayout({ children, params }: { children: ReactNode, params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!['fr', 'en', 'nl', 'de'].includes(locale)) notFound();
  const localeSeo = locale as keyof typeof seoConfigByLocale;
  const seoConfig = seoConfigByLocale[localeSeo] || seoConfigByLocale.fr;
  const t = translations[locale] || fr;

  return (
    <>
      <html lang={locale} className={`${playfair.variable} ${inter.variable} h-full`}>
        <Head>
          {/* Title and description */}
          <title>{seoConfig.defaultTitle}</title>
          <meta name="description" content={seoConfig.description} />

          {/* Open Graph */}
          {seoConfig.openGraph && (
            <>
              <meta property="og:type" content={seoConfig.openGraph.type} />
              <meta property="og:locale" content={seoConfig.openGraph.locale} />
              <meta property="og:url" content={seoConfig.openGraph.url} />
              <meta property="og:site_name" content={seoConfig.openGraph.site_name} />
              {seoConfig.openGraph.images?.map((img: { url: string }, idx: number) => (
                <meta key={idx} property="og:image" content={img.url} />
              ))}
            </>
          )}

          {/* Alternate links */}
          {locales.map((lng) => (
            <link
              key={lng}
              rel="alternate"
              hrefLang={lng}
              href={`https://hasev-group.be/${lng}`}
            />
          ))}
          <link rel="alternate" hrefLang="x-default" href="https://hasev-group.be/fr" />
        </Head>
        <body className="min-h-screen h-full flex flex-col bg-white text-gray-800">
          <Header locale={locale} dict={t} />
          <main className="flex-1">
            {children}
          </main>
          <Footer locale={locale} dict={t} />
        </body>
      </html>
    </>
  );
}
