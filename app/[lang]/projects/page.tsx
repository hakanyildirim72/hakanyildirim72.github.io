import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { TopicIcon } from "@/components/topic-icon";
import { projects, type Language } from "@/lib/site-content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> { const { lang } = await params; const tr = lang === "tr"; return { title: tr ? "Projeler" : "Projects", description: tr ? "Akademik ve sektörel teknoloji projeleri." : "Academic and industry technology projects.", alternates: { languages: { en: "/en/projects", tr: "/tr/projects" } } }; }

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params; if (rawLang !== "en" && rawLang !== "tr") notFound(); const lang = rawLang as Language; const tr = lang === "tr";
  return <PageShell lang={lang}><main><header className="page-hero shell"><p className="eyebrow">{tr ? "ARAŞTIRMADAN UYGULAMAYA" : "FROM RESEARCH TO PRACTICE"}</p><h1>{tr ? "Projeler" : "Projects"}</h1><p>{tr ? "Akademik soruları, mühendislik uygulamalarını ve sektör ihtiyaçlarını bir araya getiren çalışmalar." : "Work connecting academic questions, engineering practice, and industry needs."}</p></header><section className="shell archive-section">{projects.length ? <div className="project-list">{[...projects].sort((a, b) => Number(b.period.slice(0, 4)) - Number(a.period.slice(0, 4))).map((project) => <article key={project.slug} className="project-row"><div><span className="project-symbol"><TopicIcon topic={project.slug} /></span><span className={`status ${project.status}`}>{project.status === "ongoing" ? (tr ? "Devam ediyor" : "Ongoing") : (tr ? "Tamamlandı" : "Completed")}</span><span>{project.period}</span></div><h2>{project.title[lang]}</h2><p>{project.summary[lang]}</p><a href={`/${lang}/projects/${project.slug}`}>{tr ? "Proje detayları" : "Project details"} <ArrowUpRight size={16} /></a></article>)}</div> : <div className="empty-state"><span>00</span><h2>{tr ? "Doğrulanmış proje kayıtları hazırlanıyor." : "Verified project records are being prepared."}</h2><p>{tr ? "Her kayıt problem, rol, tarih ve paylaşılabilir sonuçlarla birlikte yayımlanacak." : "Each record will be published with its problem, role, dates, and shareable outcomes."}</p></div>}</section></main></PageShell>;
}
