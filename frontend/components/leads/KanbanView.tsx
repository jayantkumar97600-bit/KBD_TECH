"use client";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";

import { CSS } from "@dnd-kit/utilities";

import { Lead } from "./LeadDetailsModal";
import { LeadStatus } from "./StatusFilter";

import LeadStatusBadge from "./LeadStatusBadge";

interface KanbanViewProps {
  leads: Lead[];
  onStatusChange: (
    leadId: string,
    newStatus: LeadStatus
  ) => Promise<void>;
  search: string;
  statusFilter: LeadStatus | "ALL";
  onSelectLead?: (lead: Lead) => void;
}

export default function KanbanView({
  leads,
  onStatusChange,
  search,
  statusFilter,
  onSelectLead,
}: KanbanViewProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const statuses: LeadStatus[] = [
    "NEW",
    "CONTACTED",
    "QUALIFIED",
    "APPOINTMENT_BOOKED",
    "CLOSED",
    "LOST",
  ];

  const lowerSearch = search.toLowerCase();

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(lowerSearch) ||
      lead.email?.toLowerCase().includes(lowerSearch) ||
      lead.phone?.toLowerCase().includes(lowerSearch) ||
      lead.company?.toLowerCase().includes(lowerSearch);

    const matchesStatus =
      statusFilter === "ALL" ||
      lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleDragEnd = async (
  event: DragEndEvent
) => {
  const { active, over } = event;

  if (!over) return;

  const leadId = String(active.id);

  const draggedLead = leads.find(
    (lead) => String(lead.id) === leadId
  );

  if (!draggedLead) return;

  let newStatus: LeadStatus | null = null;

  // DROPPED ON COLUMN
  if (
    statuses.includes(over.id as LeadStatus)
  ) {
    newStatus = over.id as LeadStatus;
  }

  // DROPPED ON CARD
  else {
    const targetLead = leads.find(
      (lead) =>
        String(lead.id) === String(over.id)
    );

    if (targetLead) {
      newStatus = targetLead.status as any;
    }
  }

  if (!newStatus) return;

  if (draggedLead.status === newStatus)
    return;

  try {
    await onStatusChange(
      leadId,
      newStatus
    );
  } catch (error) {
    console.error(error);
  }
};

  const DraggableLeadCard = ({
    lead,
  }: {
    lead: Lead;
  }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      
      isDragging,
    } = useDraggable({
      // IMPORTANT FIX
      id: lead.id.toString(),
    });
    console.log("DRAG LEAD:", lead);

    const style = {
      transform:
        CSS.Transform.toString(transform),
      
      opacity: isDragging ? 0.5 : 1,
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        onClick={() =>
          onSelectLead?.(lead)
        }
        className="
          cursor-grab
          rounded-lg
          border
          border-gray-700
          bg-gray-800
          p-3
          shadow-sm
          transition-all
          hover:border-gray-600
          hover:bg-gray-700
          active:cursor-grabbing
        "
      >
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-medium text-white">
            {lead.name}
          </h3>

          <LeadStatusBadge
            status={lead.status as any}
          />
        </div>

        {lead.company && (
          <p className="mt-2 truncate text-xs text-gray-400">
            {lead.company}
          </p>
        )}

        {lead.email && (
          <p className="mt-1 truncate text-xs text-gray-500">
            {lead.email}
          </p>
        )}
      </div>
    );
  };

  const DroppableColumn = ({
    status,
    children,
  }: {
    status: LeadStatus;
    children: React.ReactNode;
  }) => {
    const { setNodeRef, isOver } =
      useDroppable({
        id: status,
      });

    return (
      <div
        ref={setNodeRef}
        className={`
          flex
          min-h-[500px]
          min-w-[280px] max-w-[280px] flex-shrink-0
          flex-col
          rounded-xl
          border
          border-gray-700
          bg-gray-900
          transition-all
          ${
            isOver
              ? "border-blue-500 bg-gray-800"
              : ""
          }
        `}
      >
        <div className="border-b border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">
              {status.replace(/_/g, " ")}
            </h2>

            <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-300">
              {
                filteredLeads.filter(
                  (lead) =>
                    lead.status === status
                ).length
              }
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-3">
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-full overflow-x-auto overflow-y-hidden pb-4">
      <DndContext
        sensors={sensors}
        collisionDetection={
          closestCenter
        }
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-4 px-1">
          {statuses.map((status) => {
            const columnLeads =
              filteredLeads.filter(
                (lead) =>
                  lead.status === status
              );

            return (
              <DroppableColumn
                key={status}
                status={status}
              >
                {columnLeads.map((lead) => (
                  <DraggableLeadCard
                    key={String(lead.id)}
                    lead={lead}
                  />
                ))}
              </DroppableColumn>
            );
          })}
        </div>
      </DndContext>
    </div>
  );
}