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
        <title>Shayan Heidary Portfolio</title>
        <link rel="icon" href="/icon.ico" sizes="any" />

      </head>
      <body>{children}</body>
    </html>
  );
}
