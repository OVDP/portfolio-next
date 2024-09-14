import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
    <html
      lang="en"
      data-bs-theme="dark"
      style={{
        backgroundColor: "#1f1d1d",
      }}
    >
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
        <div
          id="main-background"
          className=""
          style={{
            background:
              'url("assets/img/openart-make-an-minimalistic-background-of-a-red-horizon-using-the-colors-red-yellow-and-orange_k32-AOTo_upscaled.png") center / contain',
            "--bs-body-color": "#212529",
            "--bs-dark": "var(--bs-body-bg)",
            "--bs-dark-rgb": "255,255,255",
            "--bs-light": "#212529",
            "--bs-light-rgb": "33,37,41",
            "background-attachment": "fixed",
            "background-size": "cover",
            backgroundColor: "#1f1d1d",
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
