import DashboardCard from "../../components/dashboard/DashboardCard";

import GlassCard from "../../components/ui/GlassCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import CallsAnalyticsChart from "../../components/dashboard/CallsAnalyticsChart";

export default function DashboardHome() {
  return (
    <section className="space-y-6">
      {/* KPI grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Revenue"
          value="$12.3k"
                  />
        <DashboardCard
          title="Active Calls"
          value="27"
                  />
        <DashboardCard
          title="Appointments"
          value="14"
                  />
        <DashboardCard
          title="AI Agents"
          value="3"
                  />
        <DashboardCard
          title="Leads"
          value="128"
                  />
      </div>

      {/* Placeholder sections for charts and recent activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassCard className="p-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Revenue Trends</h2>
          <RevenueChart />
        </GlassCard>
        <GlassCard className="p-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Call Activity</h2>
          <CallsAnalyticsChart />
        </GlassCard>
      </div>

      {/* Recent leads and conversations (simple skeleton) */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm">
          <h3 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Recent Leads</h3>
          <ul className="space-y-2">
            <li className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            <li className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
            <li className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          </ul>
        </div>
        <div className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm">
          <h3 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Recent Conversations</h3>
          <ul className="space-y-2">
            <li className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            <li className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
            <li className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          </ul>
        </div>
      </div>
    </section>
  );
}
