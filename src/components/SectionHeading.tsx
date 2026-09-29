import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  trailing: ReactNode;
}

/**
 * Displays a consistent editorial heading for a portfolio section.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  trailing,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <div className="section-heading-copy">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <span className="section-trailing">{trailing}</span>
    </div>
  );
}
