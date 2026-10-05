import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://dr-hakan-yildirim.yldrma423.chatgpt.site"),
  title: { default: "Dr. Hakan Yıldırım", template: "%s — Dr. Hakan Yıldırım" },
  description: "Academic portfolio focused on cybersecurity, engineering, and technology projects.",
  openGraph: {
    type: "website",
    siteName: "Dr. Hakan Yıldırım",
    title: "Dr. Hakan Yıldırım — Academic Portfolio",
    description: "Research interests, publications, books, projects, and academic and industry experience in cybersecurity and engineering.",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
