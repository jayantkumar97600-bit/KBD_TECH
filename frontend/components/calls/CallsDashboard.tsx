"use client";

import { useEffect, useState } from "react";
import { CallsTable } from "./CallsTable";
import { EmptyCallsState } from "./EmptyCallsState";

type Call = {
  id: string;
  customerName: string;
  phoneNumber: string;
  status: string;
  direction: string;
  duration: number;
  createdAt: string;
};

export function CallsDashboard() {
  const [calls, setCalls] = useState<Call[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCalls();
  }, []);

  async function fetchCalls() {
    try {
      const response = await fetch("/api/calls");

      const data = await response.json();

      if (data.success) {
        setCalls(data.calls);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Calls Dashboard
        </h1>

        <p className="mt-2 text-gray-400">
          Manage and monitor AI calls
        </p>
      </div>

      {loading ? (
        <div className="text-gray-400">
          Loading calls...
        </div>
      ) : calls.length === 0 ? (
        <EmptyCallsState />
      ) : (
        <CallsTable calls={calls} />
      )}
    </div>
  );
}