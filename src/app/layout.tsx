import type { Metadata } from "next";
import { Manrope, Playfair_Display, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["600", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "DA🌻 — Design with a point of view",
  description:
    "A small, sharp design and development studio for ambitious digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} ${dmMono.variable} antialiased`}
    >
      <body>
        <div className="noise" aria-hidden="true"></div>
        <CursorGlow />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
