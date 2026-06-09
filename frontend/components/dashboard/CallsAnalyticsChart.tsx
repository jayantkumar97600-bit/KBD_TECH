"use client";

import { callAnalytics } from "../../lib/mockData";

export default function CallsAnalyticsChart() {
  return (
    <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm">
      <h3 className="mb-4 text-sm font-medium text-gray-900 dark:text-gray-100">
        Calls Analytics
      </h3>

      <div className="space-y-3">
        {callAnalytics.map((item, index) => (
          <div key={index}>
            <div className="mb-1 flex justify-between text-xs text-gray-600 dark:text-gray-300">
              <span>{item.hour}:00</span>
              <span>{item.calls} calls</span>
            </div>

            <div className="h-2 w-full rounded bg-gray-200 dark:bg-gray-700">
              <div
                className="h-2 rounded bg-primary-600"
                style={{ width: `${item.calls * 10}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}