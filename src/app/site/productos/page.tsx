import Image from "next/image";
import Link from "next/link";

import styles from "./productos.module.css";
import { SolutionsCarousel } from "./solutions-carousel";

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
  | "stripe"
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

  if (id === "stripe") {
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
      "ERP y CRM empresarial para centralizar operación, ventas y gestión interna en un solo sistema.",
    logoSrc: "/apex.svg",
    href: "#metaweb-apex",
    hrefLabel: "Ver detalles",
    kind: "modulo",
    highlights: [
      "ERP empresarial",
      "CRM y ventas",
      "Reportes y control",
    ],
  },
  {
    id: "metaweb-finanzs",
    name: "MetaWeb Finanzs",
    description:
      "Gestor de finanzas personales y empresariales con control, reportes y visibilidad para decidir con confianza.",
    logoText: "F",
    href: "#metaweb-finanzs",
    hrefLabel: "Ver detalles",
    kind: "modulo",
    highlights: ["Finanzas personales", "Finanzas empresariales", "Reportes y control"],
  },
  {
    id: "metaweb-containers",
    name: "MetaWeb Containers",
    description:
      "Plataforma para gestión de inventarios, ventas y operación con trazabilidad y control.",
    logoText: "C",
    href: "#metaweb-containers",
    hrefLabel: "Ver detalles",
    kind: "modulo",
    highlights: ["Inventarios", "Ventas", "Control operativo"],
  },
] as const;

const techStats = [
  { value: "12+", label: "tecnologías en el stack" },
  { value: "AWS", label: "infraestructura cloud" },
  { value: "CI/CD", label: "repos y despliegues" },
] as const;

const techStack: { id: TechId; label: string; src?: string }[] = [
  { id: "nextjs", label: "Next.js", src: "/logos/next.svg" },
  { id: "react", label: "React", src: "/logos/react.svg" }, 
  { id: "tailwind", label: "Tailwind CSS", src: "/logos/tailwindcss.svg" },
  { id: "shadcn", label: "shadcn/ui", src: "/logos/shadcn-ui.svg" },
  { id: "typescript", label: "TypeScript", src: "/logos/typescript.svg" },
  { id: "github", label: "GitHub", src: "/logos/github.svg" },
  { id: "aws", label: "AWS", src: "/logos/aws.svg" },
  { id: "amplify", label: "Amplify", src: "/logos/Amplify.svg" },
  { id: "cdk", label: "CDK", src: "/logos/CDK.svg" },
  { id: "cognito", label: "Cognito", src: "/logos/Cognito.svg" }, 
  { id: "stripe", label: "Stripe", src: "/logos/stripe.svg" },
  { id: "s3", label: "S3", src: "/logos/s3.svg" },  
  { id: "nodejs", label: "Node.js", src: "/logos/nodejs.svg" },
  { id: "vercel", label: "Vercel", src: "/logos/vercel.svg" },
  { id: "eslint", label: "ESLint", src: "/logos/eslint.svg" },
  { id: "figma", label: "Figma", src: "/logos/figma.svg" },
] ;

