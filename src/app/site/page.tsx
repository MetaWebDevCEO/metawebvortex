import Link from "next/link";

export default function SiteHomePage() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold tracking-tight">MetaWeb Vortex</h1>
      <p className="max-w-2xl text-zinc-700 dark:text-zinc-300">
        Navega por las secciones desde la barra superior.
      </p>
      <div>
        <Link
          href="/site/productos"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-black dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
        >
          Ver Productos
        </Link>
      </div>
    </section>
  );
}

