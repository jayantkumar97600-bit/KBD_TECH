// PersonalityForm – step 4 of the AI Agent creation wizard
"use client";

import React, { useState } from "react";
import GlassCard from "../ui/GlassCard";

export interface PersonalityData {
  welcomeMessage: string;
  aiTone: string;
  personalityType: string;
  responseStyle: string;
  communicationRules: string;
  escalationRules: string;
  forbiddenResponses: string;
}

export default function PersonalityForm() {
  const [data, setData] = useState<PersonalityData>({
    welcomeMessage: "",
    aiTone: "",
    personalityType: "",
    responseStyle: "",
    communicationRules: "",
    escalationRules: "",
    forbiddenResponses: "",
  });

  const updateField = (field: keyof PersonalityData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [field]: e.target.value });
  };

  return (
    <GlassCard className="p-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">AI Personality</h2>
      <form className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Welcome Message</label>
          <input
            type="text"
            value={data.welcomeMessage}
            onChange={updateField("welcomeMessage")}
            className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">AI Tone</label>
          <input
            type="text"
            value={data.aiTone}
            onChange={updateField("aiTone")}
            className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Personality Type</label>
          <input
            type="text"
            value={data.personalityType}
            onChange={updateField("personalityType")}
            className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Response Style</label>
          <input
            type="text"
            value={data.responseStyle}
            onChange={updateField("responseStyle")}
            className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Communication Rules</label>
          <textarea
            rows={3}
            value={data.communicationRules}
            onChange={updateField("communicationRules")}
            className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Escalation Rules</label>
          <textarea
            rows={3}
            value={data.escalationRules}
            onChange={updateField("escalationRules")}
            className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Forbidden Responses</label>
          <textarea
            rows={3}
            value={data.forbiddenResponses}
            onChange={updateField("forbiddenResponses")}
            className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </form>
    </GlassCard>
  );
}
