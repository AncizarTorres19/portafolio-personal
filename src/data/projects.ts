import {
  Boxes,
  BrainCircuit,
  ClipboardList,
  Container,
  CodeXml,
  Compass,
  Database,
  GraduationCap,
  LibraryBig,
  MessageCircle,
  Network,
  Scale,
  Server,
  Smartphone,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

export type ProjectCategory =
  | "producto"
  | "laboratorio"
  | "aprendizaje"
  | "academico";

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
  relatedLabel?: string;
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
  {
    slug: "representacion-datos-preprocesamiento",
    name: "Representación de datos y preprocesamiento",
    description:
      "Colección de ejercicios y scripts en Python para explorar probabilidad, normalización, similitud, recomendaciones, detección de fraude e imágenes.",
    category: "laboratorio",
    kind: "LABORATORIO DE DATOS",
    technologies: ["Python"],
    displayLanguage: "Python",
    url: "https://github.com/AncizarTorres19/Representacion-de-datos-y-preprocesamiento",
    year: "2025",
    number: "06",
    visual: "ai",
    visualIndex: "06 — DATOS",
    visualLabel: "data / preprocessing",
    icon: Database,
  },
  {
    slug: "aunar-points",
    name: "Aunar Points",
    description:
      "Mi proyecto de grado, desarrollado como una aplicación Flutter y parte central de mi recorrido académico.",
    category: "academico",
    kind: "PROYECTO DE GRADO",
    technologies: ["Flutter", "Dart"],
    displayLanguage: "Dart",
    url: "https://github.com/AncizarTorres19/aunar_points",
    year: "2024",
    number: "07",
    visual: "mobile",
    visualIndex: "07 — GRADO",
    visualLabel: "aunar / points",
    icon: GraduationCap,
  },
  {
    slug: "vite-promedio",
    name: "Vite Promedio",
    description:
      "Proyecto básico para calcular promedios, utilizado por estudiantes de mi universidad como apoyo para practicar desarrollo web.",
    category: "academico",
    kind: "PROYECTO UNIVERSITARIO",
    technologies: ["React", "Vite", "JavaScript"],
    displayLanguage: "JavaScript",
    url: "https://github.com/AncizarTorres19/vite-promedio",
    year: "2024",
    number: "08",
    visual: "grades",
    visualIndex: "08 — UNIVERSIDAD",
    visualLabel: "vite / promedio",
    icon: CodeXml,
  },
  {
    slug: "library-manager",
    name: "Library Manager",
    description:
      "Proyecto front-end para la gestión de una biblioteca, construido con React y Material UI.",
    category: "producto",
    kind: "GESTIÓN / WEB",
    technologies: ["React", "Material UI"],
    displayLanguage: "JavaScript",
    url: "https://github.com/AncizarTorres19/library-manager",
    year: "2023",
    number: "09",
    visual: "books",
    visualIndex: "09 — BIBLIOTECA",
    visualLabel: "library / manager",
    icon: LibraryBig,
  },
  {
    slug: "socket-server-react-final",
    name: "Socket Server",
    description:
      "Servidor backend basado en Express y Socket.IO para manejar conexiones de sockets y middleware de la aplicación.",
    category: "producto",
    kind: "BACKEND / TIEMPO REAL",
    technologies: ["Node.js", "Express", "Socket.IO"],
    displayLanguage: "JavaScript",
    url: "https://github.com/AncizarTorres19/socket-server-react-final",
    year: "2023",
    number: "10",
    visual: "server",
    visualIndex: "10 — BACKEND",
    visualLabel: "server / sockets",
    icon: Server,
  },
  {
    slug: "chat-app",
    name: "Chat App",
    description:
      "Aplicación web de chat construida con React y Socket.IO para comunicar el cliente con servicios en tiempo real.",
    category: "producto",
    kind: "CHAT EN TIEMPO REAL",
    technologies: ["React", "Socket.IO"],
    displayLanguage: "JavaScript",
    url: "https://github.com/AncizarTorres19/chat-app",
    year: "2023",
    number: "11",
    visual: "chat",
    visualIndex: "11 — COMUNICACIÓN",
    visualLabel: "chat / live",
    icon: MessageCircle,
  },
  {
    slug: "algoritmo-del-banquero",
    name: "Algoritmo del banquero",
    description:
      "Proyecto académico para explorar el algoritmo del banquero y el análisis de asignación segura de recursos en sistemas operativos.",
    category: "laboratorio",
    kind: "ALGORITMOS",
    technologies: ["React", "JavaScript"],
    displayLanguage: "JavaScript",
    url: "https://github.com/AncizarTorres19/Algoritmo-del-banquero",
    year: "2022",
    number: "12",
    visual: "banker",
    visualIndex: "12 — SISTEMAS",
    visualLabel: "banker / algorithm",
    icon: Waypoints,
  },
  {
    slug: "react-hero-app-rrd-v5",
    name: "React Hero App",
    description:
      "Aplicación de práctica con React y React Router v5, organizada alrededor de una experiencia de navegación por rutas.",
    category: "aprendizaje",
    kind: "PRÁCTICA DE REACT",
    technologies: ["React", "React Router v5"],
    displayLanguage: "JavaScript",
    url: "https://github.com/AncizarTorres19/react-hero-app-rrd-v5",
    year: "2022",
    number: "13",
    visual: "heroes",
    visualIndex: "13 — NAVEGACIÓN",
    visualLabel: "heroes / routes",
    icon: Network,
  },
  {
    slug: "final-primer-proyecto",
    name: "Final",
    description:
      "Mi primer proyecto como desarrollador. Una pieza de mis comienzos con React que conservo como parte de mi recorrido de aprendizaje.",
    category: "aprendizaje",
    kind: "MI PRIMER PROYECTO",
    technologies: ["React", "JavaScript"],
    displayLanguage: "JavaScript",
    url: "https://github.com/AncizarTorres19/Final",
    year: "2021",
    number: "14",
    visual: "first",
    visualIndex: "14 — PRIMEROS PASOS",
    visualLabel: "first / build",
    icon: Smartphone,
  },
  {
    slug: "curso-de-docker-fundamentos",
    name: "Docker Fundamentos · Linktree",
    description:
      "Sitio de enlaces personal con frontend en nginx y API en Flask, orquestados con Docker Compose y desplegados en Azure Container Apps.",
    category: "laboratorio",
    kind: "DOCKER / CLOUD",
    technologies: ["Docker", "Azure", "Flask", "nginx"],
    displayLanguage: "Python",
    url: "https://github.com/AncizarTorres19/curso-de-docker-fundamentos",
    relatedUrl: "https://curso-frontend.ambitioussky-6c4af529.westus2.azurecontainerapps.io",
    relatedLabel: "Demo",
    year: "2026",
    number: "15",
    visual: "server",
    visualIndex: "15 — CONTENEDORES",
    visualLabel: "docker / azure",
    icon: Container,
  },
  {
    slug: "docker-avanzado",
    name: "Docker Avanzado",
    description:
      "Ejercicios de Docker avanzado: multi-stage, imágenes distroless, caché de capas, volúmenes, balanceo con nginx, escaneo de imágenes y CI con GitHub Actions.",
    category: "aprendizaje",
    kind: "DEVOPS",
    technologies: ["Docker", "Compose", "GitHub Actions"],
    displayLanguage: "Dockerfile",
    url: "https://github.com/AncizarTorres19/docker-avanzado",
    year: "2026",
    number: "16",
    visual: "server",
    visualIndex: "16 — DEVOPS",
    visualLabel: "docker / advanced",
    icon: Boxes,
  },
];
