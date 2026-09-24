import type { ReactNode } from "react";
import type { Language } from "@/lib/site-content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function PageShell({ lang, children }: { lang: Language; children: ReactNode }) {
  return <><SiteHeader lang={lang} />{children}<SiteFooter lang={lang} /></>;
}
