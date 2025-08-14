import Script from 'next/script';

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Truelens Internationals",
    description: "Professional supplier of high-quality eye lenses combining medical-grade precision with style.",
    url: "https://truelens-internationals.com",
    logo: "https://truelens-internationals.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      email: "info@truelens-intl.com",
      contactType: "Customer Service"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Vision Street",
      addressLocality: "Tech City",
      addressRegion: "TC",
      postalCode: "12345",
      addressCountry: "US"
    },
    sameAs: [
      "https://facebook.com/truelens",
      "https://twitter.com/truelens",
      "https://linkedin.com/company/truelens",
      "https://instagram.com/truelens"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    name: "Eye Lenses Collection",
    description: "Premium collection of medical-grade eye lenses including soft lenses, colored lenses, toric lenses, and multifocal lenses.",
    brand: {
      "@type": "Brand",
      name: "Truelens Internationals"
    },
    manufacturer: {
      "@type": "Organization",
      name: "Truelens Internationals"
    },
    hasVariant: [
      {
        "@type": "Product",
        name: "Soft Contact Lenses",
        description: "Daily, weekly, and monthly soft lenses for ultimate comfort and clarity."
      },
      {
        "@type": "Product", 
        name: "Colored Lenses",
        description: "Enhance your natural beauty with our range of safe, FDA-approved colored lenses."
      },
      {
        "@type": "Product",
        name: "Toric Lenses", 
        description: "Specialized lenses for astigmatism correction with superior stability."
      },
      {
        "@type": "Product",
        name: "Multifocal Lenses",
        description: "Progressive lenses for presbyopia with seamless vision at all distances."
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Truelens Internationals",
    url: "https://truelens-internationals.com",
    description: "Professional supplier of high-quality eye lenses combining medical-grade precision with style.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://truelens-internationals.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  );
}
