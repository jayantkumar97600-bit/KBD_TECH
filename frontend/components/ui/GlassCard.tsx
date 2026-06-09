/*
  Reusable glass‑morphism card component.
  Props:
    - children: React.ReactNode
    - className?: additional Tailwind classes
*/

export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 rounded-xl shadow-lg p-4 ${className}`}
    >
      {children}
    </div>
  );
}
