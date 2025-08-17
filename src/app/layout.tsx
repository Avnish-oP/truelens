import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { StructuredData } from "../components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Truelens International - Premium Eye Lenses | Precision in Every Vision",
  description: "Professional supplier of high-quality eye lenses combining medical-grade precision with style. Soft lenses, colored lenses, toric lenses with international shipping.",
  keywords: "eye lenses, contact lenses, colored lenses, toric lenses, medical grade lenses, vision correction, international shipping",
  authors: [{ name: "Truelens Internationals" }],
  openGraph: {
    title: "Truelens Internationals - Premium Eye Lenses",
    description: "Professional supplier of high-quality eye lenses combining medical-grade precision with style.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truelens Internationals - Premium Eye Lenses",
    description: "Professional supplier of high-quality eye lenses combining medical-grade precision with style.",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-inter`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
