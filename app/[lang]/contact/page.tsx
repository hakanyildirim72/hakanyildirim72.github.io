import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { profile, type Language } from "@/lib/site-content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> { const { lang } = await params; const tr = lang === "tr"; return { title: tr ? "İletişim" : "Contact", description: tr ? "Araştırma ve teknoloji iş birlikleri için iletişim." : "Contact for research and technology collaborations.", alternates: { languages: { en: "/en/contact", tr: "/tr/contact" } } }; }

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params; if (rawLang !== "en" && rawLang !== "tr") notFound(); const lang = rawLang as Language; const tr = lang === "tr";
  return <PageShell lang={lang}><main><section className="contact-layout shell"><div><p className="eyebrow">{tr ? "İLETİŞİM" : "CONTACT"}</p><h1>{tr ? "Araştırma ve teknoloji üzerine konuşalım." : "Let’s discuss research and technology."}</h1><p>{tr ? "Araştırma iş birlikleri, akademik çalışmalar, siber güvenlik eğitimi ve teknoloji projeleri için profesyonel iletişim kanallarını kullanabilirsiniz." : "Use the professional channels below for research collaborations, academic work, cybersecurity education, and technology projects."}</p></div><aside className="contact-panel"><span>01</span><h2>{tr ? "Profesyonel bağlantılar" : "Professional channels"}</h2><a href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={16} /></a>{profile.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={16} /></a>)}</aside></section></main></PageShell>;
}
