  "use client";

  import { MouseEvent } from "react";

  export interface PaginationControlsProps {
    /** Currently active page (1‑based) */
    currentPage: number;
    /** Total number of pages (≥ 1) */
    totalPages: number;
    /** Called with the new page number when navigation occurs */
    onPageChange: (page: number) => void;
    /** Optional Tailwind class list for the wrapper */
    className?: string;
  }

  /**
   * Simple pagination UI with Prev/Next buttons and page indicator.
   * Tailwind styling supports dark mode and responsive layouts.
   */
  export default function PaginationControls({
    currentPage,
    totalPages,
    onPageChange,
    className = "",
  }: PaginationControlsProps) {
    const handlePrev = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    const isFirst = currentPage <= 1;
    const isLast = currentPage >= totalPages;

    return (
      <nav
        aria-label="Leads pagination"
        className={`flex items-center justify-center space-x-4 ${className}`}
      >
        <button
          type="button"
          onClick={handlePrev}
          disabled={isFirst}
          aria-disabled={isFirst}
          className={`
            flex items-center rounded-md border px-3 py-2 text-sm
            focus:outline-none focus:ring-2 focus:ring-primary-500
            disabled:cursor-not-allowed disabled:opacity-50
            border-gray-300 bg-white text-gray-700
            hover:bg-gray-100
            dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100
            dark:hover:bg-gray-700
          `}
        >
          <svg
            className="h-4 w-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.293 4.293a1 1 0 010 1.414L8.414 9.586H16a1 1 0 110 2H8.414l3.879 3.879a1 1 0 11-1.414 1.414l-5.586-5.586a1
   1 0 010-1.414l5.586-5.586a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Previous page</span>
          Prev
        </button>

        <span className="text-sm text-gray-700 dark:text-gray-200">
          Page {currentPage} of {totalPages}
        </span>

        <button
          type="button"
          onClick={handleNext}
          disabled={isLast}
          aria-disabled={isLast}
          className={`
            flex items-center rounded-md border px-3 py-2 text-sm
            focus:outline-none focus:ring-2 focus:ring-primary-500
            disabled:cursor-not-allowed disabled:opacity-50
            border-gray-300 bg-white text-gray-700
            hover:bg-gray-100
            dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100
            dark:hover:bg-gray-700
          `}
        >
          Next
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.707 15.707a1 1 0 010-1.414L11.586 10.5H4a1 1 0 110-2h7.586l-3.879-3.879a1 1 0 111.414-1.414l5.586 5.586a1 1
   0 010 1.414l-5.586 5.586a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Next page</span>
        </button>
      </nav>
    );
  }