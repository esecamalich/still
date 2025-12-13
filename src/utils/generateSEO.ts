type SEOInput = {
  title?: string;
  description?: string;
  slug: string;          // absolute ("https://...") or path ("/courses/a1" or "courses/a1")
  image?: string;
  prefix?: string;
  baseUrl?: string;      // pass Astro.site.origin from the caller if available
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

  // Never touch Astro.* here. Rely on a passed-in baseUrl, or fall back.
  const siteOrigin =
    baseUrl || (isDev ? "http://localhost:4321" : "https://camali.ch");

  // Canonical: if slug is absolute, use it as-is; otherwise join to siteOrigin
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

  // Image normalization → absolute URL
  const PROTO_REL = /^\/\//;
  const defaultLocal = "/images/courses-b1.webp";
  const normalizeImage = (img?: string) => {
    if (!img) return new URL(defaultLocal, siteOrigin).toString();
    if (ABS.test(img)) return img;
    if (PROTO_REL.test(img)) return `https:${img}`;
    if (/^\/?images\.ctfassets\.net\//i.test(img)) {
      return `https://${img.replace(/^\/+/, "")}`;
    }
    const localPath = img.startsWith("/") ? img : `/${img}`;
    return new URL(localPath, siteOrigin).toString();
  };

  const fullImage = normalizeImage(image);
  const robots = indexable ? "index, follow" : "noindex, nofollow";

  return {
    title: title ? `${title} | Sergio Camalich` : "Sergio Camalich",
    description:
      description ||
      "Chief Maker of Stuff",
    canonical,
    image: fullImage,
    robots,
    type,
  };
}
