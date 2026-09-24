"use client";

import { usePathname } from "next/navigation";
import type { Language } from "@/lib/site-content";

const labels = {
  en: { research: "Research", publications: "Publications", projects: "Projects", experience: "Experience", about: "About", contact: "Contact", menu: "Menu" },
  tr: { research: "Araştırma", publications: "Yayınlar", projects: "Projeler", experience: "Deneyim", about: "Hakkında", contact: "İletişim", menu: "Menü" },
};

export function SiteHeader({ lang }: { lang: Language }) {
  const t = labels[lang];
  const pathname = usePathname();
  const otherLang = lang === "tr" ? "en" : "tr";
  const alternatePath = pathname.replace(/^\/(en|tr)(?=\/|$)/, `/${otherLang}`);
  const links = [
    [t.research, `/${lang}#research`],
    [t.publications, `/${lang}/publications`],
    [t.projects, `/${lang}/projects`],
    [t.experience, `/${lang}/experience`],
    [t.about, `/${lang}/about`],
    [t.contact, `/${lang}/contact`],
  ];
  return (
    <header className="site-header">
      <a href={`/${lang}`} className="wordmark" aria-label={lang === "tr" ? "Dr. Hakan Yıldırım ana sayfa" : "Dr. Hakan Yıldırım home"}>
        <span>HY</span><strong>Dr. Hakan Yıldırım</strong>
      </a>
      <nav className="desktop-nav" aria-label={t.menu}>
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="language-link" href={alternatePath}>{lang === "tr" ? "EN" : "TR"}</a>
        <details className="mobile-menu">
          <summary>{t.menu}</summary>
          <nav aria-label={t.menu}>
            {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
