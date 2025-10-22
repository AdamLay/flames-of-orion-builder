interface KeywordProps {
  children: React.ReactNode;
}

export default function Keyword({ children }: KeywordProps) {
  return <span className="text-title font-semibold">{children}</span>;
}
