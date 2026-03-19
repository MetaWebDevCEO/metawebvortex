import Image from "next/image";
import Link from "next/link";

import styles from "./productos.module.css";

type TechId =
  | "nextjs"
  | "react"
  | "tailwind"
  | "shadcn"
  | "typescript"
  | "github"
  | "aws"
  | "amplify"
  | "cdk"
  | "cognito"
  | "dynamodb"
  | "s3"
  | "nodejs"
  | "vercel"
  | "eslint"
  | "figma";

function TechLogo({
  id,
  label,
  src,
}: {
  id: TechId;
  label: string;
  src?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={label}
        width={120}
        height={32}
        className="h-7 w-auto"
      />
    );
  }

  if (id === "react") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="28"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="4" fill="currentColor" />
        <ellipse
          cx="32"
          cy="32"
          rx="22"
          ry="9"
          stroke="currentColor"
          strokeWidth="3"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="22"
          ry="9"
          stroke="currentColor"
          strokeWidth="3"
          transform="rotate(60 32 32)"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="22"
          ry="9"
          stroke="currentColor"
          strokeWidth="3"
          transform="rotate(120 32 32)"
        />
      </svg>
    );
  }

  if (id === "tailwind") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="30"
        height="30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 28c3.2-8 7.6-12 13.6-12 8.8 0 10.8 8 15.2 8 2.9 0 5.2-1.6 7.2-4.8-3.2 8-7.6 12-13.6 12-8.8 0-10.8-8-15.2-8-2.9 0-5.2 1.6-7.2 4.8Z" />
        <path d="M12 40c3.2-8 7.6-12 13.6-12 8.8 0 10.8 8 15.2 8 2.9 0 5.2-1.6 7.2-4.8-3.2 8-7.6 12-13.6 12-8.8 0-10.8-8-15.2-8-2.9 0-5.2 1.6-7.2 4.8Z" />
      </svg>
    );
  }

  if (id === "github") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="30"
        height="30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="28" fill="currentColor" />
        <path
          d="M22 42c2.2 1.6 5.2 2.5 10 2.5S39.8 43.6 42 42c.2-5.3-1.2-8.3-2.8-10 1-3.3.1-6.1-.6-7.5-2.1-.2-4.2.9-5.8 2-1.2-.3-2.7-.5-4.8-.5s-3.6.2-4.8.5c-1.6-1.1-3.7-2.2-5.8-2-.7 1.4-1.6 4.2-.6 7.5-1.6 1.7-3 4.7-2.8 10Z"
          fill="white"
          opacity="0.92"
        />
        <path
          d="M26 34c-.7 0-1.3.6-1.3 1.3S25.3 36.6 26 36.6s1.3-.6 1.3-1.3S26.7 34 26 34Zm12 0c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3 1.3-.6 1.3-1.3S38.7 34 38 34Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (id === "shadcn") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="28"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="10" width="44" height="44" rx="12" stroke="currentColor" strokeWidth="3" />
        <path d="M22 44 42 20" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "typescript") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="28"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="10" width="44" height="44" rx="10" fill="currentColor" />
        <path
          d="M22 28h20v6h-7v18h-6V34h-7v-6Zm28 0v6h-6v-6h6Zm0 10v14h-6V38h6Z"
          fill="white"
          opacity="0.95"
        />
      </svg>
    );
  }

  if (id === "aws") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="12" width="44" height="40" rx="12" stroke="currentColor" strokeWidth="3" />
        <path
          d="M22 40l4-16h4l4 16h-4l-.6-3H26.6L26 40h-4Zm5.2-6h3l-1.5-7-1.5 7ZM38 40V24h4v16h-4Zm0-18v-4h4v4h-4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (id === "amplify") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 10 54 54H10L32 10Z" stroke="currentColor" strokeWidth="3" />
        <path d="M32 22 42 42H22l10-20Z" fill="currentColor" />
      </svg>
    );
  }

  if (id === "cdk") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="30"
        height="30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="10" width="44" height="44" rx="12" fill="currentColor" />
        <path
          d="M24 40c-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.6.9 4.7 2.2l-2.6 1.8c-.5-.6-1.2-1-2.1-1-1.6 0-3 1.4-3 3s1.4 3 3 3c.9 0 1.6-.4 2.1-1l2.6 1.8C27.6 39.1 25.9 40 24 40Zm10 0V24h3v6.3l5.5-6.3H46l-6.2 7 6.4 9H42l-4.7-6.8-1.3 1.5V40h-3Z"
          fill="white"
          opacity="0.95"
        />
      </svg>
    );
  }

  if (id === "cognito") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="30"
        height="30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="12" y="16" width="40" height="32" rx="12" stroke="currentColor" strokeWidth="3" />
        <circle cx="30" cy="32" r="6" stroke="currentColor" strokeWidth="3" />
        <path d="M36 32h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M44 28v8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "dynamodb") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="30"
        height="30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="32" cy="18" rx="18" ry="8" stroke="currentColor" strokeWidth="3" />
        <path d="M14 18v20c0 4.4 8.1 8 18 8s18-3.6 18-8V18" stroke="currentColor" strokeWidth="3" />
        <path d="M14 28c0 4.4 8.1 8 18 8s18-3.6 18-8" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }

  if (id === "s3") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="30"
        height="30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 10 52 20v24L32 54 12 44V20L32 10Z" stroke="currentColor" strokeWidth="3" />
        <path d="M12 20l20 10 20-10" stroke="currentColor" strokeWidth="3" />
        <path d="M32 30v24" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }

  if (id === "nodejs") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="30"
        height="30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 10 52 21v22L32 54 12 43V21L32 10Z"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M26 40V28h4l4 6v-6h4v12h-4l-4-6v6h-4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (id === "eslint") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="30"
        height="30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 10 50 20v24L32 54 14 44V20L32 10Z"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path d="M22 32l6 6 14-14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "figma") {
    return (
      <svg
        aria-label={label}
        viewBox="0 0 64 64"
        width="26"
        height="26"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="26" cy="20" r="8" />
        <circle cx="38" cy="20" r="8" opacity="0.85" />
        <circle cx="26" cy="32" r="8" opacity="0.7" />
        <circle cx="38" cy="32" r="8" opacity="0.55" />
        <circle cx="26" cy="44" r="8" opacity="0.4" />
      </svg>
    );
  }

  return (
    <span className="text-sm font-semibold tracking-tight text-zinc-950" aria-label={label}>
      {label}
    </span>
  );
}

