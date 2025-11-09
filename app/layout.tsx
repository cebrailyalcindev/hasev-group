import './globals.css';
import type { ReactNode } from 'react';
import "../node_modules/flag-icons/css/flag-icons.min.css";

export const metadata = {
  title: 'Hasev Group',
  description: 'Import-export company based in Brussels',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
