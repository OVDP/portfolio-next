import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OVDP",
  description: "The portfolio of Othniel van de Pol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="assets/bootstrap/js/bootstrap.min.js" />
      <Script src="src/app/scripts/bootjs.js" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
