import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { TopicIcon } from "@/components/topic-icon";
import { InteriorOutro } from "@/components/interior-intro";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { projects, type Language } from "@/lib/site-content";

export function generateStaticParams() { return ["en", "tr"].flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (lang !== "en" && lang !== "tr") return {};
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title[lang],
    description: project.summary[lang],
    alternates: { languages: { en: `/en/projects/${slug}`, tr: `/tr/projects/${slug}` } },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params; if (rawLang !== "en" && rawLang !== "tr") notFound(); const lang = rawLang as Language; const project = projects.find((item) => item.slug === slug); if (!project) notFound(); const tr = lang === "tr";
  return <PageShell lang={lang}><main className="interior-page project-page"><header className="page-hero shell project-hero"><a className="back-link" href={`/${lang}/projects`}><ArrowLeft size={16} />{tr ? "Tüm projeler" : "All projects"}</a><div className="project-emblem" aria-hidden="true"><TopicIcon topic={project.slug} /></div><p className="eyebrow">{project.kind === "academic" ? (tr ? "AKADEMİK PROJE" : "ACADEMIC PROJECT") : (tr ? "SEKTÖR PROJESİ" : "INDUSTRY PROJECT")}</p><h1>{project.title[lang]}</h1><p>{project.summary[lang]}</p><div className="project-meta"><span>{project.period}</span><span>{project.status === "ongoing" ? (tr ? "Devam ediyor" : "Ongoing") : (tr ? "Tamamlandı" : "Completed")}</span></div></header><section className="shell project-detail"><article><span>01</span><h2>{tr ? "Problem ve amaç" : "Problem and purpose"}</h2><p>{project.problem[lang]}</p></article><article><span>02</span><h2>{tr ? "Rol ve katkı" : "Role and contribution"}</h2><p>{project.contribution[lang]}</p></article>{project.outcome && <article><span>03</span><h2>{tr ? "Sonuçlar" : "Outcomes"}</h2><p>{project.outcome[lang]}</p></article>}</section>{project.links && project.links.length > 0 && <section className="shell project-resources"><h2>{tr ? "Proje bağlantıları" : "Project links"}</h2>{project.links.map(link => <a key={link.href} href={link.href}>{link.label}<ArrowUpRight size={18} /></a>)}</section>}<InteriorOutro lang={lang} title={tr ? "Yeni bir çalışma için." : "For the next collaboration."} description={tr ? "Araştırma ve teknoloji projeleriniz üzerine konuşalım." : "Let’s discuss your research and technology projects."} href={`/${lang}/contact`} label={tr ? "İletişime geç" : "Get in touch"} /></main></PageShell>;
}
