import { useEffect } from "react";

export const SITE_ORIGIN = "https://attaxsolutions.com";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.png`;

export type BreadcrumbItem = { name: string; path: string };

export type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
  };
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  extraJsonLd?: Record<string, unknown>[];
};

function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (p === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${p}`;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  const selector = attr === "name" ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMeta(attr: "name" | "property", key: string) {
  document.querySelector(`meta[${attr}="${key}"]`)?.remove();
}

const PAGE_JSONLD_ID = "attax-page-jsonld";

export function applyPageSeo(config: PageSeoConfig) {
  const {
    title,
    description,
    path,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = "website",
    article,
    noindex,
    breadcrumbs,
    extraJsonLd = [],
  } = config;

  const url = absoluteUrl(path);
  document.title = title;

  setMeta("name", "description", description);

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);

  if (noindex) {
    setMeta("name", "robots", "noindex, nofollow");
  } else {
    setMeta(
      "name",
      "robots",
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    );
  }

  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:type", ogType);
  setMeta("property", "og:image", ogImage);
  setMeta("property", "og:image:alt", title);
  setMeta("property", "og:site_name", "ATTAX Solutions");
  setMeta("property", "og:locale", "en_US");

  if (ogType === "article" && article?.publishedTime) {
    setMeta("property", "article:published_time", article.publishedTime);
  } else {
    removeMeta("property", "article:published_time");
  }
  if (ogType === "article" && article?.modifiedTime) {
    setMeta("property", "article:modified_time", article.modifiedTime);
  } else {
    removeMeta("property", "article:modified_time");
  }
  if (ogType === "article" && article?.section) {
    setMeta("property", "article:section", article.section);
  } else {
    removeMeta("property", "article:section");
  }

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:site", "@attaxsolutions");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", ogImage);

  const webPageId = `${url}#webpage`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": webPageId,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      about: { "@id": `${SITE_ORIGIN}/#business` },
      inLanguage: "en-US",
    },
  ];

  if (breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: absoluteUrl(b.path),
      })),
    });
  }

  if (ogType === "article") {
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: title,
      description,
      image: ogImage,
      url,
      author: { "@type": "Organization", name: "ATTAX Solutions" },
      publisher: {
        "@type": "Organization",
        name: "ATTAX Solutions",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}/favicon-256x256.png`,
        },
      },
      ...(article?.publishedTime ? { datePublished: article.publishedTime } : {}),
      ...(article?.modifiedTime ? { dateModified: article.modifiedTime } : {}),
    });
  }

  graph.push(...extraJsonLd);

  let script = document.getElementById(PAGE_JSONLD_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = PAGE_JSONLD_ID;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
}

export function usePageSeo(config: PageSeoConfig) {
  useEffect(() => {
    applyPageSeo(config);
  }, [
    config.title,
    config.description,
    config.path,
    config.ogImage,
    config.ogType,
    config.noindex,
    JSON.stringify(config.breadcrumbs),
    JSON.stringify(config.article),
    JSON.stringify(config.extraJsonLd ?? []),
  ]);
}
