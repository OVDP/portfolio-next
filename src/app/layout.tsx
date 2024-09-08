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
    <html lang="en" data-bs-theme="dark">
      <head>
        <Script src="assets/bootstrap/js/bootstrap.min.js" />
        <Script src="scripts/bootjs.js" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Doppio+One&amp;display=swap"
        />
        <link
          rel="stylesheet"
          href="assets/css/Navbar-Centered-Brand-Dark-icons.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
