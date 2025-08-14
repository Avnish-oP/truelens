import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

export function generateSEOMetadata({
  title = "Truelens Internationals - Premium Eye Lenses",
  description = "Professional supplier of high-quality eye lenses combining medical-grade precision with style. Soft lenses, colored lenses, toric lenses with international shipping.",
  keywords = [
    "eye lenses",
    "contact lenses", 
    "colored lenses",
    "toric lenses",
    "medical grade lenses",
    "vision correction",
    "international shipping",
    "premium lenses",
    "FDA approved lenses",
    "soft contact lenses"
  ],
  canonical,
  ogImage = "/og-image.jpg"
}: SEOProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://truelens-internationals.com";
  
  return {
    title: {
      default: title,
      template: `%s | ${title}`
    },
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Truelens Internationals" }],
    creator: "Truelens Internationals",
    publisher: "Truelens Internationals",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonical || "/",
    },
    openGraph: {
      title,
      description,
      url: canonical || "/",
      siteName: "Truelens Internationals",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_ID,
      yandex: process.env.YANDEX_VERIFICATION_ID,
      yahoo: process.env.YAHOO_VERIFICATION_ID,
    },
  };
}
