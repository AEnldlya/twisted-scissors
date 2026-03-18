import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Twisted Scissors | Premium Barbershop Hanover NH",
  description: "Premium barbershop in Hanover, NH. Expert haircuts, beard grooming, and traditional barbering services by Brooke with 20+ years experience. Book your appointment today.",
  keywords: ["barbershop", "Hanover NH", "haircut", "beard trim", "men's grooming", "Twisted Scissors", "Brooke"],
  openGraph: {
    title: "Twisted Scissors | Premium Barbershop Hanover NH",
    description: "Expert haircuts and beard grooming in Hanover, NH. 20+ years experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&f[]=zodiak@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F6F3] text-[#1a1a1a] antialiased overflow-x-hidden">
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
