// BusinessConfigForm – step 2 of the AI Agent creation wizard
"use client";

import { useState } from "react";

export default function BusinessConfigForm() {
  const [hours, setHours] = useState("");
  const [duration, setDuration] = useState("");
  const [services, setServices] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [faq, setFaq] = useState("");

  return (
    <form className="grid gap-4 md:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Business Hours</label>
        <input
          type="text"
          placeholder="e.g., Mon-Fri 9am‑5pm"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Appointment Duration (mins)</label>
        <input
          type="number"
          min={0}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Services Offered</label>
        <textarea
          rows={2}
          value={services}
          onChange={(e) => setServices(e.target.value)}
          className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Website URL</label>
        <input
          type="url"
          placeholder="https://example.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">FAQ Preset (optional)</label>
        <textarea
          rows={3}
          placeholder="Enter common questions..."
          value={faq}
          onChange={(e) => setFaq(e.target.value)}
          className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </form>
  );
}
