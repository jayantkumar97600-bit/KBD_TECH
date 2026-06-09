"use client";

import Badge from "../ui/Badge";

// Placeholder component for lead profile associated with a conversation
export default function LeadProfile({ conversationId }: { conversationId: number }) {
  // In a real app, we'd fetch lead details based on conversation
  const mockLead = {
    name: "Acme Corp",
    company: "Acme Corp",
    email: "contact@acme.com",
    phone: "(555) 123‑4567",
    status: "Contacted",
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm h-full overflow-y-auto">
      <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Lead Profile</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Name:</strong> {mockLead.name}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Company:</strong> {mockLead.company}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Email:</strong> {mockLead.email}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Phone:</strong> {mockLead.phone}</p>
      <Badge variant={mockLead.status.toLowerCase() as any}>{mockLead.status}</Badge>
    </div>
  );
}
