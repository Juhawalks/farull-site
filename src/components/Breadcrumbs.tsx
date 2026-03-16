interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = "https://farull.se";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href ? `${baseUrl}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Brödsmulor" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm font-body text-foreground/50">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <span aria-current="page" className="text-foreground/70">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
