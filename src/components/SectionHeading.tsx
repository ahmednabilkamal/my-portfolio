import type { ReactNode } from 'react';

type SectionHeadingProps = {
  title: string;
  description?: ReactNode;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{title}</p>
      {description ? <h2>{description}</h2> : null}
    </div>
  );
}
