import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dardachat | Restaurant libanais à Montreuil',
  description: 'Cuisine libanaise généreuse et chaleureuse au 58 avenue Marceau, Montreuil.',
  keywords: ['restaurant libanais Montreuil', 'Dardachat', 'cuisine libanaise', 'mezze Montreuil'],
  metadataBase: new URL('https://dardachat.fr'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
