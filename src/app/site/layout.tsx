import type { ReactNode } from "react";

import { Banner } from "./banner";
import { SiteNavbar } from "./site-navbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <div className="sticky top-0 z-50">
        <Banner />
        <SiteNavbar />
      </div>
      <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
    </div>
  );
}
