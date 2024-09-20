import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Parallax from "./components/parallax";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Othniel van de Pol",
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Doppio+One&amp;display=swap"
        />
        <link
          rel="stylesheet"
          href="assets/css/Navbar-Centered-Brand-Dark-icons.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bevan:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div id="main-background" style={{ backgroundColor: "#2B1B1B" }}>
          <Parallax />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
