// page for AI Agent creation wizard
"use client";

import AgentWizard from "../../../../components/ai-agents/AgentWizard";

export default function CreateAgentPage() {
  return (
    <section className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Create New AI Agent
      </h1>
      <AgentWizard />
    </section>
  );
}
