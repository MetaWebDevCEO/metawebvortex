"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type NavItem = {
  href: string;
  label: string;
  hasDropdown?: boolean;
};

const navItems: NavItem[] = [
  { href: "/site/productos", label: "Productos", hasDropdown: true },
  { href: "/site/funcionalidades", label: "Funcionalidades" },
  { href: "/site/documentacion", label: "Documentación" },
  { href: "/site/precios", label: "Precios" },
  { href: "/site/integraciones", label: "Integraciones", hasDropdown: true },
  { href: "/site/recursos", label: "Recursos", hasDropdown: true },
];

type DropdownKey = "productos" | "integraciones" | "recursos";

type DropdownItem = {
  title: string;
  description: string;
  href: string;
  badge?: string;
};

type DropdownSection = {
  title: string;
  items: DropdownItem[];
  footer?: { title: string; description: string; href: string };
};

export function SiteNavbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [renderDropdown, setRenderDropdown] = useState<DropdownKey | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const dropdowns = useMemo<Record<DropdownKey, DropdownSection[]>>(
    () => ({
      productos: [
        {
          title: "Productos",
          items: [
            {
              title: "MetaWeb Dev Solutions",
              description: "Desarrollo y soluciones a medida para tu negocio",
              href: "/site/productos",
            },
            {
              title: "MetaWeb Apex",
              description: "Suite empresarial para operar y escalar procesos",
              href: "/site/productos",
            },
            {
              title: "MetaWeb Finanzs",
              description: "Gestión financiera, reportes y control de costos",
              href: "/site/productos",
            },
            {
              title: "MetaWeb Containers",
              description: "Operación y trazabilidad de contenedores",
              href: "/site/productos",
            },
          ],
        },
      ],
      integraciones: [
        {
          title: "Conectores",
          items: [
            {
              title: "Webhooks",
              description: "Envía eventos en tiempo real",
              href: "/site/integraciones",
            },
            {
              title: "Zapier",
              description: "Automatiza sin código",
              href: "/site/integraciones",
            },
            {
              title: "Make",
              description: "Orquesta flujos y pipelines",
              href: "/site/integraciones",
            },
          ],
          footer: {
            title: "Ver integraciones",
            description: "Todos los conectores",
            href: "/site/integraciones",
          },
        },
        {
          title: "API",
          items: [
            {
              title: "REST",
              description: "Integra desde cualquier stack",
              href: "/site/documentacion",
            },
            {
              title: "SDK",
              description: "Clientes y utilidades",
              href: "/site/documentacion",
            },
          ],
        },
        {
          title: "Soporte",
          items: [
            {
              title: "Guías",
              description: "Pasos rápidos de integración",
              href: "/site/recursos",
            },
          ],
        },
      ],
      recursos: [
        {
          title: "Recursos",
          items: [
            {
              title: "Blog",
              description: "Novedades y mejores prácticas",
              href: "/site/recursos",
            },
            {
              title: "Plantillas",
              description: "Atajos para empezar rápido",
              href: "/site/recursos",
            },
          ],
        },
        {
          title: "Ayuda",
          items: [
            {
              title: "FAQ",
              description: "Preguntas frecuentes",
              href: "/site/recursos",
            },
            {
              title: "Changelog",
              description: "Cambios por versión",
              href: "/site/recursos",
            },
          ],
        },
        {
          title: "Empresa",
          items: [
            {
              title: "Contacto",
              description: "Habla con ventas",
              href: "/site/recursos",
            },
          ],
        },
      ],
    }),
    [],
  );

  function dropdownKeyFromHref(href: string): DropdownKey | null {
    if (href === "/site/productos") return "productos";
    if (href === "/site/integraciones") return "integraciones";
    if (href === "/site/recursos") return "recursos";
    return null;
  }

  const closeDropdown = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(null);
    closeTimerRef.current = window.setTimeout(() => {
      setRenderDropdown(null);
      closeTimerRef.current = null;
    }, 160);
  }, []);

  const openDropdownFor = useCallback((key: DropdownKey) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setRenderDropdown(key);
    setOpenDropdown(key);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeDropdown();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeDropdown]);

  return (
    <header
      className="relative border-b border-zinc-200 bg-white"
      onMouseLeave={closeDropdown}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-4">
        <div className="flex items-center gap-10">
          <Link href="/site" className="flex items-center gap-3">
            <Image
              src="/logov.svg"
              alt="MetaWeb Vortex"
              width={500}
              height={250}
              className="h-25 w-auto max-w-[500px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname?.startsWith(`${item.href}/`);
              const dropdownKey = dropdownKeyFromHref(item.href);
              const isDropdownOpen =
                dropdownKey ? openDropdown === dropdownKey : false;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => {
                    if (dropdownKey) openDropdownFor(dropdownKey);
                    else closeDropdown();
                  }}
                  onFocus={() => {
                    if (dropdownKey) openDropdownFor(dropdownKey);
                  }}
                  className={[
                    "inline-flex items-center gap-1 text-sm transition-colors",
                    isActive ? "font-medium text-zinc-950" : "text-zinc-600 hover:text-zinc-950",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown ? (
                    <svg
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={[
                        "text-zinc-950/80 transition-transform duration-150",
                        isDropdownOpen ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 text-sm text-zinc-600 md:flex">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-600"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <span className="font-medium text-zinc-950">94.7K</span>
          </div>

          <Link
            href="/site"
            className="inline-flex h-9 items-center justify-center rounded-full bg-black px-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
          >
            Sign up
          </Link>

          <nav className="md:hidden">
            <Link
              href="/site/productos"
              className="inline-flex h-9 items-center justify-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-50"
            >
              Menú
            </Link>
          </nav>
        </div>
      </div>

      {renderDropdown ? (
        <div
          className={[
            "absolute left-0 right-0 top-full origin-top transform transition-all duration-150 ease-out",
            openDropdown
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          ].join(" ")}
        >
          <div className="border-t border-zinc-200 bg-white shadow-lg">
            <div className="mx-auto w-full max-w-6xl px-4 py-6">
              <div
                className={[
                  "grid gap-6",
                  dropdowns[renderDropdown].length === 1
                    ? "grid-cols-1"
                    : dropdowns[renderDropdown].length === 2
                      ? "grid-cols-2"
                      : "grid-cols-3",
                ].join(" ")}
              >
                {dropdowns[renderDropdown].map((section) => (
                  <div key={section.title} className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {section.title}
                    </div>
                    <div className="mt-3 flex flex-col gap-1">
                      {section.items.map((entry) => (
                        <Link
                          key={entry.title}
                          href={entry.href}
                          className="rounded-md px-3 py-2 transition-colors hover:bg-zinc-50"
                          onClick={closeDropdown}
                        >
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium text-zinc-950">
                              {entry.title}
                            </div>
                            {entry.badge ? (
                              <span className="rounded-full bg-black px-2 py-0.5 text-[11px] font-semibold text-white">
                                {entry.badge}
                              </span>
                            ) : null}
                          </div>
                          <div className="mt-0.5 text-xs text-zinc-600">
                            {entry.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                    {section.footer ? (
                      <Link
                        href={section.footer.href}
                        className="mt-3 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-50"
                        onClick={closeDropdown}
                      >
                        <span>{section.footer.title}</span>
                        <span className="text-zinc-500">→</span>
                      </Link>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
