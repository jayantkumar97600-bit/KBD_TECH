/*
  Premium top navigation bar for the SaaS dashboard.
  - Search input (placeholder)
  - Notifications button (icon placeholder)
  - Dark mode toggle (client‑side)
  - Profile avatar placeholder
  - Workspace selector placeholder
*/

"use client";

import { useEffect, useState } from "react";
// lucide-react icons removed temporarily due to JSX typing conflicts

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Apply or remove the dark class on the root html element
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2 sticky top-0 z-10">
      {/* Left side – search */}
      <div className="flex items-center gap-2 w-64">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-8 pr-2 py-1.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 text-xs">
            🔍
          </span>
        </div>
      </div>

      {/* Right side – icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
          🔔
        </button>
          
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Toggle dark mode"
        >
          {dark ? "☀️" : "🌙"}
        </button>
        {/* Workspace selector placeholder */}
        <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-200 cursor-not-allowed">
          Workspace
        </div>
        {/* Profile placeholder */}
        <div className="flex items-center gap-1">
          <span className="text-gray-600 dark:text-gray-300">
            👤
          </span>
          
        </div>
      </div>
    </header>
  );
}
