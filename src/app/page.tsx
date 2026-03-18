import Link from "next/link";

import { SiteNavbar } from "./site/site-navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <SiteNavbar />
      <main className="mx-auto w-full max-w-6xl px-4 py-16">
        <section className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold tracking-tight">MetaWeb Vortex</h1>
          <p className="max-w-2xl text-zinc-700 dark:text-zinc-300">
            Plataforma de gestión de contenido para empresas.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/site"
              className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-black dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
            >
              Ir al sitio
            </Link>
            <Link
              href="/site/productos"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-900/5 dark:border-white/10 dark:bg-black dark:text-zinc-50 dark:hover:bg-white/10"
            >
              Ver productos
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
