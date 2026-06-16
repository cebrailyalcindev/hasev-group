import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  locale: string;
  dict: any;
  children: ReactNode;
}

export default function PageLayout({ locale, dict, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
