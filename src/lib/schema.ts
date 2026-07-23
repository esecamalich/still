export const websiteSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Still",
  "url": baseUrl,
  "description": "A quiet Astro theme for thoughtful publishing, essays, photography, and personal websites.",
  "publisher": {
    "@type": "Organization",
    "name": "Make Stuff That Matters",
    "url": "https://makestuffthatmatters.com"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});


export const orgSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Make Stuff That Matters",
  "url": "https://makestuffthatmatters.com",
  "logo": {
    "@type": "ImageObject",
    "url": `${baseUrl}/images/favicon.png`
  },
  "sameAs": [
    "https://github.com/esecamalich",
    "https://www.instagram.com/camali.ch"
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


export const blogPostingSchema = (args: {
  headline: string;
  description: string;
  image: string[];
  datePublished: string;
  dateModified: string;
  inLanguage: string;
  url: string;
  authorName?: string;
  authorUrl?: string;
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
  "author": {
    "@type": "Person",
    "name": args.authorName || "Sergio Camalich",
    "url": args.authorUrl || "https://makestuffthatmatters.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Make Stuff That Matters",
    "url": "https://makestuffthatmatters.com",
    "logo": {
      "@type": "ImageObject",
      "url": `${new URL(args.url).origin}/images/favicon.png`
    }
  }
});


export const personSchema = (args: {
  name: string;
  jobTitle: string;
  description: string;
  imageUrl: string;
  aboutUrl: string;
  sameAs: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": args.name,
  "jobTitle": args.jobTitle,
  "description": args.description,
  "image": args.imageUrl,
  "url": args.aboutUrl,
  "sameAs": args.sameAs,
  "worksFor": {
    "@type": "Organization",
    "name": "Make Stuff That Matters",
    "url": "https://makestuffthatmatters.com"
  }
});