const testimonials = [
  {
    name: "Andrea López",
    handle: "@andreaops",
    text: "Con Vortex automatizamos el seguimiento operativo y mejoramos la visibilidad del transporte en semanas.",
  },
  {
    name: "Carlos Méndez",
    handle: "@carloscrm",
    text: "Apex nos ayudó a ordenar ventas y operación en un solo ERP/CRM. El equipo trabaja con datos consistentes.",
  },
  {
    name: "Fernanda Ruiz",
    handle: "@ferfinanzas",
    text: "Finanzs nos dio control financiero claro para decisiones rápidas, tanto en lo personal como en la empresa.",
  },
  {
    name: "Miguel Torres",
    handle: "@miguelinv",
    text: "Con Containers gestionamos inventarios y ventas con trazabilidad. Menos errores, más control.",
  },
  {
    name: "Sofía Vargas",
    handle: "@sofiaops",
    text: "La implementación con MetaWeb Dev Solutions fue por etapas y sin fricción. Entregas claras y soporte constante.",
  },
  {
    name: "Javier Salinas",
    handle: "@javiers",
    text: "Integraciones y automatizaciones bien pensadas. Vortex encajó con nuestros sistemas sin complicaciones.",
  },
] as const;
const faqSections = [
  {
    title: "General",
    items: [
      {
        q: "¿Puedo contratar un producto y después sumar otro?",
        a: "Sí. La suite está pensada para combinarse. Puedes empezar con un producto y agregar módulos conforme cambien tus necesidades.",
      },
      {
        q: "¿Se puede integrar con mis sistemas actuales?",
        a: "Sí. Trabajamos con integraciones vía API, webhooks y conectores según tu stack. Definimos el alcance en el diagnóstico.",
      },
    ],
  },
  {
    title: "Implementación",
    items: [
      {
        q: "¿Cuánto tarda una implementación típica?",
        a: "Depende del alcance e integraciones. Normalmente iniciamos con una primera entrega funcional y luego iteramos por módulos.",
      },
      {
        q: "¿Qué tipo de soporte ofrecen?",
        a: "Acompañamiento en onboarding, soporte técnico y mejoras evolutivas. El nivel exacto depende del plan y del alcance del proyecto.",
      },
    ],
  },
] as const;

