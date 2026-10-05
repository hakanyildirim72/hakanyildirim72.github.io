import type { Metadata } from "next";
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
  return <PageShell lang={lang}><main>
    <header className="page-hero shell">
      <p className="eyebrow">{tr ? "AKADEMİK ÜRETİM" : "ACADEMIC OUTPUT"}</p>
      <h1>{tr ? "Yayınlar" : "Publications"}</h1>
      <p>{tr ? "Makaleler, kitaplar ve kitap bölümleri bibliyografik bilgiler ve kısa açıklamalarla sunulur. Erişilebilen yayın kayıtlarından hazırlanan özgün özetlerle, tam özet bulunmayan eserlerin yalnızca kapsamını anlatan konu tanıtımları ayrı etiketlenmiştir." : "Articles, books, and chapters are presented with bibliographic details and short descriptions. Original summaries based on available publication records are distinguished from topic overviews where no full abstract was available."}</p>
    </header>
    {books.length > 0 && <section className="shell books-section">
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
    <section className="shell archive-section">
      <p className="section-index">02</p>
      <h2 className="archive-title">{tr ? "Makaleler ve kitap bölümleri" : "Articles and book chapters"}</h2>
      <PublicationsFilter lang={lang} items={archive} />
    </section>
  </main></PageShell>;
}
