// app/layout.tsx
import { Nunito } from 'next/font/google';
import '@/app/globals.css';
import GlobalBackground from '@/components/GlobalLayout';
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'Shayan Heidary',
  description:
    'Shayan Heidary - Software Engineer specializing in frontend and backend development.',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <>
          <GlobalBackground />
          {children}
        </>
      </body>
    </html>
  );
}
