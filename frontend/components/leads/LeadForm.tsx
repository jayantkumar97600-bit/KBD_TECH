/*
  Reusable lead creation form.
  Props:
    - onSubmit: (data: LeadInput) => Promise<void>
    - loading: boolean
    - error?: string
*/

"use client";

import { useState } from "react";

export interface LeadInput {
  name: string;
  email: string;
  phone: string;
  organization?: string;
  status?: string;
}

interface Props {
  onSubmit: (data: LeadInput) => Promise<void>;
  loading: boolean;
  error?: string;
  defaultValues?: LeadInput;
}

export default function LeadForm({ onSubmit, loading, error, defaultValues }: Props) {
  const [formData, setFormData] = useState<LeadInput>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    status: "NEW",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
        className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <input
        name="organization"
        value={formData.organization}
        onChange={handleChange}
        placeholder="Organization (optional)"
        className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="rounded bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 disabled:opacity-50"
      >
        {loading ? "Creating..." : "Create Lead"}
      </button>
    </form>
  );
}
