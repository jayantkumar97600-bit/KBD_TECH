  "use client";

  import { FC } from "react";

  export interface SkeletonRowProps {
    /** Number of columns to render (default: 5) */
    columns?: number;
  }

  /**
   * Table row skeleton with pulse animation.
   * Tailwind styling adapts to dark mode and is responsive.
   */
  const SkeletonRow: FC<SkeletonRowProps> = ({ columns = 5 }) => {
    const cells = Array.from({ length: columns });

    return (
      <tr className="animate-pulse">
        {cells.map((_ , idx) => (
          <td key={idx} className="p-2">
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
          </td>
        ))}
      </tr>
    );
  };

  export default SkeletonRow;