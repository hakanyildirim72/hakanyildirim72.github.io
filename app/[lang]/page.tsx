import { ArrowDown, ArrowUpRight, BookOpen, Download, FileText, Globe2 } from "lucide-react";
import Image from "next/image";
import { TopicIcon } from "@/components/topic-icon";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { profile, projects, publications, researchAreas, type Language } from "@/lib/site-content";
import type { Metadata } from "next";

export function generateStaticParams() { return [{ lang: "en" }, { lang: "tr" }]; }
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> { const { lang } = await params; const tr = lang === "tr"; return { title: { absolute: tr ? "Dr. Hakan Yıldırım — Akademik Portföy" : "Dr. Hakan Yıldırım — Academic Portfolio" }, description: tr ? "Siber güvenlik, elektrik-elektronik mühendisliği ve teknoloji projeleri." : "Cybersecurity, electrical and electronic engineering, and technology projects.", alternates: { canonical: `/${tr ? "tr" : "en"}`, languages: { en: "/en", tr: "/tr" } } }; }

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (rawLang !== "en" && rawLang !== "tr") notFound();
  const lang = rawLang as Language;
  const isTr = lang === "tr";
  const selectedPublications = publications.filter((item) => item.selected).slice(0, 3);
  const selectedProjects = projects.filter((item) => item.selected).slice(0, 3);
  const researchLinks = ["publications#dual-key-2026", "publications#digital-evidence-2026", "publications#digital-risk-2026", "projects"];

  return (
    <PageShell lang={lang}>
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="tiny-star" aria-hidden="true">✳</span> {isTr ? "DR. · AKADEMİK PORTFÖY" : "DR. · ACADEMIC PORTFOLIO"}</p>
            <h1 className="hero-name"><span className="sr-only">Dr. </span>Hakan<br />Yıldırım<span>.</span></h1>
            <p className="hero-statement">{isTr ? "Güvenli sistemler için araştırma ve mühendislik." : "Research and engineering for secure systems."}</p>
            <p className="hero-intro">{isTr ? "Siber güvenlik, dijital deliller, teknoloji hukuku ve büyük ölçekli bilgi sistemleri üzerine akademik araştırma ile uygulama deneyimi." : "Academic research and applied experience in cybersecurity, digital evidence, technology law, and large-scale information systems."}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={"/" + lang + "/publications"}>{isTr ? "Yayınları incele" : "Explore publications"} <ArrowUpRight size={17} /></a>
              {profile.cvPath ? <a className="button button-secondary" href={profile.cvPath} download>{isTr ? "CV’yi indir" : "Download CV"} <Download size={16} /></a> : <span className="button button-muted" aria-disabled="true">{isTr ? "CV hazırlanıyor" : "CV in preparation"} <Download size={16} /></span>}
            </div>
            <div className="hero-bottom"><div className="social-circles"><a href={profile.links.find((link) => link.label === "LinkedIn")?.href} aria-label="LinkedIn">in</a><a href={profile.links.find((link) => link.label === "ORCID")?.href} aria-label="ORCID">iD</a><a href={`/${lang}/contact`} aria-label={isTr ? "İletişim" : "Contact"}>@</a></div><a className="scroll-link" href="#research">{isTr ? "Araştırmayı keşfet" : "Explore the research"}<ArrowDown size={17} /></a></div>
          </div>
          <figure className="hero-visual">
            <div className="hero-art"><Image src="/images/digital-identity-gold.png" alt={isTr ? "Sarı zemin üzerinde, dijital kimliği temsil eden siyah metal parmak izi heykeli; kavramsal görsel" : "Black metal fingerprint sculpture on a golden background, a conceptual illustration of digital identity"} width={1024} height={1280} priority unoptimized /><div className="hero-visual-label"><span>{isTr ? "ARAŞTIRMA × UYGULAMA" : "RESEARCH × PRACTICE"}</span><strong>{isTr ? "Güvenin\nmimarisi." : "Trust,\nby design."}</strong></div></div>
            <span className="globe-badge" aria-hidden="true"><Globe2 size={34} strokeWidth={1.2} /></span>
            <a className="art-link" href={`/${lang}/about`} aria-label={isTr ? "Dr. Hakan Yıldırım hakkında" : "About Dr. Hakan Yıldırım"}><ArrowUpRight size={34} strokeWidth={1.4} /></a>
            <figcaption><span>{isTr ? "Dijital kimlik / Kavramsal görsel" : "Digital identity / Conceptual artwork"}</span><span>01 — HY</span></figcaption>
          </figure>
        </section>

        <section id="research" className="research-band">
          <div className="research-marquee" aria-hidden="true">{isTr ? "araştırma.araştırma.araştırma." : "research.research.research."}</div>
          <div className="shell research-grid">
            <div className="research-heading"><p className="section-index">01 / {isTr ? "ODAK" : "FOCUS"}</p><h2>{isTr ? "Bilgiden\ngüvene." : "From knowledge\nto trust."}</h2><p>{profile.title[lang]}</p><Image className="research-art" src="/images/knowledge-sculpture.png" alt={isTr ? "Bilgi ve araştırmayı temsil eden, yelpaze biçiminde açılmış soyut beyaz kitap heykeli" : "Abstract white book sculpture with fanned pages representing knowledge and research"} width={1024} height={1024} unoptimized /><p className="art-caption">{isTr ? "Araştırma alanları" : "Research interests"}</p></div>
            <div className="interest-list">{researchAreas.map((area, index) => <article key={area.id}><div className="interest-top"><span className="topic-icon"><TopicIcon topic={area.id} /></span><span className="interest-number">0{index + 1}</span></div><div><h3>{area.title[lang]}</h3><p>{area.description[lang]}</p><a href={`/${lang}/${researchLinks[index]}`}>{isTr ? "İlgili çalışmalar" : "Related work"}<ArrowUpRight size={16} aria-hidden="true" /></a></div></article>)}</div>
          </div>
        </section>

        {(selectedPublications.length > 0 || selectedProjects.length > 0) && <section className="shell selected-work">
          <div className="section-heading"><div><p className="section-index">02 / {isTr ? "YAYINLAR VE PROJELER" : "PUBLICATIONS & PROJECTS"}</p><h2>{isTr ? "seçili çalışmalar." : "selected work."}</h2></div><a className="text-link" href={`/${lang}/publications`}>{isTr ? "Tüm yayınlar" : "All publications"}<ArrowUpRight size={17} /></a></div>
          <div className="work-grid">
            {selectedPublications.map((item) => <article key={item.id} className="work-card">
              <div className="work-card-top"><span className="work-symbol">{item.type === "book" ? <BookOpen size={24} strokeWidth={1.5} /> : <FileText size={24} strokeWidth={1.5} />}</span><span>{item.year} · {item.type === "book" ? (isTr ? "Kitap" : "Book") : (isTr ? "Makale" : "Article")}</span></div>
              <h3>{item.title}</h3>
              <p className="work-venue">{item.venue}</p>
              {item.summary && <div className="work-overview"><span className="overview-kicker">{item.summaryKind === "topic" ? (isTr ? "Konu tanıtımı" : "Topic overview") : (isTr ? "Özgün özet" : "Editorial summary")}</span><p className="work-summary">{item.summary[lang]}</p></div>}
              <a href={`/${lang}/publications#${item.id}`}>{isTr ? "Yayını gör" : "View publication"} ↗</a>
            </article>)}
            {selectedProjects.map((item) => <article key={item.slug} className="work-card work-card-project"><div className="work-card-top"><span className="work-symbol"><TopicIcon topic={item.slug} /></span><span>{item.period} · {item.kind === "academic" ? (isTr ? "Akademik" : "Academic") : (isTr ? "Sektör" : "Industry")}</span></div><h3>{item.title[lang]}</h3><p>{item.summary[lang]}</p><a href={"/" + lang + "/projects/" + item.slug}>{isTr ? "Projeyi gör" : "View project"} ↗</a></article>)}
          </div>
        </section>}

        <section className="shell archive-cta">
          <div><p className="section-index">03 / {isTr ? "ARŞİV" : "ARCHIVE"}</p><h2>{isTr ? "Akademik ve uygulamalı çalışmalar" : "Academic and applied work"}</h2></div>
          <p>{isTr ? "Makaleler, kitaplar ve uygulamalı projeler; güvenlik, yönetişim ve teknolojinin kesişimindeki çalışmaları bir araya getirir." : "Articles, books, and applied projects bring together work at the intersection of security, governance, and technology."}</p>
          <div><a href={"/" + lang + "/publications"}>{isTr ? "Yayınlar" : "Publications"} <ArrowUpRight size={17} /></a><a href={"/" + lang + "/projects"}>{isTr ? "Projeler" : "Projects"} <ArrowUpRight size={17} /></a></div>
        </section>
      </main>
    </PageShell>
  );
}
