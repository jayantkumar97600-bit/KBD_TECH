  "use client";

  import {
    FC,
    KeyboardEvent,
    MouseEvent,
    useEffect,
    useRef,
  } from "react";

  export interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    status: string;
    createdAt: string | Date;
    updatedAt: string | Date;
  }

  export interface LeadDetailsModalProps {
    /** Controls visibility */
    open: boolean;
    /** Called when the modal should be closed */
    onClose: () => void;
    /** Lead data to display */
    lead: Lead;
  }

  /**
   * Modal displaying lead details with placeholder sections.
   * Tailwind styling provides dark mode, responsive layout,
   * backdrop blur, ESC/overlay close, sticky header and smooth transitions.
   */
  const LeadDetailsModal: FC<LeadDetailsModalProps> = ({
    open,
    onClose,
    lead,
  }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on ESC
    useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      if (open) {
        document.addEventListener("keydown", handleKey as any);
      }
      return () => {
        document.removeEventListener("keydown", handleKey as any);
      };
    }, [open, onClose]);

    // Close on click outside
    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === overlayRef.current) onClose();
    };

    if (!open) return null;

    const formatDate = (d: string | Date) =>
      new Date(d).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

    const statusColors: Record<string, string> = {
      NEW: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      CONTACTED:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      QUALIFIED:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      APPOINTMENT_BOOKED:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      CLOSED: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
      LOST: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    };

    const statusClass = statusColors[lead.status] ?? "bg-gray-100 text-gray-800";

    return (
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity
  duration-200"
        aria-modal="true"
        role="dialog"
        aria-labelledby="lead-details-title"
      >
        <div
          ref={modalRef}
          className="relative w-full max-w-lg max-h-[90vh] transform overflow-hidden rounded-lg bg-white dark:bg-gray-800
  shadow-xl transition-all duration-200 sm:my-8"
        >
          {/* Sticky header */}
          <div className="sticky top-0 z-10 flex items-center justify-between bg-white dark:bg-gray-800 border-b
  border-gray-200 dark:border-gray-700 p-4">
            <h2
              id="lead-details-title"
              className="text-lg font-semibold text-gray-900 dark:text-gray-100"
            >
              {lead.name}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2
  focus:ring-primary-500 dark:hover:bg-gray-700 dark:hover:text-gray-100"
              aria-label="Close lead details"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414
   1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto p-4 space-y-6">
            {/* Lead Info */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  {lead.email}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Phone
                </p>
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  {lead.phone}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Company
                </p>
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  {lead.company}
                </p>
              </div>
              <div className="flex items-center">
                <p className="mr-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Status
                </p>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClass}`}
                >
                  {lead.status}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Created
                </p>
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  {formatDate(lead.createdAt)}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Updated
                </p>
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  {formatDate(lead.updatedAt)}
                </p>
              </div>
            </section>

            {/* Placeholder Sections */}
            <section>
              <h3 className="mb-2 text-base font-semibold text-gray-800 dark:text-gray-200">
                Notes
              </h3>
              <div className="h-32 rounded border border-dashed border-gray-300 bg-gray-50 dark:border-gray-600
  dark:bg-gray-700" />
            </section>

            <section>
              <h3 className="mb-2 text-base font-semibold text-gray-800 dark:text-gray-200">
                Activity Timeline
              </h3>
              <div className="h-40 rounded border border-dashed border-gray-300 bg-gray-50 dark:border-gray-600
  dark:bg-gray-700" />
            </section>

            <section>
              <h3 className="mb-2 text-base font-semibold text-gray-800 dark:text-gray-200">
                AI Summary
              </h3>
              <div className="h-24 rounded border border-dashed border-gray-300 bg-gray-50 dark:border-gray-600
  dark:bg-gray-700" />
            </section>

            <section>
              <h3 className="mb-2 text-base font-semibold text-gray-800 dark:text-gray-200">
                Appointment
              </h3>
              <div className="h-24 rounded border border-dashed border-gray-300 bg-gray-50 dark:border-gray-600
  dark:bg-gray-700" />
            </section>
          </div>
        </div>
      </div>
    );
  };

  export default LeadDetailsModal;