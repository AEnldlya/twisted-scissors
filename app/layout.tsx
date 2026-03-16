import type { Metadata } from "next";
import { Oswald, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Twisted Scissors | Premium Barbershop Hanover NH",
  description: "Premium barbershop in Hanover, NH. Expert haircuts, beard grooming, and traditional barbering services. Book your appointment today.",
  keywords: ["barbershop", "Hanover NH", "haircut", "beard trim", "men's grooming", "Twisted Scissors"],
};

import PageTransition from "@/components/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#F5F5F0] text-[#1A1A2E] antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
