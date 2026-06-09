"use client";

import { useEffect, useState } from "react";
import { messages } from "../../lib/mockData";
import Badge from "../ui/Badge";

export default function ConversationMessages({ conversationId }: { conversationId: number }) {
  const [loading, setLoading] = useState(true);
  const [msgs, setMsgs] = useState<typeof messages>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsgs(messages.filter((m) => m.conversationId === conversationId));
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [conversationId]);

  if (loading) {
    return <div className="text-gray-600 dark:text-gray-400">Loading messages...</div>;
  }

  return (
    <div className="h-full overflow-y-auto p-2">
      {msgs.map((msg) => (
        <div key={msg.id} className="mb-4">
          <div className="flex items-center space-x-2">
            <p className="font-medium text-gray-900 dark:text-gray-100">{msg.sender}</p>
            <Badge variant="new">{msg.sentiment}</Badge>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{msg.content}</p>
          <time className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(msg.timestamp).toLocaleString()}
          </time>
        </div>
      ))}
    </div>
  );
}
