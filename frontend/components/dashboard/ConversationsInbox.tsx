"use client";

import { useState } from "react";
import { conversations } from "../../lib/mockData";
import Badge from "../ui/Badge";

export default function ConversationsInbox({ onSelect }: { onSelect: (id: number) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState("");
  const [tab, setTab] = useState<'all' | 'unread' | 'escalated'>('all');

  const handleClick = (id: number) => {
    setSelected(id);
    onSelect(id);
  };

  const filteredConvs = conversations.filter((c) => {
    const matchesFilter = c.participant.toLowerCase().includes(filter.toLowerCase()) || c.lastMessage.toLowerCase().includes(filter.toLowerCase());
    if (tab === 'unread') return matchesFilter && c.unread;
    if (tab === 'escalated') return matchesFilter && c.status === 'escalated';
    return matchesFilter;
  });

  return (
    <div className="h-full flex flex-col">
      {/* Search */}
      <div className="p-2">
        <input
          type="text"
          placeholder="Search conversations…"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      {/* Tabs */}
      <div className="flex space-x-2 px-2 mb-2">
        {['all', 'unread', 'escalated'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t as any)}
            className={`px-3 py-1 rounded ${tab === t ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredConvs.map((conv) => (
            <li
              key={conv.id}
              className={`p-3 cursor-pointer flex items-center justify-between ${selected === conv.id ? "bg-gray-100 dark:bg-gray-800" : ""}`}
              onClick={() => handleClick(conv.id)}
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {conv.participant}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {conv.lastMessage}
                </p>
              </div>
              <div className="flex flex-col items-end space-y-1 ml-2">
                {conv.unread && <Badge variant="new">New</Badge>}
                <Badge variant={conv.status as any}>{conv.status}</Badge>
                <time className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {new Date(conv.timestamp).toLocaleString()}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
