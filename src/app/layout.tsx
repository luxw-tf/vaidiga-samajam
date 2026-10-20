import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vedam Foundation | Vedic Gurukulam, Seva & Dharma",
  description:
    "Sri Uttara Indraprastha Vaidiga Samajam - A traditional Vedic Gurukulam preserving India's timeless knowledge systems through authentic Guru-Shishya parampara, Gowshala Seva, and Annadanam.",
  keywords: [
    "Vedam Foundation",
    "Vedic Gurukulam",
    "Vaidiga Samajam",
    "Shukla Yajur Veda",
    "Krishna Yajur Veda",
    "Gowshala",
    "Annadanam",
    "Dharma",
    "Sanskrit Education",
  ],
  icons: {
    icon: "/vedam.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
