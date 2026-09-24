import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Dr. Hakan Yıldırım", template: "%s — Dr. Hakan Yıldırım" },
  description: "Academic portfolio focused on cybersecurity, engineering, and technology projects.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
