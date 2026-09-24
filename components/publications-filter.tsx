"use client";

import { useMemo, useState } from "react";
import type { Language, Publication, PublicationType } from "@/lib/site-content";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const typeLabels: Record<Language, Record<"all" | PublicationType, string>> = {
  en: { all: "All types", article: "Journal articles", conference: "Conference papers", book: "Books", chapter: "Book chapters" },
  tr: { all: "Tüm türler", article: "Makaleler", conference: "Konferans bildirileri", book: "Kitaplar", chapter: "Kitap bölümleri" },
};

export function PublicationsFilter({ lang, items }: { lang: Language; items: Publication[] }) {
  const [type, setType] = useState<"all" | PublicationType>("all");
  const [year, setYear] = useState("all");
  const years = useMemo(() => [...new Set(items.map((item) => item.year))].sort((a, b) => b - a), [items]);
  const visible = items.filter((item) => (type === "all" || item.type === type) && (year === "all" || item.year === Number(year))).sort((a, b) => b.year - a.year);
  const t = lang === "tr";

  return (
    <>
      <div className="filter-bar" aria-label={t ? "Yayın filtreleri" : "Publication filters"}>
        <label><span>{t ? "Tür" : "Type"}</span>
          <Select value={type} onValueChange={(value) => setType(value as "all" | PublicationType)}>
            <SelectTrigger className="archive-select"><SelectValue /></SelectTrigger>
            <SelectContent>{Object.entries(typeLabels[lang]).map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}</SelectContent>
          </Select>
        </label>
        <label><span>{t ? "Yıl" : "Year"}</span>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="archive-select"><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="all">{t ? "Tüm yıllar" : "All years"}</SelectItem>{years.map((value) => <SelectItem key={value} value={String(value)}>{value}</SelectItem>)}</SelectContent>
          </Select>
        </label>
        <p>{visible.length} {t ? "kayıt" : visible.length === 1 ? "record" : "records"}</p>
      </div>
      {visible.length ? (
        <div className="publication-list">{visible.map((item) => (
          <article key={item.id} className="publication-item">
            <div><span className="record-type">{typeLabels[lang][item.type]}</span><span>{item.year}</span></div>
            <h2>{item.title}</h2><div className="publication-meta"><p>{item.authors.join(", ")}</p><p>{item.venue}</p>{item.summary && <p className="publication-summary">{item.summary[lang]}</p>}</div>
            <div className="record-links">{item.doi && <a href={`https://doi.org/${item.doi}`}>DOI ↗</a>}{item.openAccessUrl && <a href={item.openAccessUrl}>{t ? "Açık erişim" : "Open access"} ↗</a>}{item.bibtex && <a href={item.bibtex}>BibTeX ↗</a>}</div>
          </article>
        ))}</div>
      ) : <div className="empty-state"><span>00</span><h2>{t ? "Doğrulanmış yayın kayıtları hazırlanıyor." : "Verified publication records are being prepared."}</h2><p>{t ? "Bibliyografik bilgiler, DOI ve erişim bağlantıları kaynaklarıyla birlikte eklenecek." : "Bibliographic details, DOI information, and access links will be added from verified sources."}</p></div>}
    </>
  );
}
