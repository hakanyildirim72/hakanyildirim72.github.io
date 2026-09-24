import Link from "next/link";

export default function NotFound() { return <main className="not-found"><span>404</span><h1>Page not found</h1><p>The page may have moved or the address may be incomplete.</p><Link className="button button-primary" href="/en">Return home</Link></main>; }
