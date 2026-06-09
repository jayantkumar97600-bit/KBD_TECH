/*
  Dashboard layout that provides the persistent Sidebar and top Navbar for all
  /dashboard/* routes. It places the main content area to the right of the
  sidebar and below the navbar, using a responsive flex grid.
*/

export const metadata = {
  title: "Dashboard – AI Receptionist SaaS",
};

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar – hidden on mobile via the component itself */}
      <Sidebar />
      {/* Main area */}
      <div className="flex flex-col flex-1 ml-0 md:ml-64">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
