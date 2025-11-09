import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import "../node_modules/flag-icons/css/flag-icons.min.css";

export const metadata: Metadata = {
  title: 'Hasev Group - Import Export à Bruxelles',
  description:
    "Hasev Group est une société d'import-export basée à Bruxelles, spécialisée dans les échanges internationaux de produits de qualité.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
        {children}
    </html>
  );
}
