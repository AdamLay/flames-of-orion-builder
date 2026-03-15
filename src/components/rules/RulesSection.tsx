import { ReactNode } from "react";

interface RulesSectionProps {
  title: string;
  children: ReactNode;
}

export function RulesSection({ title, children }: RulesSectionProps) {
  return (
    <section className="flex flex-col gap-2 mb-8 bg-base-200 p-4 rounded-sm">
      <h2 className="sticky-title mb-2">{title}</h2>
      {children}
    </section>
  );
}
