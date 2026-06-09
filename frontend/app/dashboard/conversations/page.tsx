"use client";

import { useState } from "react";
import ConversationsInbox from "../../../components/dashboard/ConversationsInbox";
import ConversationMessages from "../../../components/dashboard/ConversationMessages";
import AIInsights from "../../../components/dashboard/AIInsights";
import LeadProfile from "../../../components/dashboard/LeadProfile";

export default function ConversationsPage() {
  const [selectedConvId, setSelectedConvId] = useState<number | null>(null);

  return (
    <section className="flex h-screen overflow-hidden">
      {/* Left sidebar - inbox */}
      <div className="w-1/4 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-y-auto">
        <ConversationsInbox onSelect={setSelectedConvId} />
      </div>
      {/* Center chat/messages */}
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-800">
        {selectedConvId ? (
          <ConversationMessages conversationId={selectedConvId} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">Select a conversation</div>
        )}
      </div>
      {/* Right panel - AI insights + lead profile */}
      <div className="w-1/4 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-y-auto">
        {selectedConvId && (
          <div className="flex flex-col h-full">
            <AIInsights conversationId={selectedConvId} />
            <LeadProfile conversationId={selectedConvId} />
          </div>
        )}
        {!selectedConvId && (
          <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">Select a conversation to view details</div>
        )}
      </div>
    </section>
  );
}
