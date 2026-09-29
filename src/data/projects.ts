import {
  BrainCircuit,
  ClipboardList,
  CodeXml,
  Compass,
  Scale,
  type LucideIcon,
} from "lucide-react";

export type ProjectCategory = "producto" | "laboratorio" | "aprendizaje";

export interface Project {
  slug: string;
  name: string;
  description: string;
  category: ProjectCategory;
  kind: string;
  technologies: string[];
  displayLanguage: string;
  url: string;
  relatedUrl?: string;
  year: string;
  number: string;
  visual: string;
  visualIndex: string;
  visualLabel: string;
  icon: LucideIcon;
}

/**
 * Project portfolio data lives in one place so new work can be added safely.
 */
export const projects: Project[] = [
  {
    slug: "gestor-de-tareas",
    name: "Gestor de tareas",
    description:
      "Aplicación para organizar tareas con flujos completos de creación y seguimiento. Reúne una interfaz web y una API documentadas por separado.",
    category: "producto",
    kind: "FULL STACK",
    technologies: ["Next.js", "Prisma", "SQLite"],
    displayLanguage: "TypeScript",
    url: "https://github.com/AncizarTorres19/task-manager-app",
    relatedUrl: "https://github.com/AncizarTorres19/task-manager-server",
    year: "2024",
    number: "01",
    visual: "tasks",
    visualIndex: "01 — PRODUCTO",
    visualLabel: "workspace / tasks",
    icon: ClipboardList,
  },
  {
    slug: "simulador-ley-1581",
    name: "Simulador Ley 1581",
    description:
      "Experiencia web interactiva inspirada en la Ley 1581 de protección de datos personales. Proyecto independiente, construido como una página web.",
    category: "producto",
    kind: "EXPERIENCIA WEB",
    technologies: ["HTML"],
    displayLanguage: "HTML",
    url: "https://github.com/AncizarTorres19/simulador-ley-1581",
    year: "2026",
    number: "02",
    visual: "law",
    visualIndex: "02 — WEB",
    visualLabel: "ley / 1581",
    icon: Scale,
  },
  {
    slug: "openai-python-demos",
    name: "OpenAI · Python demos",
    description:
      "Colección de ejemplos que explora chat, streaming, llamadas asíncronas y patrones RAG usando el SDK de OpenAI y bibliotecas relacionadas.",
    category: "laboratorio",
    kind: "AI / LLM",
    technologies: ["Python", "OpenAI SDK", "RAG"],
    displayLanguage: "Python",
    url: "https://github.com/AncizarTorres19/python-openai-demos",
    year: "2025",
    number: "03",
    visual: "ai",
    visualIndex: "03 — EXPLORACIÓN",
    visualLabel: "models / prompts",
    icon: BrainCircuit,
  },
  {
    slug: "ruta-java",
    name: "Ruta profesional de Java",
    description:
      "Guía progresiva en español para aprender Java desde los fundamentos hasta concurrencia, arquitectura, observabilidad y criterio técnico.",
    category: "aprendizaje",
    kind: "OPEN SOURCE",
    technologies: ["Java", "Maven", "Testing"],
    displayLanguage: "Java",
    url: "https://github.com/AncizarTorres19/java-ruta-profesional",
    year: "2026",
    number: "04",
    visual: "java",
    visualIndex: "04 — APRENDER",
    visualLabel: "java / roadmap",
    icon: CodeXml,
  },
  {
    slug: "ruta-dotnet",
    name: "Ruta profesional de .NET",
    description:
      "Curso abierto de C# y .NET que recorre conceptos base, APIs, asincronía y temas de arquitectura con ejemplos ejecutables y pruebas.",
    category: "aprendizaje",
    kind: "OPEN SOURCE",
    technologies: ["C#", ".NET 10", "xUnit"],
    displayLanguage: "C#",
    url: "https://github.com/AncizarTorres19/dotnet-ruta-profesional",
    year: "2026",
    number: "05",
    visual: "dotnet",
    visualIndex: "05 — APRENDER",
    visualLabel: "dotnet / roadmap",
    icon: Compass,
  },
];
