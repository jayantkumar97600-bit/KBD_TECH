/*
  AgentCard – displays an AI agent summary in the agents grid.
  Includes avatar, name, business, provider, status badge, key metrics, and action icons.
*/

"use client";


import AgentStatusBadge from "./AgentStatusBadge";

export interface Agent {
  id: number;
  name: string;
  businessName: string;
  industry: string;
  provider: string;
  status: string;
  callsHandled: number;
  appointmentsBooked: number;
  avgResponseTime: string;
  lastActive: string; // ISO string
  avatarUrl?: string;
  workflowSettings?: Record<string, boolean>;
}

interface Props {
  agent: Agent;
  onEdit?: (id: number) => void;
  onToggleStatus?: (id: number) => void;
  onAnalytics?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function AgentCard({
  agent,
  onEdit,
  onToggleStatus,
  onAnalytics,
  onDelete,
}: Props) {
  const isActive = agent.status.toLowerCase() === "active";

  return (
    <div className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center gap-3">
        {agent.avatarUrl ? (
          <img src={agent.avatarUrl} alt={agent.name} className="w-10 h-10 rounded-full" />
        ) : (
          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
        )}
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{agent.name}</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">{agent.businessName}</p>
        </div>
        <AgentStatusBadge status={agent.status} />
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
        <div>Provider</div>
        <div className="font-medium">{agent.provider}</div>
        <div>Calls</div>
        <div className="font-medium">{agent.callsHandled}</div>
        <div>Appts</div>
        <div className="font-medium">{agent.appointmentsBooked}</div>
        <div>Resp time</div>
        <div className="font-medium">{agent.avgResponseTime}</div>
        <div>Last active</div>
        <div className="font-medium">{new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date(agent.lastActive))}</div>
      </div>

      {/* Action bar */}
      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={() => onEdit?.(agent.id)}
          className="px-2 py-1 text-xs rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          title="Edit"
        >
          Edit
        </button>
        <button
          onClick={() => onToggleStatus?.(agent.id)}
          className="px-2 py-1 text-xs rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          title={isActive ? "Pause" : "Activate"}
        >
          {isActive ? "Pause" : "Activate"}
        </button>
        <button
          onClick={() => onAnalytics?.(agent.id)}
          className="px-2 py-1 text-xs rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          title="Analytics"
        >
          Analytics
        </button>
        <button
          onClick={() => onDelete?.(agent.id)}
          className="px-2 py-1 text-xs rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600"
          title="Delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