const products = [
  {
    id: "metaweb-dev-solutions",
    name: "MetaWeb Dev Solutions",
    description:
      "Empresa de desarrollo de software creadora de Vortex. Construye soluciones a medida, integra sistemas y acelera equipos con productos listos para operar.",
    logoSrc: "/metaweb.svg",
    href: "https://www.metawebdevsolutions.com.mx/",
    hrefLabel: "Visitar sitio",
    kind: "creadores",
    highlights: [
      "Desarrollo de software a medida",
      "Arquitectura e integraciones",
      "Entrega por etapas y escalable",
    ],
  },
  {
    id: "metaweb-apex",
    name: "MetaWeb Apex",
    description:
      "Módulo de Vortex para operar, medir y escalar: tableros, flujos y métricas pensados para equipos de alto desempeño.",
    logoSrc: "/apex.svg",
    href: "#metaweb-apex",
    hrefLabel: "Ver detalles",
    kind: "modulo",
    highlights: [
      "Gestión operativa y KPIs",
      "Flujos y aprobaciones",
      "Paneles y reportes en tiempo real",
    ],
  },
  {
    id: "metaweb-finanzs",
    name: "MetaWeb Finanzs",
    description:
      "Módulo de Vortex para finanzas: reportes, control de costos y visibilidad para decidir con confianza.",
    logoText: "F",
    href: "#metaweb-finanzs",
    hrefLabel: "Ver detalles",
    kind: "modulo",
    highlights: ["Presupuestos y control", "Reportes financieros", "Trazabilidad de costos"],
  },
  {
    id: "metaweb-containers",
    name: "MetaWeb Containers",
    description:
      "Módulo de Vortex para logística: trazabilidad de contenedores, eventos y visibilidad end‑to‑end.",
    logoText: "C",
    href: "#metaweb-containers",
    hrefLabel: "Ver detalles",
    kind: "modulo",
    highlights: ["Tracking y eventos", "Flujo operativo", "Evidencias y auditoría"],
  },
] as const;

