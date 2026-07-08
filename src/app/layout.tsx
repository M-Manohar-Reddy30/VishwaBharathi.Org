import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar/navbar";
import FloatingActions from "@/components/layout/floating-actions/floating-actions";
import Footer from "@/components/layout/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Vishwa Bharathi Kalanikethan and Education Society",
    template: "%s | Vishwa Bharathi",
  },
  description:
    "Official website of G. Chengareddy Memorial Special School for Mentally Challenged Children, Ballari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />

        {children}

        <Footer />

        <FloatingActions />
      </body>
    </html>
  );
}