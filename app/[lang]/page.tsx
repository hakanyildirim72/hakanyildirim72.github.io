import { ArrowUpRight, Download } from "lucide-react";
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

  return (
    <PageShell lang={lang}>
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">{isTr ? "MÜHENDİSLİK · SİBER GÜVENLİK" : "ENGINEERING · CYBERSECURITY"}</p>
            <h1>{isTr ? "Güvenli sistemler için araştırma ve mühendislik." : "Research and engineering for secure systems."}</h1>
            <p className="hero-intro">{isTr ? "Siber güvenlik, dijital deliller, teknoloji hukuku ve büyük ölçekli bilgi sistemleri üzerine akademik araştırma ile uygulama deneyimi." : "Academic research and applied experience in cybersecurity, digital evidence, technology law, and large-scale information systems."}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={"/" + lang + "/publications"}>{isTr ? "Yayınları incele" : "Explore publications"} <ArrowUpRight size={17} /></a>
              {profile.cvPath ? <a className="button button-secondary" href={profile.cvPath} download>{isTr ? "CV’yi indir" : "Download CV"} <Download size={16} /></a> : <span className="button button-muted" aria-disabled="true">{isTr ? "CV hazırlanıyor" : "CV in preparation"} <Download size={16} /></span>}
            </div>
          </div>
          <div className="identity-card" aria-label="Dr. Hakan Yıldırım">
            <div className="monogram">HY</div>
            <div><span className="identity-label">{profile.title[lang]}</span><p>{isTr ? "Araştırma · Uygulama · İş birliği" : "Research · Practice · Collaboration"}</p></div>
          </div>
        </section>

        <section id="research" className="research-band">
          <div className="shell research-grid">
            <div><p className="section-index">01</p><h2>{isTr ? "Araştırma alanları" : "Research interests"}</h2></div>
            <div className="interest-list">{researchAreas.map((area, index) => <article key={area.id}><span>0{index + 1}</span><div><h3>{area.title[lang]}</h3><p>{area.description[lang]}</p></div></article>)}</div>
          </div>
        </section>

        {(selectedPublications.length > 0 || selectedProjects.length > 0) && <section className="shell selected-work">
          <div className="section-heading"><div><p className="section-index">02</p><h2>{isTr ? "Seçili çalışmalar" : "Selected work"}</h2></div></div>
          <div className="work-grid">
            {selectedPublications.map((item) => <article key={item.id} className="work-card">
              <span>{item.year} · {item.type}</span>
              <h3>{item.title}</h3>
              <p className="work-venue">{item.venue}</p>
              {item.summary && <div className="work-overview"><span className="overview-kicker">{item.summaryKind === "topic" ? (isTr ? "Konu tanıtımı" : "Topic overview") : (isTr ? "Özgün özet" : "Editorial summary")}</span><p className="work-summary">{item.summary[lang]}</p></div>}
              <a href={`/${lang}/publications#${item.id}`}>{isTr ? "Yayını gör" : "View publication"} ↗</a>
            </article>)}
            {selectedProjects.map((item) => <article key={item.slug} className="work-card"><span>{item.period} · {item.kind}</span><h3>{item.title[lang]}</h3><p>{item.summary[lang]}</p><a href={"/" + lang + "/projects/" + item.slug}>{isTr ? "Projeyi gör" : "View project"} ↗</a></article>)}
          </div>
        </section>}

        <section className="shell archive-cta">
          <div><p className="section-index">02</p><h2>{isTr ? "Akademik ve uygulamalı çalışmalar" : "Academic and applied work"}</h2></div>
          <p>{isTr ? "Makaleler, kitaplar ve uygulamalı projeler; güvenlik, yönetişim ve teknolojinin kesişimindeki çalışmaları bir araya getirir." : "Articles, books, and applied projects bring together work at the intersection of security, governance, and technology."}</p>
          <div><a href={"/" + lang + "/publications"}>{isTr ? "Yayınlar" : "Publications"} <ArrowUpRight size={17} /></a><a href={"/" + lang + "/projects"}>{isTr ? "Projeler" : "Projects"} <ArrowUpRight size={17} /></a></div>
        </section>
      </main>
    </PageShell>
  );
}