const audiences = [
  {
    title: "Operaciones",
    description:
      "Estandariza flujos en Vortex, centraliza procesos y obtén indicadores listos para decisiones.",
  },
  {
    title: "Finanzas",
    description:
      "Control de costos, reportes y trazabilidad con Finanzs para cerrar con claridad y sin sorpresas.",
  },
  {
    title: "Logística",
    description:
      "Seguimiento de eventos, evidencias y trazabilidad end‑to‑end con Containers para transporte y contenedores.",
  },
] as const;

const techStats = [
  { value: "12+", label: "tecnologías en el stack" },
  { value: "AWS", label: "infraestructura cloud" },
  { value: "CI/CD", label: "repos y despliegues" },
] as const;

const howItWorks = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Entendemos tu operación y definimos el alcance de Vortex y los módulos necesarios.",
  },
  {
    step: "02",
    title: "Implementación",
    description: "Configuración de Vortex, integraciones y puesta en marcha con entregables claros.",
  },
  {
    step: "03",
    title: "Automatización",
    description: "Flujos, alertas y tableros para monitorear y ejecutar con menos fricción.",
  },
  {
    step: "04",
    title: "Escalamiento",
    description: "Agrega Apex, Finanzs o Containers conforme crece tu operación.",
  },
] as const;

const techStack: { id: TechId; label: string; src?: string }[] = [
  { id: "nextjs", label: "Next.js", src: "/next.svg" },
  { id: "react", label: "React", src: "/react.svg" },
  { id: "tailwind", label: "Tailwind CSS", src: "/tailwindcss.svg" },
  { id: "shadcn", label: "shadcn/ui", src: "/shadcnui.svg" },
  { id: "typescript", label: "TypeScript", src: "/typescript.svg" },
  { id: "github", label: "GitHub", src: "/github.svg" },
  { id: "aws", label: "AWS", src: "/aws.svg" },
  { id: "amplify", label: "Amplify" },
  { id: "cdk", label: "CDK", src: "/cdk.svg" },
  { id: "cognito", label: "Cognito" },
  { id: "dynamodb", label: "DynamoDB" },
  { id: "s3", label: "S3", src: "/s3.svg" },  
  { id: "nodejs", label: "Node.js", src: "/nodedotjs.svg" },
  { id: "vercel", label: "Vercel", src: "/vercel.svg" },
  { id: "eslint", label: "ESLint", src: "/eslint.svg" },
  { id: "figma", label: "Figma", src: "/figma(1).svg" },
];

const faqs = [
  {
    q: "¿Puedo contratar un producto y después sumar otro?",
    a: "Sí. La suite está pensada para combinarse. Puedes empezar con un producto y agregar módulos conforme cambien tus necesidades.",
  },
  {
    q: "¿Se puede integrar con mis sistemas actuales?",
    a: "Sí. Trabajamos con integraciones vía API, webhooks y conectores según tu stack. Definimos el alcance en el diagnóstico.",
  },
  {
    q: "¿Cuánto tarda una implementación típica?",
    a: "Depende del alcance e integraciones. Normalmente iniciamos con una primera entrega funcional y luego iteramos por módulos.",
  },
  {
    q: "¿Qué tipo de soporte ofrecen?",
    a: "Acompañamiento en onboarding, soporte técnico y mejoras evolutivas. El nivel exacto depende del plan y del alcance del proyecto.",
  },
] as const;

