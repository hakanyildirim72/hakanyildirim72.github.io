import Link from "next/link";
import type { Language } from "@/lib/site-content";

export function SiteFooter({ lang }: { lang: Language }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><span className="footer-mark">HY</span><p>© {new Date().getFullYear()} Dr. Hakan Yıldırım</p></div>
        <p>{lang === "tr" ? "Siber güvenlik, mühendislik ve teknoloji projeleri." : "Cybersecurity, engineering, and technology projects."}</p>
        <Link href={`/${lang}/contact`}>{lang === "tr" ? "İletişim" : "Contact"} ↗</Link>
      </div>
    </footer>
  );
}
