import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Receptionist SaaS',
  description: 'Multi-tenant AI receptionist platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}