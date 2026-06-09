/*
  Premium responsive sidebar for the AI Receptionist SaaS dashboard.
  - Collapsible on desktop (toggle button)
  - Fully collapsible on mobile (hamburger menu)
  - Highlights active route using next/navigation
  - Uses Lucide icons for a modern look
*/

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navItems: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: "🏠" },
  { name: "Leads", href: "/dashboard/leads", icon: "👥" },
  { name: "Calls", href: "/dashboard/calls", icon: "📞" },
  { name: "Conversations", href: "/dashboard/conversations", icon: "💬" },
  { name: "Appointments", href: "/dashboard/appointments", icon: "📅" },
  { name: "Analytics", href: "/dashboard/analytics", icon: "📊" },
  { name: "AI Agents", href: "/dashboard/ai-agents", icon: "🤖" },
  { name: "Workflows", href: "/dashboard/workflows", icon: "⚙️" },
  { name: "Settings", href: "/dashboard/settings", icon: "🔧" },
];

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}



export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggleCollapse = () => setCollapsed(!collapsed);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const baseClasses =
    "flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all";
  const widthClass = collapsed ? "w-20" : "w-64";
  const mobileOverlay = mobileOpen ? "fixed inset-0 z-40 bg-black/30" : "hidden";

  return (
    <>
      {/* Mobile overlay */}
      <div className={mobileOverlay} onClick={toggleMobile} />

      {/* Desktop sidebar */}
      <aside
        className={`${baseClasses} ${widthClass} hidden md:flex fixed inset-y-0 left-0`}
      >
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Header with collapse toggle */}
          <div className="flex items-center justify-between p-4">
            <span className={`text-xl font-semibold ${collapsed ? "hidden" : "block"}`}>
              Receptionist
            </span>
            <button
              onClick={toggleCollapse}
              className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {collapsed ? "☰" : "✕"}
            </button>
          </div>
          {/* Nav items */}
          <nav className="flex-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 transition-colors rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    active ? "bg-gray-200 dark:bg-gray-800 font-medium" : ""
                  }`}
                >
                  {item.icon}
                  <span className={collapsed ? "hidden" : "block"}>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile sidebar (slide‑in drawer) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <span className="text-xl font-semibold">Receptionist</span>
            <button
              onClick={toggleMobile}
              className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>✕</span>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 transition-colors rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    active ? "bg-gray-200 dark:bg-gray-800 font-medium" : ""
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile toggle button – visible on small screens */}
      <button
        onClick={toggleMobile}
        className="fixed top-4 left-4 z-60 p-2 rounded-md bg-white dark:bg-gray-800 shadow md:hidden"
        aria-label="Open navigation"
      >
        <span>☰</span>
      </button>
    </>
  );
}
