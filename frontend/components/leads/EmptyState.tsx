  "use client";

  import { FC, MouseEvent } from "react";

  export interface EmptyStateProps {
    /** Main heading */
    title: string;
    /** Supporting description text */
    description: string;
    /** Optional label for the action button */
    actionLabel?: string;
    /** Optional callback when the action button is clicked */
    onAction?: () => void;
    /** Additional Tailwind classes for the wrapper */
    className?: string;
  }

  /**
   * Reusable empty‑state UI for the leads section.
   * Includes a centered icon, title, description and optional action.
   */
  const EmptyState: FC<EmptyStateProps> = ({
    title,
    description,
    actionLabel,
    onAction,
    className = "",
  }) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onAction?.();
    };

    return (
      <div
        className={`
          flex flex-col items-center justify-center p-8 text-center
          ${className}
        `}
      >
        {/* Icon placeholder */}
        <svg
          className="mb-4 h-16 w-16 text-gray-400 dark:text-gray-500 animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <rect width="64" height="64" rx="8" fill="currentColor" />
        </svg>

        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>

        <p className="mb-4 max-w-md text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>

        {actionLabel && onAction && (
          <button
            type="button"
            onClick={handleClick}
            className={`
              rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white
              hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500
              transition-colors
              dark:bg-primary-500 dark:hover:bg-primary-600
            `}
          >
            {actionLabel}
          </button>
        )}
      </div>
    );
  };

  export default EmptyState;