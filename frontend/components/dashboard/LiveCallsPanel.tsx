import { useState } from "react";
import { calls as mockCalls } from "../../lib/mockData";
import CallStatusBadge from "./CallStatusBadge";
import SentimentBadge from "./SentimentBadge";
import Badge from "../ui/Badge";

export default function LiveCallsPanel() {
  // For demo, consider calls with status not 'completed' as active
  const activeCalls = mockCalls.filter((c) => c.status !== "completed");
  const [filter, setFilter] = useState("");

  const filtered = activeCalls.filter((c) =>
    c.caller.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Live Calls</h2>
      <input
        type="text"
        placeholder="Search live calls…"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-h-60 overflow-y-auto">
        {filtered.map((call) => (
          <li key={call.id} className="py-2 flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {call.caller}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CallStatusBadge status={call.status as any} />
              <SentimentBadge sentiment={call.sentiment as any} />
            </div>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="py-2 text-gray-600 dark:text-gray-400">No active calls.</li>
        )}
      </ul>
    </div>
  );
}
