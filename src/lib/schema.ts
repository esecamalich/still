export const websiteSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Learn Portuguese with Sofia",
  "url": baseUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

export const orgSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Learn Portuguese with Sofia",
  "url": baseUrl,
  "logo": { "@type": "ImageObject", "url": `${baseUrl}/images/favicon.png` },
  "sameAs": [
    "https://www.youtube.com/@learnportuguesewithsofia",
    "https://www.instagram.com/learnportuguesewithsofia"
  ]
});

export const breadcrumbsSchema = (items: Array<{name:string; url:string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": it.name,
    "item": it.url
  }))
});

export const courseSchema = (args: {
  name: string; description: string; inLanguage: string; baseUrl: string; pageUrl: string;
  instance?: { name: string; startDate: string; endDate: string; joinUrl: string; price: number; currency: string; availability: "InStock"|"PreOrder"|"SoldOut"; validFrom?: string; };
}) => {
  const s:any = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": args.name,
    "description": args.description,
    "inLanguage": args.inLanguage,
    "provider": { "@type": "Organization", "name": "Learn Portuguese with Sofia", "sameAs": args.baseUrl }
  };
  if (args.instance) {
    s.hasCourseInstance = [{
      "@type": "CourseInstance",
      "name": args.instance.name,
      "courseMode": "online",
      "startDate": args.instance.startDate,
      "endDate": args.instance.endDate,
      "location": { "@type": "VirtualLocation", "url": args.instance.joinUrl },
      "offers": {
        "@type": "Offer",
        "url": args.pageUrl,
        "price": String(args.instance.price),
        "priceCurrency": args.instance.currency,
        "availability": `https://schema.org/${args.instance.availability}`,
        ...(args.instance.validFrom ? { "validFrom": args.instance.validFrom } : {}),
        "seller": { "@type": "Organization", "name": "Learn Portuguese with Sofia" }
      }
    }];
  }
  return s;
};

export const productSchema = (args: {
  name: string; description: string; image: string[]; pageUrl: string; sku?: string;
  offers: Array<{ price: number; currency: string; availability: "InStock"|"PreOrder"|"SoldOut"|"LimitedAvailability"; priceValidUntil?: string; category?: string; }>;
  rating?: { value: number; count: number };
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": args.name,
  ...(args.sku ? { "sku": args.sku } : {}),
  "brand": { "@type": "Organization", "name": "Learn Portuguese with Sofia" },
  "image": args.image,
  "description": args.description,
  ...(args.rating ? { "aggregateRating": { "@type": "AggregateRating", "ratingValue": String(args.rating.value), "reviewCount": String(args.rating.count) } } : {}),
  "offers": args.offers.map(o => ({
    "@type": "Offer",
    "url": args.pageUrl,
    "price": String(o.price),
    "priceCurrency": o.currency,
    "availability": `https://schema.org/${o.availability}`,
    ...(o.priceValidUntil ? { "priceValidUntil": o.priceValidUntil } : {}),
    ...(o.category ? { "category": o.category } : {})
  }))
});

export const faqSchema = (qas: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": qas.map(({q, a}) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
});

export const blogPostingSchema = (args: {
  headline: string; description: string; image: string[]; datePublished: string; dateModified: string; inLanguage: string; url: string;
  authorName: string; authorUrl: string; publisherLogoUrl: string; publisherName: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": args.headline,
  "description": args.description,
  "image": args.image,
  "datePublished": args.datePublished,
  "dateModified": args.dateModified,
  "inLanguage": args.inLanguage,
  "mainEntityOfPage": args.url,
  "isAccessibleForFree": true,
  "author": { "@type": "Person", "name": args.authorName, "url": args.authorUrl },
  "publisher": { "@type": "Organization", "name": args.publisherName, "logo": { "@type": "ImageObject", "url": args.publisherLogoUrl } }
});

export const personSchema = (args: {
  name: string; jobTitle: string; description: string; imageUrl: string; aboutUrl: string; sameAs: string[]; orgUrl: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": args.name,
  "jobTitle": args.jobTitle,
  "description": args.description,
  "image": args.imageUrl,
  "url": args.aboutUrl,
  "sameAs": args.sameAs,
  "affiliation": { "@type": "Organization", "name": "Learn Portuguese with Sofia", "url": args.orgUrl }
});