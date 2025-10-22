import React, { ReactNode } from "react";

interface RulesSectionProps {
  title: string;
  children: ReactNode;
}

export function RulesSection({ title, children }: RulesSectionProps) {
  return (
    <section className="">
      <h2 className="sticky-title">{title}</h2>
      {children}
    </section>
  );
}
