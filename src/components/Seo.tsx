import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonicalPath: string;
};

const SITE_URL = "https://www.sunlifehousingcorp.com";

const Seo: React.FC<SeoProps> = ({ title, description, canonicalPath }) => {
  useEffect(() => {
    const previousTitle = document.title;
    const changedElements: Array<{
      element: HTMLMetaElement | HTMLLinkElement;
      previousContent: string | null;
      created: boolean;
    }> = [];

    const setMeta = (attribute: "name" | "property", key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`,
      );
      const created = !element;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      changedElements.push({
        element,
        previousContent: element.getAttribute("content"),
        created,
      });
      element.setAttribute("content", content);
    };

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonicalCreated = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    changedElements.push({
      element: canonical,
      previousContent: canonical.getAttribute("href"),
      created: canonicalCreated,
    });

    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    document.title = title;
    canonical.setAttribute("href", canonicalUrl);
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);

    return () => {
      document.title = previousTitle;
      changedElements.forEach(({ element, previousContent, created }) => {
        if (created) {
          element.remove();
          return;
        }

        const contentAttribute = element instanceof HTMLLinkElement ? "href" : "content";
        if (previousContent === null) {
          element.removeAttribute(contentAttribute);
        } else {
          element.setAttribute(contentAttribute, previousContent);
        }
      });
    };
  }, [canonicalPath, description, title]);

  return null;
};

export default Seo;
