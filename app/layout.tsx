import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <head>
        <title>Shayan Heidary</title>
        <meta
          name="description"
          content="Shayan Heidary - Software Engineer specializing in frontend and backend development using React, Next.js, Vue, and more. Discover my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Shayan Heidary, software engineer, frontend developer, backend developer, React, Next.js, Vue, web developer"
        />
        <meta property="og:title" content="Shayan Heidary Portfolio" />
        <meta
          property="og:description"
          content="Software Engineer specializing in frontend and backend development. Explore my projects and skills in React, Next.js, Vue, and more."
        />
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
