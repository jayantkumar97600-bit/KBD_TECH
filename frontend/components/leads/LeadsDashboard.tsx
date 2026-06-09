"use client";

import { useEffect, useMemo, useState } from "react";
import KanbanView from "./KanbanView";
import { LeadStatus } from "./StatusFilter";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: LeadStatus;
  createdAt: string | Date;
  updatedAt: string | Date;
}

const PAGE_SIZE = 10;

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    LeadStatus | "ALL"
  >("ALL");

  const [page, setPage] = useState(1);

  // =========================
  // FETCH LEADS
  // =========================

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/leads");

      const data = await response.json();

      console.log("FETCHED:", data);

      const leadsArray = data.leads || data || [];

const safeLeads = leadsArray
  .filter(
    (lead: any) =>
      lead &&
      lead.id &&
      typeof lead.id === "string"
  )
  .map((lead: any) => ({
    ...lead,
    id: lead.id,
  }));

setLeads(safeLeads);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // UPDATE STATUS
  // =========================

  const handleStatusChange = async (
    leadId: string,
    newStatus: LeadStatus
  ) => {
    try {
      const previousLeads = [...leads];

      // optimistic update
      setLeads((prev) =>
        prev.map((lead) =>
          lead.id === leadId
            ? {
                ...lead,
                status: newStatus,
              }
            : lead
        )
      );

      const response = await fetch(
        `/api/leads/${leadId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const data = await response.json();

      console.log("PATCH STATUS:", response.status);
      console.log("PATCH RESPONSE:", data);

      if (!response.ok) {
        setLeads(previousLeads);

        throw new Error(
          data.error ||
            "Failed to update lead"
        );
      }

      setLeads((prev) =>
        prev.map((lead) =>
          lead.id === leadId
            ? {
                ...lead,
                status: newStatus,
              }
            : lead
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  // =========================
  // FILTERED LEADS
  // =========================

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      if (!lead) return false;

      const matchesSearch =
        lead.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        lead.email
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        lead.phone
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        lead.company
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "ALL"
          ? true
          : lead.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, statusFilter]);

  // =========================
  // PAGINATION
  // =========================

  const totalPages = Math.ceil(
    filteredLeads.length / PAGE_SIZE
  );

  const paginatedLeads = filteredLeads.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="p-6 text-white">
        Loading leads...
      </div>
    );
  }

  // =========================
  // UI
  // =========================

  return (
    <div className="min-h-screen overflow-hidden bg-[#071028] text-white">
      <div className="p-6">
        {/* HEADER */}

        <div className="mb-6">
          <h1 className="text-4xl font-bold">
            Leads CRM
          </h1>

          <p className="mt-2 text-gray-400">
            Total Leads: {leads.length}
          </p>
        </div>

        {/* FILTERS */}

        <div className="mb-6 flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="rounded-lg border border-gray-700 bg-[#111c3d] px-4 py-3 outline-none"
          />

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(
                e.target.value as
                  | LeadStatus
                  | "ALL"
              )
            }
            className="rounded-lg border border-gray-700 bg-[#111c3d] px-4 py-3 outline-none"
          >
            <option value="ALL">
              All Statuses
            </option>

            <option value="NEW">
              NEW
            </option>

            <option value="CONTACTED">
              CONTACTED
            </option>

            <option value="QUALIFIED">
              QUALIFIED
            </option>

            <option value="APPOINTMENT_BOOKED">
              APPOINTMENT BOOKED
            </option>

            <option value="CLOSED">
              CLOSED
            </option>

            <option value="LOST">
              LOST
            </option>
          </select>
        </div>

        {/* KANBAN */}

        <KanbanView
          leads={filteredLeads}
          onStatusChange={
            handleStatusChange
          }
          search={search}
          statusFilter={statusFilter}
        />

        {/* TABLE */}

        <div className="mt-10 overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full">
            <thead className="bg-[#111c3d]">
              <tr>
                <th className="p-4 text-left">
                  Name
                </th>

                <th className="p-4 text-left">
                  Email
                </th>

                <th className="p-4 text-left">
                  Phone
                </th>

                <th className="p-4 text-left">
                  Company
                </th>

                <th className="p-4 text-left">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {paginatedLeads.map(
                (lead) => (
                  <tr
                    key={`lead-${lead.id}`}
                    className="border-t border-gray-800"
                  >
                    <td className="p-4">
                      {lead.name}
                    </td>

                    <td className="p-4">
                      {lead.email}
                    </td>

                    <td className="p-4">
                      {lead.phone}
                    </td>

                    <td className="p-4">
                      {lead.company}
                    </td>

                    <td className="p-4">
                      {lead.status}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            disabled={page <= 1}
            onClick={() =>
              setPage((p) => p - 1)
            }
            className="rounded-lg bg-[#111c3d] px-4 py-2 disabled:opacity-50"
          >
            Prev
          </button>

          <span>
            {page} / {totalPages || 1}
          </span>

          <button
            disabled={
              page >= totalPages
            }
            onClick={() =>
              setPage((p) => p + 1)
            }
            className="rounded-lg bg-[#111c3d] px-4 py-2 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}