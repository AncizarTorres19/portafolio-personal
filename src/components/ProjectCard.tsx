import { ArrowUpRight, Braces, CodeXml, ExternalLink, Layers3 } from "lucide-react";
import type { CSSProperties } from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryLabels: Record<Project["category"], string> = {
  producto: "PRODUCTO",
  laboratorio: "LABORATORIO",
  aprendizaje: "APRENDIZAJE",
  academico: "ACADÉMICO",
};

/**
 * Presents one data-driven project card with verified repository links.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const ProjectIcon = project.icon;

  return (
    <article
      className={`project-card project-card-${project.visual}`}
      style={{ "--card-order": index } as CSSProperties}
    >
      <div className="project-visual" aria-hidden="true">
        <div className="visual-grid" />
        <span className="visual-coordinate">{project.visualIndex}</span>
        <div className="visual-art">
          <div className="visual-window">
            <div className="visual-window-top">
              <span /><span /><span />
              <span className="visual-window-label">{project.visualLabel}</span>
            </div>
            <div className="visual-window-body">
              <span className="visual-art-icon"><ProjectIcon size={22} /></span>
              <div className="visual-lines"><i /><i /><i /></div>
              <div className="visual-tags">
                {project.technologies.slice(0, 3).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
          <span className="visual-orbit visual-orbit-a" />
          <span className="visual-orbit visual-orbit-b" />
          <span className="visual-accent-square" />
        </div>
        <div className="visual-bottom">
          <span><span className="visual-live-dot" /> {categoryLabels[project.category]}</span>
          <span>{project.year}</span>
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-card-heading">
          <span className="project-kicker"><span>{project.number}</span> {project.kind}</span>
          <a
            className="project-open"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir el repositorio ${project.name} en GitHub`}
          >
            <ArrowUpRight size={16} />
          </a>
        </div>

        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags" aria-label="Tecnologías">
          {project.technologies.map((technology) => (
            <span key={technology}><Braces size={11} />{technology}</span>
          ))}
        </div>

        <div className="project-card-footer">
          <a href={project.url} target="_blank" rel="noreferrer">
            Ver repositorio <ExternalLink size={13} />
          </a>
          {project.relatedUrl ? (
            <a
              href={project.relatedUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir el segundo repositorio de ${project.name}`}
            >
              API <Layers3 size={13} />
            </a>
          ) : (
            <span>{project.displayLanguage} <CodeXml size={13} /></span>
          )}
        </div>
      </div>
    </article>
  );
}
