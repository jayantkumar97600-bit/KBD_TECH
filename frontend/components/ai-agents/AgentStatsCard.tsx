/*
  AgentStatsCard – reusable KPI card for AI Agents page.
*/

interface Props {
  title: string;
  value: string | number;
}

export default function AgentStatsCard({ title, value }: Props) {
  return (
    <div className="flex items-center rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{value}</p>
      </div>
    </div>
  );
}
