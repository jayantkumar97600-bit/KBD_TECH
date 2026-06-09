/*
  LeadStatusBadge – reusable status badge for leads.
  Supports statuses: new, contacted, qualified, converted, lost.
  Dark‑mode aware colors using Tailwind.
*/

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "appointment_booked"
  | "closed"
  | "lost";

interface Props {
  status: LeadStatus | string; // fallback to string for safety
}

const baseClasses = "px-2 py-0.5 text-xs font-medium rounded-full";

const variantColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  contacted: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  qualified: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  appointment_booked:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  closed:
    "bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300",
  lost: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

export default function LeadStatusBadge({ status }: Props) {
  const key = status.toString().toLowerCase();
  const colorClass = variantColors[key] ?? "bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-200";

  // Capitalize first letter for display
  const display = status.charAt(0).toUpperCase() + status.slice(1);

  return <span className={`${baseClasses} ${colorClass}`}>{display}</span>;
}
