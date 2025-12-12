import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Shelfie - The Cycle of Smart Cooking",
  description: "The intelligent kitchen co-pilot that turns chaotic inventory into delicious dinner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${manrope.variable} ${outfit.variable} bg-cream text-text-main font-body antialiased overflow-x-hidden selection:bg-tomato/20 selection:text-tomato`}
      >
        <div className="bg-noise"></div>
        {children}
      </body>
    </html>
  );
}
