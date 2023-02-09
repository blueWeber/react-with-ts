import React, { ReactNode } from 'react';

type SectionProps = {
  title?: string;
  children?: ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title = 'My Subheading',
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};
