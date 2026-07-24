type SEOInput = {
  title?: string;
  description?: string;
  slug: string; // absolute ("https://...") or path ("/essays/example")
  image?: string;
  prefix?: string;
  baseUrl?: string; // pass Astro.site.origin from caller if available
  indexable?: boolean;
  type?: string;
};

export function generateSEO({
  title,
  description,
  slug,
  image,
  prefix = "",
  baseUrl,
  indexable = true,
  type = "website",
}: SEOInput) {
  const isDev = import.meta.env.DEV;

  const siteOrigin =
    baseUrl || (isDev ? "http://localhost:4321" : "https://still.makestuffthatmatters.com");

  const siteName = "Still";
  const defaultDescription =
    "A quiet Astro theme for thoughtful publishing.";

  const ABS = /^https?:\/\//i;

  let canonical: string;

  if (ABS.test(slug)) {
    canonical = slug;
  } else {
    const clean = (s: string) => s.replace(/^\/+|\/+$/g, "");
    const parts = [prefix, slug].filter(Boolean).map(clean);
    const pathname = "/" + parts.join("/");
    canonical = new URL(pathname, siteOrigin).toString();
  }

  const PROTO_REL = /^\/\//;
  const defaultLocal = "/images/still.jpg";

  const normalizeImage = (img?: string) => {
    if (!img) return new URL(defaultLocal, siteOrigin).toString();
    if (ABS.test(img)) return img;
    if (PROTO_REL.test(img)) return `https:${img}`;

    const localPath = img.startsWith("/") ? img : `/${img}`;
    return new URL(localPath, siteOrigin).toString();
  };

  const fullImage = normalizeImage(image);
  const robots = indexable ? "index, follow" : "noindex, nofollow";

  return {
    title: title ? `${title} | ${siteName}` : siteName,
    description: description || defaultDescription,
    canonical,
    image: fullImage,
    robots,
    type,
  };
}