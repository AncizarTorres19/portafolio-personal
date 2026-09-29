import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Command,
  Layers3,
  Mail,
  Menu,
  Moon,
  Sparkles,
  Sun,
  Workflow,
  X,
} from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { projects, type ProjectCategory } from "./data/projects";
import "./styles/portfolio.css";

const filters: { label: string; value: ProjectCategory | "todos" }[] = [
  { label: "Todo", value: "todos" },
  { label: "Productos", value: "producto" },
  { label: "Laboratorio", value: "laboratorio" },
  { label: "Rutas de aprendizaje", value: "aprendizaje" },
  { label: "Académicos", value: "academico" },
];

const socials = [
  { label: "GitHub", url: "https://github.com/AncizarTorres19" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ancizar-torres-lopez-673a591a1" },
  { label: "X", url: "https://x.com/ancizardev" },
  { label: "Instagram", url: "https://www.instagram.com/ancizar_torres19" },
  { label: "Facebook", url: "https://www.facebook.com/share/19dm25eUx6/" },
];

function getInitialTheme(): "dark" | "light" {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

/**
 * Personal portfolio for Ancizar Torres, featuring a filterable project archive.
 */
function App() {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "todos">(
    "todos",
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const visibleProjects = projects.filter(
    (project) => activeFilter === "todos" || project.category === activeFilter,
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <div className="site-shell">
        <header className="site-header">
          <a className="brand" href="#inicio" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">
              A<span>.</span>
            </span>
            <span className="brand-label">PORTAFOLIO / 2026</span>
          </a>

          <button
            className="icon-button mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>

          <nav
            className={`site-nav${menuOpen ? " is-open" : ""}`}
            id="main-navigation"
            aria-label="Navegación principal"
          >
            <a href="#proyectos" onClick={closeMenu}>
              Proyectos <span>{String(projects.length).padStart(2, "0")}</span>
            </a>
            <a href="#enfoque" onClick={closeMenu}>Enfoque</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
            <a
              className="nav-github"
              href="https://github.com/AncizarTorres19"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir el perfil de GitHub de Ancizar Torres"
            >
              <Code2 size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={13} />
            </a>
            <button
              className="icon-button theme-toggle"
              type="button"
              aria-label={
                theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
              }
              onClick={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>
        </header>

        <main id="contenido">
          <section className="hero section-wrap" id="inicio">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" />
                <span>Construyendo en público, aprendiendo siempre</span>
              </div>

              <h1>
                Código con intención.
                <br />
                <span>Soluciones con futuro.</span>
              </h1>

              <p className="hero-description">
                Soy <strong>Ancizar Torres</strong>, desarrollador de software.
                Exploro ideas, construyo productos y convierto aprendizajes en
                proyectos que puedes ver por dentro.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#proyectos">
                  Explorar proyectos
                  <ArrowDownRight size={16} />
                </a>
                <a
                  className="text-link"
                  href="https://github.com/AncizarTorres19"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mi GitHub
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="hero-note">
                <span className="note-line" />
                <span>Aprender. Diseñar. Construir. Repetir.</span>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="core-glow" />

              <div className="floating-label label-top">
                <span className="label-index">01</span>
                <span>IDEA</span>
              </div>
              <div className="floating-label label-bottom">
                <span className="label-index">05</span>
                <span>ITERACIÓN</span>
              </div>

              <div className="hero-card">
                <div className="hero-card-top">
                  <span className="window-dots"><i /><i /><i /></span>
                  <span>trabajo-en-progreso.tsx</span>
                  <span className="card-lock"><Command size={12} /></span>
                </div>
                <div className="hero-code">
                  <span><b>01</b><i>const</i> vision =</span>
                  <span><b>02</b><em>"hacerlo mejor"</em>;</span>
                  <span><b>03</b></span>
                  <span><b>04</b><i>while</i> (curiosidad) {'{'}</span>
                  <span><b>05</b>&nbsp; construir();</span>
                  <span><b>06</b>&nbsp; aprender();</span>
                  <span><b>07</b>{'}'}</span>
                  <span className="code-cursor"><b>08</b><span /></span>
                </div>
                <div className="hero-card-footer">
                  <span><span className="mini-live-dot" /> SISTEMA ACTIVO</span>
                  <span>v.01.26</span>
                </div>
              </div>

              <span className="art-coordinate coord-top">SISTEMAS / PERSONAS / IDEAS</span>
              <span className="art-coordinate coord-bottom">UNA IDEA A LA VEZ.</span>
            </div>

            <a className="scroll-cue" href="#proyectos">
              <ArrowDown size={14} />
              <span>DESLIZA PARA EXPLORAR</span>
            </a>
          </section>

          <section className="projects-section section-wrap" id="proyectos">
            <SectionHeading
              index="01"
              eyebrow="UN RECORRIDO POR MI TRABAJO"
              title="Proyectos de mi recorrido"
              subtitle="Desde mis primeros pasos hasta proyectos académicos y experimentos: ideas hechas código que puedes explorar."
              trailing={`${String(visibleProjects.length).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`}
            />

            <div className="project-toolbar">
              <div
                className="filter-list"
                role="group"
                aria-label="Filtrar proyectos por categoría"
              >
                {filters.map((filter) => {
                  const active = activeFilter === filter.value;
                  return (
                    <button
                      className={`filter-chip${active ? " is-active" : ""}`}
                      type="button"
                      key={filter.value}
                      aria-pressed={active}
                      onClick={() => setActiveFilter(filter.value)}
                    >
                      {active && <span className="filter-indicator" />}
                      {filter.label}
                    </button>
                  );
                })}
              </div>
              <span className="toolbar-hint">
                {String(visibleProjects.length).padStart(2, "0")} PROYECTOS VISIBLES
                <ArrowDownRight size={13} />
              </span>
            </div>

            <div className="projects-grid" aria-live="polite">
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </section>

          <section className="approach-section section-wrap" id="enfoque">
            <SectionHeading
              index="02"
              eyebrow="DETENCIÓN DEL SCROLL, PEQUEÑA REFLEXIÓN"
              title="No solo escribo código."
              subtitle="Me interesa entender qué necesita una persona, diseñar una solución clara y construirla para que pueda crecer."
              trailing={<Sparkles size={16} aria-hidden="true" />}
            />

            <div className="approach-grid">
              <article className="approach-card">
                <span className="approach-number">01 / PENSAR</span>
                <span className="approach-icon"><Workflow size={21} /></span>
                <h3>Primero, la pregunta correcta.</h3>
                <p>
                  Exploro el problema antes de elegir la tecnología. Menos
                  suposiciones; mejores decisiones desde el inicio.
                </p>
              </article>
              <article className="approach-card">
                <span className="approach-number">02 / CONSTRUIR</span>
                <span className="approach-icon"><Layers3 size={21} /></span>
                <h3>Diseño modular por naturaleza.</h3>
                <p>
                  Sistemas organizados, componentes reutilizables y un código
                  que alguien más pueda entender y continuar.
                </p>
              </article>
              <article className="approach-card">
                <span className="approach-number">03 / EVOLUCIONAR</span>
                <span className="approach-icon"><Code2 size={21} /></span>
                <h3>Cada versión puede ser mejor.</h3>
                <p>
                  Aprendo creando. Iterar no es un plan de emergencia: es
                  parte del proceso de construir algo valioso.
                </p>
              </article>
            </div>

            <div className="stack-strip">
              <span className="stack-label">EN MI ESPACIO DE TRABAJO</span>
              <div className="stack-list" aria-label="Lenguajes y tecnologías en mis proyectos">
                <span>TypeScript</span><i /><span>React</span><i />
                <span>Node.js</span><i /><span>Python</span><i />
                <span>Java</span><i /><span>.NET</span>
              </div>
              <span className="stack-hint">Y MÁS EN CAMINO <ArrowRight size={12} /></span>
            </div>
          </section>

          <section className="contact-section section-wrap" id="contacto">
            <div className="contact-signal" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
            <div className="contact-copy">
              <span className="contact-eyebrow"><span className="status-dot" /> VENTANA ABIERTA</span>
              <h2>¿Construimos<br /><span>algo interesante?</span></h2>
              <p>Las buenas ideas empiezan con una conversación. Cuéntame qué tienes en mente.</p>
              <a
                className="button button-contact"
                href="mailto:ancizar.torres.dev@gmail.com?subject=Oportunidad%20laboral%20%7C%20Portafolio"
              >
                Escríbeme por correo
                <Mail size={16} />
              </a>
              <a className="contact-email" href="mailto:ancizar.torres.dev@gmail.com">
                ancizar.torres.dev@gmail.com
              </a>
              <nav className="contact-socials" aria-label="Redes sociales">
                {socials.map((social) => (
                  <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                    {social.label} <ArrowUpRight size={12} />
                  </a>
                ))}
              </nav>
            </div>
            <div className="contact-coordinates" aria-hidden="true">
              <span>CORREO&nbsp; · REDES</span>
              <span>CONTACTO LABORAL</span>
              <span>CONVERSACIÓN ABIERTA</span>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <a className="footer-brand" href="#inicio"><span>A.</span> ANCIZAR TORRES</a>
          <span className="footer-copy">HECHO CON CURIOSIDAD <Sparkles size={12} /></span>
          <a
            className="footer-link"
            href="https://github.com/AncizarTorres19"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <ArrowUpRight size={12} />
          </a>
          <span className="footer-year">© 2026</span>
        </footer>
      </div>
    </>
  );
}

export default App;
