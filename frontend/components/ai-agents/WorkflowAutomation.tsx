// WorkflowAutomation – step 6 of the AI Agent creation wizard
"use client";

import { useState } from "react";
import GlassCard from "../ui/GlassCard";

interface Automation {
  id: string;
  label: string;
  description: string;
}

const automations: Automation[] = [
  { id: "appointment", label: "Appointment Booking", description: "Schedule appointments automatically" },
  { id: "lead", label: "Lead Qualification", description: "Qualify incoming leads" },
  { id: "forward", label: "Call Forwarding", description: "Forward calls to agents" },
  { id: "voicemail", label: "Voicemail Handling", description: "Record and reply to voicemails" },
  { id: "whatsapp", label: "WhatsApp Follow‑up", description: "Send follow‑up messages on WhatsApp" },
  { id: "sms", label: "SMS Reminders", description: "Send SMS reminders to customers" },
  { id: "crm", label: "CRM Sync", description: "Synchronize data with CRM" },
];

export default function WorkflowAutomation() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <GlassCard className="p-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Workflow Automation</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {automations.map((a) => {
          const active = !!enabled[a.id];
          return (
            <button
              key={a.id}
              onClick={() => toggle(a.id)}
              className={`rounded-xl p-4 border transition-all duration-200 flex flex-col items-start text-left
                ${active ? "border-primary-600 bg-primary-100 dark:bg-primary-900 shadow-lg ring-2 ring-primary-500" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`}
            >
              <span className={`font-medium ${active ? "text-primary-600" : "text-gray-900 dark:text-gray-100"}`}>{a.label}</span>
              <span className="mt-1 text-xs text-gray-600 dark:text-gray-400">{a.description}</span>
            </button>
          );
        })}
      </div>
    </GlassCard>
  );
}
