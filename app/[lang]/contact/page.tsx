import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { profile, type Language } from "@/lib/site-content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> { const { lang } = await params; const tr = lang === "tr"; return { title: tr ? "İletişim" : "Contact", description: tr ? "Araştırma ve teknoloji iş birlikleri için iletişim." : "Contact for research and technology collaborations.", alternates: { languages: { en: "/en/contact", tr: "/tr/contact" } } }; }

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params; if (rawLang !== "en" && rawLang !== "tr") notFound(); const lang = rawLang as Language; const tr = lang === "tr";
  return <PageShell lang={lang}><main className="interior-page contact-page"><section className="contact-layout shell"><div><p className="eyebrow"><span className="tiny-star" aria-hidden="true">✳</span> {tr ? "İLETİŞİM" : "CONTACT"}</p><h1>{tr ? "Birlikte düşünelim." : "Let’s think together."}</h1><p>{tr ? "Araştırma iş birlikleri, akademik çalışmalar, siber güvenlik eğitimi ve teknoloji projeleri için profesyonel iletişim kanallarını kullanabilirsiniz." : "Use the professional channels below for research collaborations, academic work, cybersecurity education, and technology projects."}</p><div className="contact-topics"><span>{tr ? "Araştırma" : "Research"}</span><span>{tr ? "Eğitim" : "Education"}</span><span>{tr ? "Teknoloji" : "Technology"}</span></div></div><aside className="contact-panel"><div className="contact-signature"><Image className="profile-avatar" src="/images/hakan-yildirim-portrait.png" alt="" width={56} height={56} unoptimized /><div><strong>{profile.name}</strong><span>{tr ? "PROFESYONEL İLETİŞİM" : "PROFESSIONAL CONTACT"}</span></div><Mail size={26} strokeWidth={1.4} aria-hidden="true" /></div><h2>{tr ? "Bir mesajla başlayalım." : "Start a conversation."}</h2><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={16} /></a>{profile.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={16} /></a>)}</aside></section></main></PageShell>;
}
