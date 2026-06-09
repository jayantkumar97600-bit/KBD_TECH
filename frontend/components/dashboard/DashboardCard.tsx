/*
  Reusable card for displaying a KPI on the dashboard.
  Props:
    - title: string – label of the metric
    - value: string – formatted value (e.g., "$12.3k")
    - icon?: React.ReactNode – optional Lucide icon
*/

export interface DashboardCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
}

export default function DashboardCard({ title, value, icon }: DashboardCardProps) {
  return (
    <div className="flex items-center rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition-shadow">
      {icon && <div className="mr-4 text-primary-500">{icon}</div>}
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{value}</p>
      </div>
    </div>
  );
}
