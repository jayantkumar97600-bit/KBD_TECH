"use client";

import { revenueData } from "../../lib/mockData";

export default function RevenueChart() {
  return (
    <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm">
      <h3 className="mb-4 text-sm font-medium text-gray-900 dark:text-gray-100">
        Revenue Overview
      </h3>

      <div className="space-y-3">
        {revenueData.map((item, index) => (
          <div key={index}>
            <div className="mb-1 flex justify-between text-xs text-gray-600 dark:text-gray-300">
              <span>{item.date}</span>
              <span>${item.revenue}</span>
            </div>

            <div className="h-2 w-full rounded bg-gray-200 dark:bg-gray-700">
              <div
                className="h-2 rounded bg-green-500"
                style={{ width: `${item.revenue / 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}