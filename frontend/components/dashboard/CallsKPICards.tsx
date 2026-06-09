"use client";

import AgentStatsCard from "../ai-agents/AgentStatsCard";


export default function CallsKPICards() {
  // Mock KPI values – replace with real data later
  const totalCalls = 124;
  const missedCalls = 8;
  const avgDuration = "02:34";
  const aiResolutionRate = "78%";

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <AgentStatsCard title="Total Calls" value={totalCalls} />
      <AgentStatsCard title="Missed Calls" value={missedCalls} />
      <AgentStatsCard title="Avg Duration" value={avgDuration} />
      <AgentStatsCard title="AI Resolution" value={aiResolutionRate} />
    </div>
  );
}
