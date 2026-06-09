/*
  AgentStatusBadge – reusable status badge for AI agents.
  Supports statuses: Active, Paused, Inactive.
  Dark‑mode aware styling.
*/

export type AgentStatus = "Active" | "Paused" | "Inactive";

interface Props {
  status: AgentStatus | string;
}

const base = "px-2 py-0.5 text-xs font-medium rounded-full";

const colors: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  paused: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  inactive: "bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-200",
};

export default function AgentStatusBadge({ status }: Props) {
  const key = status.toString().toLowerCase();
  const color = colors[key] ?? colors["inactive"];
  const display = status.toString().charAt(0).toUpperCase() + status.toString().slice(1);
  return <span className={`${base} ${color}`}>{display}</span>;
}
