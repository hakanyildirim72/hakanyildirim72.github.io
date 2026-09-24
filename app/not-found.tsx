/* eslint-disable @next/next/no-html-link-for-pages -- Vinext client navigation currently fails on production. */
export default function NotFound() { return <main className="not-found"><span>404</span><h1>Page not found</h1><p>The page may have moved or the address may be incomplete.</p><a className="button button-primary" href="/en">Return home</a></main>; }
