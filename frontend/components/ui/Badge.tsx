/*
  Simple status badge with color variants.
  Props:
    - variant: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost' | 'active' | 'inactive'
    - children: React.ReactNode
*/

export default function Badge({
  variant = "new",
  children,
}: {
  variant?: string;
  children: React.ReactNode;
}) {
  const base = "px-2 py-0.5 text-xs font-medium rounded-full";
  const colors: Record<string, string> = {
    new: "bg-blue-100 text-blue-800",
    contacted: "bg-indigo-100 text-indigo-800",
    qualified: "bg-green-100 text-green-800",
    converted: "bg-purple-100 text-purple-800",
    lost: "bg-red-100 text-red-800",
    active: "bg-emerald-100 text-emerald-800",
    inactive: "bg-gray-100 text-gray-800",
  };
  const color = colors[variant] || colors["new"];
  return <span className={`${base} ${color}`}>{children}</span>;
}
