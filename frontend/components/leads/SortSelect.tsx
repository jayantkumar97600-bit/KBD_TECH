 "use client";

  import { ChangeEvent } from "react";

  export type SortOption =
    | "createdAt_desc"
    | "createdAt_asc"
    | "updatedAt_desc";

  export interface SortSelectProps {
    /** Currently selected sort option */
    value: SortOption;
    /** Callback when a sort option is chosen */
    onChange: (value: SortOption) => void;
    /** Optional Tailwind classes */
    className?: string;
    /** Optional label text (defaults to "Sort by") */
    label?: string;
  }

  /**
   * Dropdown for selecting lead sorting.
   * Tailwind styling supports dark mode and responsive layouts.
   */
  export default function SortSelect({
    value,
    onChange,
    className = "",
    label = "Sort by",
  }: SortSelectProps) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value as SortOption);
    };

    const options: { label: string; value: SortOption }[] = [
      { label: "Newest", value: "createdAt_desc" },
      { label: "Oldest", value: "createdAt_asc" },
      { label: "Recently Updated", value: "updatedAt_desc" },
    ];

    return (
      <div className={`relative ${className}`}>
        <label htmlFor="lead-sort-select" className="sr-only">
          {label}
        </label>
        <select
          id="lead-sort-select"
          value={value}
          onChange={handleChange}
          className="
            block w-full appearance-none rounded-md border border-gray-300 bg-white
            py-2 pl-3 pr-10 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1
  focus:ring-primary-500
            dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100
            dark:focus:border-primary-400 dark:focus:ring-primary-400
            sm:text-base
          "
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Chevron icon */}
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21
  8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }