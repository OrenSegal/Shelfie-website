import type { Metadata } from "next";
import { Manrope, Outfit, Caveat } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: 'swap',
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shelfie - Your Kitchen's Second Brain",
  description: "Stop wasting food. Start eating better.",
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
      {/* Added suppressHydrationWarning here */}
      <body
        suppressHydrationWarning
        className={`${manrope.variable} ${outfit.variable} ${caveat.variable} bg-cream text-text-main font-body antialiased overflow-x-hidden selection:bg-tomato/20 selection:text-tomato`}
      >
        <div className="bg-noise"></div>
        {children}
      </body>
    </html>
  );
}