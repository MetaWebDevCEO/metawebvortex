"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  id: "vortex" | "apex" | "finanzs" | "containers";
  name: string;
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  logoSrc: string;
  quote: string;
  person: string;
  role: string;
  href: string;
};

const slideDurationMs = 10_000;

export function SolutionsCarousel() {
  const slides = useMemo<Slide[]>(
    () => [
      {
        id: "vortex",
        name: "Vortex",
        kicker: "Plataforma",
        title: "Logística y transporte con visibilidad total",
        description:
          "Vortex centraliza la operación logística y de transporte con trazabilidad, automatizaciones y control operativo para equipos que necesitan ejecutar rápido.",
        bullets: ["Trazabilidad end‑to‑end", "Automatización y control", "Operación en tiempo real"],
        logoSrc: "/logov.svg",
        quote:
          "Vortex nos dio trazabilidad y control operativo. La operación dejó de depender de hojas sueltas y mensajes.",
        person: "Operaciones",
        role: "Equipo logístico",
        href: "/site/productos#metaweb-containers",
      },
      {
        id: "apex",
        name: "MetaWeb Apex",
        kicker: "ERP / CRM",
        title: "ERP y CRM empresarial en un solo sistema",
        description:
          "Apex unifica ventas y operación para que tu equipo trabaje con datos consistentes, flujos claros y reportes listos para decisiones.",
        bullets: ["CRM y ventas", "ERP empresarial", "Reportes y control"],
        logoSrc: "/apex.svg",
        quote:
          "Apex nos ordenó el proceso comercial y operativo. Por fin todo está en un solo lugar y se mide fácil.",
        person: "Dirección",
        role: "Equipo comercial",
        href: "/site/productos#metaweb-apex",
      },
      {
        id: "finanzs",
        name: "MetaWeb Finanzs",
        kicker: "Finanzas",
        title: "Finanzas personales y empresariales con control",
        description:
          "Finanzs ofrece visibilidad financiera, reportes y control para decisiones rápidas: desde presupuestos personales hasta operación empresarial.",
        bullets: ["Finanzas personales", "Finanzas empresariales", "Reportes y control"],
        logoSrc: "/finanzs.svg",
        quote:
          "Con Finanzs logramos control claro. Reportes y visibilidad para decidir rápido sin perder detalle.",
        person: "Finanzas",
        role: "Administración",
        href: "/site/productos#metaweb-finanzs",
      },
      {
        id: "containers",
        name: "MetaWeb Containers",
        kicker: "Inventarios / Ventas",
        title: "Inventarios y ventas con trazabilidad y control",
        description:
          "Containers organiza inventarios, ventas y operación diaria. Mantén trazabilidad, evita errores y mejora el control del negocio.",
        bullets: ["Inventarios", "Ventas", "Control operativo"],
        logoSrc: "/containers.svg",
        quote:
          "Containers nos ayudó a controlar inventarios y ventas. Menos errores, más trazabilidad y operación más limpia.",
        person: "Operación",
        role: "Administración",
        href: "/site/productos#metaweb-containers",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<number | null>(null);
  const transitionRef = useRef<number | null>(null);

  function goTo(index: number) {
    if (transitionRef.current) window.clearTimeout(transitionRef.current);
    setVisible(false);
    transitionRef.current = window.setTimeout(() => {
      setActiveIndex(index);
      setVisible(true);
      transitionRef.current = null;
    }, 220);
  }

  useEffect(() => {
    function start() {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        const nextIndex = (activeIndex + 1) % slides.length;
        goTo(nextIndex);
      }, slideDurationMs);
    }

    start();
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (transitionRef.current) window.clearTimeout(transitionRef.current);
    };
  }, [activeIndex, slides.length]);

  const active = slides[activeIndex];

  return (
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
        <div
          className={[
            "overflow-hidden rounded-3xl ",
            "transition-all duration-300",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <div className="grid md:grid-cols-2">
            <div className="bg-white p-8 md:p-10">
              <div className="flex h-full min-h-[220px] items-center justify-center md:min-h-[360px]">
                <Image
                  src={active.logoSrc}
                  alt={active.name}
                  width={800}
                  height={400}
                  className="h-40 w-full object-contain md:h-56"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
              <div className="flex flex-col gap-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {active.kicker}
                </div>
                <div>
                  <div className="text-2xl font-semibold tracking-tight text-zinc-950">
                    {active.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-zinc-600">{active.description}</div>
                </div>

                <div className="grid gap-2">
                  {active.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm text-zinc-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={active.href}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                >
                  Ver solución
                </Link>
                <Link
                  href="/site/recursos"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-50"
                >
                  Agendar demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
