/*
  CreateAgentModal – placeholder modal for creating a new AI agent.
  Implements a basic multi‑step wizard container (steps not implemented yet).
  Props:
    - onClose: () => void – closes the modal.
  The modal is a client component and uses Tailwind for glass‑morphism styling.
*/

"use client";



interface Props {
  onClose: () => void;
}

export default function CreateAgentModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl rounded-xl bg-white dark:bg-gray-800 p-6 shadow-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Close"
        >
          <span className="text-gray-600 dark:text-gray-300 text-lg">
            x
          </span>
        </button>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
          Create New AI Agent
        </h2>
        {/* Placeholder content – steps will be added later */}
        <div className="grid gap-4">
          <p className="text-gray-600 dark:text-gray-300">Wizard steps will go here.</p>
          {/* Example input for agent name */}
          <input
            type="text"
            placeholder="Agent Name"
            className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
          >
            Save (placeholder)
          </button>
        </div>
      </div>
    </div>
  );
}
