import type { Metadata } from "next";
import { InteriorIntro, InteriorOutro } from "@/components/interior-intro";
import { notFound } from "next/navigation";
import { BookOpen } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PublicationsFilter } from "@/components/publications-filter";
import { publications, type Language } from "@/lib/site-content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params; const tr = lang === "tr";
  return { title: tr ? "Yayınlar" : "Publications", description: tr ? "Dr. Hakan Yıldırım’ın makale, bildiri, kitap ve kitap bölümleri." : "Articles, conference papers, books, and book chapters by Dr. Hakan Yıldırım.", alternates: { languages: { en: "/en/publications", tr: "/tr/publications" } } };
}

export default async function PublicationsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params; if (rawLang !== "en" && rawLang !== "tr") notFound();
  const lang = rawLang as Language; const tr = lang === "tr";
  const books = publications.filter((item) => item.type === "book");
  const archive = publications.filter((item) => item.type !== "book");
  return <PageShell lang={lang}><main className="interior-page">
    <InteriorIntro lang={lang} eyebrow={tr ? "AKADEMİK ÜRETİM" : "ACADEMIC OUTPUT"} title={tr ? "Yayınlar" : "Publications"} description={tr ? "Güvenlik, bilgi ve teknoloji üzerine makaleler, kitaplar ve kitap bölümleri. Her çalışmanın bibliyografik bilgilerine ve kısa tanıtımına buradan ulaşabilirsiniz." : "Articles, books, and chapters on security, information, and technology. Explore the bibliographic record and a short introduction to each work."} visual="knowledge" links={[{label:tr ? "Kitaplar" : "Books",href:"#books"},{label:tr ? "Makaleler ve bölümler" : "Articles & chapters",href:"#articles"}]} />
    {books.length > 0 && <section id="books" className="shell books-section">
      <p className="section-index">01</p>
      <h2>{tr ? "Kitaplar" : "Books"}</h2>
      <div className="books-grid">{books.map((book) => <article key={book.id} id={book.id}>
        <div className="book-card-top"><BookOpen size={28} strokeWidth={1.4} aria-hidden="true" /><span>{book.year}</span></div>
        <h3>{book.title}</h3>
        <p>{book.authors.join(", ")}</p>
        <p>{book.venue}</p>
        {book.summary && <div className="book-overview"><span className="overview-kicker">{book.summaryKind === "topic" ? (tr ? "Konu tanıtımı" : "Topic overview") : (tr ? "Özgün özet" : "Editorial summary")}</span><p>{book.summary[lang]}</p></div>}
        {book.sourceUrl && <a className="book-source" href={book.sourceUrl}>{tr ? "Kaynak kaydı" : "Source record"} ↗</a>}
      </article>)}</div>
    </section>}
    <section id="articles" className="shell archive-section">
      <p className="section-index">02</p>
      <h2 className="archive-title">{tr ? "Makaleler ve kitap bölümleri" : "Articles and book chapters"}</h2>
      <p className="archive-note">{tr ? "Erişilebilen yayın kayıtlarından hazırlanan özgün özetler ile tam özeti bulunmayan eserlerin kapsamını anlatan konu tanıtımları ayrı etiketlenmiştir." : "Editorial summaries based on available publication records are distinguished from topic overviews where a full abstract was not available."}</p><PublicationsFilter lang={lang} items={archive} />
    </section>
  <InteriorOutro lang={lang} title={tr ? "Fikirden uygulamaya." : "From ideas to practice."} description={tr ? "Araştırmanın mühendislik ve teknoloji projeleriyle buluştuğu çalışmaları keşfedin." : "Explore the work where research meets engineering and technology projects."} href={`/${lang}/projects`} label={tr ? "Projeleri incele" : "Explore projects"} /></main></PageShell>;
}
