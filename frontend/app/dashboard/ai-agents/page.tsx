/*
  AI Agents management page – premium UI.
  Renders top KPI cards, a grid of agent cards, and a CTA to create a new agent.
  All data is mock‑data only.
*/

"use client";

import { Phone, Clock, Play, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { aiAgents } from "../../../lib/mockData";
import AgentStatsCard from "../../../components/ai-agents/AgentStatsCard";
import AgentCard, { Agent } from "../../../components/ai-agents/AgentCard";
import GlassCard from "../../../components/ui/GlassCard";
import CreateAgentModal from "../../../components/ai-agents/CreateAgentModal";
import { useState } from "react";

export default function AIAgentsPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  // compute aggregates
  const totalAgents = aiAgents.length;
  const activeAgents = aiAgents.filter((a) => a.status.toLowerCase() === "active").length;
  const totalCalls = aiAgents.reduce((sum, a) => sum + (a.callsHandled ?? 0), 0);
  const totalAppts = aiAgents.reduce((sum, a) => sum + (a.appointmentsBooked ?? 0), 0);
  const avgResp =
    aiAgents.reduce((sum, a) => sum + parseFloat(a.avgResponseTime.replace(/[^0-9.]/g, "")), 0) /
    totalAgents;

  return (
    <section className="space-y-6 p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">AI Agents</h1>

      {/* Top KPI cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <AgentStatsCard title="Total Agents" value={totalAgents} />
        <AgentStatsCard title="Active Agents" value={activeAgents} />
        <AgentStatsCard title="Calls Handled" value={totalCalls} />
        <AgentStatsCard title="Appointments" value={totalAppts} />
        <AgentStatsCard title="Avg Response" value={avgResp.toFixed(1) + "s"} />
      </div>

      {/* Create CTA */}
      <div className="flex justify-end">
        <button
          onClick={() => router.push('/dashboard/ai-agents/create')}
          className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition"
        >
          Create AI Agent
        </button>
      </div>

      {/* Agents Grid */}
      <GlassCard className="p-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {aiAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent as Agent}
              onEdit={(id) => console.log('edit', id)}
              onToggleStatus={(id) => console.log('toggle', id)}
              onAnalytics={(id) => console.log('analytics', id)}
              onDelete={(id) => console.log('delete', id)}
            />
          ))}
        </div>
      </GlassCard>

      {/* Modal placeholder */}
      {showModal && <CreateAgentModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