export default function ProductosPage() {
  const creator = products.find((p) => p.kind === "creadores");

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
                de logística y transporte que engloba múltiples funcionalidades y se integra con un
                ecosistema de productos: Apex (ERP/CRM), Finanzs (finanzas) y Containers (inventarios
                y ventas).
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
                  href="#comentarios"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-50"
                >
                  Ver comentarios
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
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                Ecosistema MetaWeb Dev Solutions
              </h2>
              <p className="text-sm leading-6 text-zinc-600 md:text-base">
                Un conjunto de productos creados por MetaWeb Dev Solutions para cubrir operación,
                finanzas, logística e inventarios.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-black-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-950">Vortex Platform</div>
                  <div className="mt-1 text-sm leading-6 text-zinc-600">
                    Plataforma de logística y transporte que engloba múltiples funcionalidades para la
                    operación.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 text-black-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-950">MetaWeb Apex</div>
                  <div className="mt-1 text-sm leading-6 text-zinc-600">
                    ERP y CRM empresarial para centralizar procesos, ventas y operación.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 text-black-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-950">MetaWeb Finanzs</div>
                  <div className="mt-1 text-sm leading-6 text-zinc-600">
                    Gestor de finanzas personales y empresariales con reportes y control.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 text-black-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-950">MetaWeb Containers</div>
                  <div className="mt-1 text-sm leading-6 text-zinc-600">
                    Plataforma para inventarios, ventas y gestión operativa.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="comentarios" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 items-center text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                Lo que dicen nuestros usuarios
              </h2>
              <p className="max-w-3xl text-sm leading-6 text-zinc-600 md:text-base">
                Opiniones sobre Vortex y el ecosistema de soluciones creado por MetaWeb Dev Solutions.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl ">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

              <div className="flex flex-col gap-4 p-6">
                <div className="overflow-hidden">
                  <div className={`flex w-max ${styles.marqueeTrackSlow}`}>
                    <div className="flex gap-4">
                      {testimonials.map((t) => (
                        <div
                          key={t.handle}
                          className="w-[320px] rounded-2xl border border-black/10 bg-white p-5"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-sm font-semibold text-zinc-950">
                                {t.name
                                  .split(" ")
                                  .slice(0, 2)
                                  .map((p) => p[0])
                                  .join("")}
                              </div>
                              <div className="min-w-0">
                                <div className="truncate text-sm font-semibold text-zinc-950">
                                  {t.name}
                                </div>
                                <div className="truncate text-xs text-zinc-500">{t.handle}</div>
                              </div>
                            </div>
                            <div className="text-zinc-400">↗</div>
                          </div>
                          <div className="mt-4 text-sm leading-6 text-zinc-700">“{t.text}”</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4" aria-hidden>
                      {testimonials.map((t) => (
                        <div
                          key={`${t.handle}-dup`}
                          className="w-[320px] rounded-2xl border border-black/10 bg-white p-5"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-sm font-semibold text-zinc-950">
                                {t.name
                                  .split(" ")
                                  .slice(0, 2)
                                  .map((p) => p[0])
                                  .join("")}
                              </div>
                              <div className="min-w-0">
                                <div className="truncate text-sm font-semibold text-zinc-950">
                                  {t.name}
                                </div>
                                <div className="truncate text-xs text-zinc-500">{t.handle}</div>
                              </div>
                            </div>
                            <div className="text-zinc-400">↗</div>
                          </div>
                          <div className="mt-4 text-sm leading-6 text-zinc-700">“{t.text}”</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div className={`flex w-max ${styles.marqueeTrackReverse}`}>
                    <div className="flex gap-4">
                      {testimonials.map((t) => (
                        <div
                          key={`${t.handle}-r`}
                          className="w-[320px] rounded-2xl border border-black/10 bg-white p-5"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-sm font-semibold text-zinc-950">
                                {t.name
                                  .split(" ")
                                  .slice(0, 2)
                                  .map((p) => p[0])
                                  .join("")}
                              </div>
                              <div className="min-w-0">
                                <div className="truncate text-sm font-semibold text-zinc-950">
                                  {t.name}
                                </div>
                                <div className="truncate text-xs text-zinc-500">{t.handle}</div>
                              </div>
                            </div>
                            <div className="text-zinc-400">↗</div>
                          </div>
                          <div className="mt-4 text-sm leading-6 text-zinc-700">“{t.text}”</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4" aria-hidden>
                      {testimonials.map((t) => (
                        <div
                          key={`${t.handle}-r-dup`}
                          className="w-[320px] rounded-2xl border border-black/10 bg-white p-5"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-sm font-semibold text-zinc-950">
                                {t.name
                                  .split(" ")
                                  .slice(0, 2)
                                  .map((p) => p[0])
                                  .join("")}
                              </div>
                              <div className="min-w-0">
                                <div className="truncate text-sm font-semibold text-zinc-950">
                                  {t.name}
                                </div>
                                <div className="truncate text-xs text-zinc-500">{t.handle}</div>
                              </div>
                            </div>
                            <div className="text-zinc-400">↗</div>
                          </div>
                          <div className="mt-4 text-sm leading-6 text-zinc-700">“{t.text}”</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
          <div className="rounded-3xl bg-black px-6 py-12 text-center text-white md:px-14 md:py-16">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Get started
              </div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                ¿Listo para iniciar?
              </h2>
              <p className="text-sm leading-6 text-white/80 md:text-base">
                Empieza con Vortex y escala con Apex, Finanzs y Containers. Todo con MetaWeb Dev Solutions.
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/site/recursos"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition-colors hover:bg-zinc-100"
                >
                  Iniciar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SolutionsCarousel />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-16">
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Preguntas frecuentes.
            </h2>
            <div className="h-px bg-black/10" />

            <div className="flex flex-col gap-12">
              {faqSections.map((section) => (
                <div
                  key={section.title}
                  className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-10"
                >
                  <div className="text-sm font-semibold text-zinc-950">{section.title}</div>
                  <div className="border-t border-black/10">
                    {section.items.map((f) => (
                      <details key={f.q} className="group border-b border-black/10 py-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-semibold text-zinc-950">
                          <span>{f.q}</span>
                          <span className="text-zinc-500 transition-transform group-open:rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </span>
                        </summary>
                        <div className="mt-3 pr-8 text-sm leading-6 text-zinc-600">
                          {f.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

