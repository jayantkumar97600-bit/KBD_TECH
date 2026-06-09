// ReviewLaunch – final step of the AI Agent creation wizard
"use client";

import GlassCard from "../ui/GlassCard";

export default function ReviewLaunch() {
  // Placeholder values – in a real implementation, data would be gathered from context or props
  return (
    <GlassCard className="p-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Review & Launch</h2>
      <div className="space-y-4">
        <section>
          <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">Selected Voice</h3>
          <p className="text-gray-700 dark:text-gray-300">[Voice details placeholder]</p>
        </section>
        <section>
          <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">Workflows</h3>
          <p className="text-gray-700 dark:text-gray-300">[Enabled automations placeholder]</p>
        </section>
        <section>
          <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">Business Info</h3>
          <p className="text-gray-700 dark:text-gray-300">[Business config placeholder]</p>
        </section>
        <section>
          <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">AI Personality</h3>
          <p className="text-gray-700 dark:text-gray-300">[Personality settings placeholder]</p>
        </section>
        <section className="flex justify-end mt-6">
          <button className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">
            Launch AI Agent
          </button>
        </section>
      </div>
    </GlassCard>
  );
}
