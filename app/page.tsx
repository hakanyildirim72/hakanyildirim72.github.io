import { redirect } from "next/navigation";

export default function RootPage() {
  if (process.env.GITHUB_PAGES === "true") {
    return <main><meta httpEquiv="refresh" content="0;url=/en/" /><a href="/en/">Dr. Hakan Yıldırım — Academic Portfolio</a></main>;
  }
  redirect("/en");
}
