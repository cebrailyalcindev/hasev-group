import { ReactNode } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { notFound } from 'next/navigation';
import { usePathname } from 'next/navigation';
import '../globals.css';

export const generateStaticParams = async () => {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'nl' }, { locale: 'de' }];
};

export default async function LocaleLayout({ children, params }: { children: ReactNode, params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!['fr','en','nl','de'].includes(locale)) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
        <Header locale={locale} />
        <main className="flex-1 pt-20 md:pt-24">
          {children}
        </main>
        <Footer />
    </div>
  );
}
