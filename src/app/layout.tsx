import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daphne Is The Zodiac Killer',
  description: 'I am not the Zodiac Killer...'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-daphne-red">{children}</body>
    </html>
  );
}
