import type { ReactNode } from "react";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tr" }];
}

export default function LanguageLayout({ children }: { children: ReactNode }) {
  return children;
}
