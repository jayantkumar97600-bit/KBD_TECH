"use client";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({
  value,
  onChange,
}: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      placeholder="Search leads..."
      className="
        w-full
        rounded-xl
        border
        border-gray-700
        bg-[#111827]
        px-4
        py-3
        text-white
        outline-none
      "
    />
  );
}