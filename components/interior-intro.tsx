import Image from "next/image";
import { ArrowDown, ArrowUpRight, GraduationCap, Network } from "lucide-react";
import type { Language } from "@/lib/site-content";

type Jump = { label: string; href: string };

export function InteriorIntro({ lang, eyebrow, title, description, visual, links }: {
  lang: Language; eyebrow: string; title: string; description: string;
  visual: "knowledge" | "identity" | "career"; links: Jump[];
}) {
  const tr = lang === "tr";
  return <header className="shell interior-intro">
    <div className="interior-intro-copy">
      <p className="eyebrow"><span className="tiny-star" aria-hidden="true">✳</span> {eyebrow}</p>
      <h1>{title}<span aria-hidden="true">.</span></h1>
      <p className="interior-description">{description}</p>
      <nav className="chapter-links" aria-label={tr ? "Bu sayfada" : "On this page"}>
        {links.map(link => <a key={link.href} href={link.href}>{link.label}{link.href.startsWith("#") ? <ArrowDown size={15} aria-hidden="true" /> : <ArrowUpRight size={15} aria-hidden="true" />}</a>)}
      </nav>
    </div>
    {visual === "career" ? <aside className="chapter-art career-art">
      <div className="career-symbols" aria-hidden="true"><GraduationCap size={44} strokeWidth={1.2} /><span>×</span><Network size={44} strokeWidth={1.2} /></div>
      <p>{tr ? "Bilgi, deneyimle\nbuluştuğunda." : "Where knowledge\nmeets experience."}</p>
      <span>{tr ? "AKADEMİ × UYGULAMA" : "ACADEMIA × PRACTICE"}</span>
    </aside> : <figure className={`chapter-art chapter-art-${visual}`}>
      <Image src={visual === "knowledge" ? "/images/knowledge-sculpture.png" : "/images/digital-identity-gold.png"} alt="" width={600} height={600} unoptimized />
      <figcaption>{tr ? "Kavramsal görsel" : "Conceptual artwork"}<span aria-hidden="true">HY</span></figcaption>
    </figure>}
  </header>;
}

export function InteriorOutro({ lang, title, description, href, label }: { lang: Language; title: string; description: string; href: string; label: string }) {
  return <section className="shell interior-outro">
    <div><p className="section-index">{lang === "tr" ? "KEŞFETMEYE DEVAM EDİN" : "CONTINUE EXPLORING"}</p><h2>{title}</h2></div>
    <div><p>{description}</p><a href={href}>{label}<ArrowUpRight size={23} aria-hidden="true" /></a></div>
  </section>;
}