export default function ProductosPage() {
  const creator = products.find((p) => p.kind === "creadores");
  const modules = products.filter((p) => p.kind === "modulo");

  return (
    <div className="flex flex-col">
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 md:text-7xl">
                MetaWeb Dev Solutions
              </h1>

              <p className="max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
                Somos una empresa de desarrollo de software. Creamos Vortex como una plataforma
                central para operar, integrar y escalar procesos, con módulos especializados.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={creator?.href ?? "/site/recursos"}
                  target={creator?.href?.startsWith("http") ? "_blank" : undefined}
                  rel={creator?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                >
                  Visitar MetaWeb Dev Solutions
                </Link>
                <Link
                  href="#modulos"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-50"
                >
                  Explorar módulos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 text-center items-center">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                Herramientas e inteligencias ocupadas
              </h2>
              <p className="max-w-3xl text-sm leading-6 text-zinc-600 md:text-base">
                Stack moderno para construir, desplegar y operar Vortex con calidad, velocidad y
                escalabilidad.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 text-xs font-semibold text-zinc-500">
              <div className="h-px w-10 bg-black/10" />
              <div className="inline-flex items-center gap-2">
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
                  className="text-zinc-950"
                >
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                  <path d="M16.24 16.24l2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="M4.93 19.07l2.83-2.83" />
                  <path d="M16.24 7.76l2.83-2.83" />
                </svg>
                Usado en el desarrollo de Vortex
              </div>
              <div className="h-px w-10 bg-black/10" />
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />

                <div className={`flex w-max ${styles.marqueeTrack}`}>
                  <div className="flex">
                    {techStack.map((t) => (
                      <div
                        key={t.id}
                        className="flex h-20 w-44 items-center justify-center border-r border-black/10 bg-white px-8"
                        title={t.label}
                      >
                        <div className="text-zinc-950">
                          <TechLogo id={t.id} label={t.label} src={t.src} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex" aria-hidden>
                    {techStack.map((t) => (
                      <div
                        key={`${t.id}-dup`}
                        className="flex h-20 w-44 items-center justify-center border-r border-black/10 bg-white px-8"
                        title={t.label}
                      >
                        <div className="text-zinc-950">
                          <TechLogo id={t.id} label={t.label} src={t.src} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 pt-2 md:grid-cols-3">
              {techStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-5xl font-semibold tracking-tight text-zinc-950">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-zinc-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                Ecosistema Vortex
              </h2>
              <p className="max-w-3xl text-sm leading-6 text-zinc-600 md:text-base">
                Vortex está compuesto por módulos que resuelven áreas específicas. Puedes iniciar con
                uno y sumar el resto conforme crezca tu operación.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {products.map((p) => (
                <article
                  key={p.id}
                  className="rounded-3xl border border-black/10 bg-white p-6 md:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-zinc-50">
                      {"logoSrc" in p ? (
                        <Image
                          src={p.logoSrc}
                          alt={p.name}
                          width={96}
                          height={96}
                          className="h-10 w-auto"
                        />
                      ) : (
                        <span className="text-lg font-bold text-zinc-950">
                          {"logoText" in p ? p.logoText : ""}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-zinc-950">{p.name}</h3>
                        <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-2.5 py-1 text-xs font-semibold text-zinc-950">
                          {p.kind === "creadores" ? "Creadores" : "Módulo"}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{p.description}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-2">
                    {p.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-sm text-zinc-700">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-black" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      href={p.href}
                      target={p.href.startsWith("http") ? "_blank" : undefined}
                      rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex h-10 items-center justify-center rounded-full bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                    >
                      {p.hrefLabel}
                    </Link>
                    <Link
                      href="/site/integraciones"
                      className="inline-flex h-10 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-50"
                    >
                      Ver integraciones
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="modulos" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                Módulos dentro de Vortex
              </h2>
              <p className="max-w-3xl text-sm leading-6 text-zinc-600 md:text-base">
                Cada módulo se integra a Vortex para compartir datos, roles y trazabilidad en un solo
                lugar.
              </p>
            </div>

            <div className="grid gap-6">
              {modules.map((p) => (
                <section
                  key={p.id}
                  id={p.id}
                  className="rounded-3xl border border-black/10 bg-white p-6 md:p-7"
                >
                  <div className="grid gap-6 md:grid-cols-2 md:items-start">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50">
                          {"logoSrc" in p ? (
                            <Image
                              src={p.logoSrc}
                              alt={p.name}
                              width={72}
                              height={72}
                              className="h-9 w-auto"
                            />
                          ) : (
                            <span className="text-base font-bold text-zinc-950">
                              {"logoText" in p ? p.logoText : ""}
                            </span>
                          )}
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                            Módulo
                          </div>
                          <div className="text-lg font-semibold text-zinc-950">{p.name}</div>
                        </div>
                      </div>
                      <p className="text-sm leading-6 text-zinc-600">{p.description}</p>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <Link
                          href="/site/recursos"
                          className="inline-flex h-10 items-center justify-center rounded-full bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                        >
                          Solicitar demo
                        </Link>
                        <Link
                          href="/site/precios"
                          className="inline-flex h-10 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-50"
                        >
                          Ver precios
                        </Link>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-zinc-50 p-5">
                      <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        Incluye
                      </div>
                      <div className="mt-3 grid gap-2">
                        {p.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2 text-sm text-zinc-700">
                            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-black" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}

              {creator ? (
                <section
                  id={creator.id}
                  className="rounded-3xl border border-black/10 bg-white p-6 md:p-7"
                >
                  <div className="grid gap-6 md:grid-cols-2 md:items-start">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50">
                          {"logoSrc" in creator ? (
                            <Image
                              src={creator.logoSrc}
                              alt={creator.name}
                              width={72}
                              height={72}
                              className="h-9 w-auto"
                            />
                          ) : null}
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                            Creadores
                          </div>
                          <div className="text-lg font-semibold text-zinc-950">{creator.name}</div>
                        </div>
                      </div>
                      <p className="text-sm leading-6 text-zinc-600">{creator.description}</p>
                      <Link
                        href={creator.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                      >
                        Visitar sitio
                      </Link>
                    </div>

                    <div className="rounded-2xl bg-zinc-50 p-5">
                      <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        Lo que hacemos
                      </div>
                      <div className="mt-3 grid gap-2">
                        {creator.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2 text-sm text-zinc-700">
                            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-black" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                Perfecto para
              </h2>
              <p className="text-sm leading-6 text-zinc-600 md:text-base">
                Equipos que necesitan resultados rápidos sin perder gobernanza, control y trazabilidad.
              </p>
            </div>

            <div className="grid gap-3">
              {audiences.map((a) => (
                <div key={a.title} className="rounded-2xl border border-black/10 bg-white p-5">
                  <div className="text-sm font-semibold text-zinc-950">{a.title}</div>
                  <div className="mt-1 text-sm leading-6 text-zinc-600">{a.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                Cómo funciona
              </h2>
              <p className="max-w-3xl text-sm leading-6 text-zinc-600 md:text-base">
                Un proceso simple para llevar tu operación a producción, integrando lo necesario sin
                frenar al equipo.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-4">
              {howItWorks.map((s) => (
                <div key={s.step} className="rounded-2xl bg-white p-5">
                  <div className="text-xs font-semibold text-zinc-500">{s.step}</div>
                  <div className="mt-2 text-sm font-semibold text-zinc-950">{s.title}</div>
                  <div className="mt-1 text-sm leading-6 text-zinc-600">{s.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/site/recursos"
                className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                Agendar demo
              </Link>
              <Link
                href="/site/documentacion"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-50"
              >
                Ver documentación
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                Preguntas frecuentes
              </h2>
              <p className="text-sm leading-6 text-zinc-600 md:text-base">
                Respuestas rápidas para ayudarte a elegir y planear tu implementación.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-black/10 bg-white p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-zinc-950">
                    <span>{f.q}</span>
                    <span className="text-zinc-500">+</span>
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-zinc-600">{f.a}</div>
                </details>
              ))}
              <Link
                href="/site/recursos"
                className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

