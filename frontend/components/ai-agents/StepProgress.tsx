// StepProgress – visual indicator of wizard steps
"use client";

interface Props {
  steps: string[];
  current: number; // zero‑based index of active step
}

export default function StepProgress({ steps, current }: Props) {
  return (
    <nav className="flex items-center" aria-label="Progress">
      {steps.map((title, idx) => (
        <div key={title} className="flex-1 flex items-center">
          {/* Circle */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center
              ${idx <= current ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-600"}`}
          >
            {idx + 1}
          </div>
          {/* Title */}
          <span className={`ml-2 text-sm font-medium ${idx <= current ? "text-primary-600" : "text-gray-600"}`}>
            {title}
          </span>
          {/* Connector */}
          {idx < steps.length - 1 && (
            <div className="flex-1 h-0.5 mx-2 "
              style={{ backgroundColor: idx < current ? "#2563eb" : "#e5e7eb" }}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
