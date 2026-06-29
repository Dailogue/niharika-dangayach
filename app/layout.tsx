import type { Metadata } from "next";
import { Fraunces, Parisienne } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niharika Dangayach — Virtual Makeover Studio",
  description:
    "Take your space from meh to marvellous. Virtual interior makeovers and design consultations with Niharika Dangayach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${parisienne.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
