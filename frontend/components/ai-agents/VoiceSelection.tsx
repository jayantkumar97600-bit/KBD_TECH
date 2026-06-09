// VoiceSelection – step 3 of the AI Agent creation wizard
"use client";

import { useState } from "react";


interface Provider {
  id: string;
  name: string;
  avatar: string; // URL or placeholder
  language: string;
  accent: string;
  gender: string;
}

const providers: Provider[] = [
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    avatar: "https://via.placeholder.com/40",
    language: "English",
    accent: "US",
    gender: "Female",
  },
  {
    id: "openai",
    name: "OpenAI",
    avatar: "https://via.placeholder.com/40",
    language: "English",
    accent: "UK",
    gender: "Male",
  },
  {
    id: "azure",
    name: "Azure",
    avatar: "https://via.placeholder.com/40",
    language: "English",
    accent: "AU",
    gender: "Female",
  },
  {
    id: "deepgram",
    name: "Deepgram",
    avatar: "https://via.placeholder.com/40",
    language: "English",
    accent: "US",
    gender: "Male",
  },
];

export default function VoiceSelection() {
  const [selected, setSelected] = useState<string>(providers[0].id);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {providers.map((p) => (
        <label
          key={p.id}
          className={`cursor-pointer rounded-xl border p-4 flex items-center gap-4 transition-all
            ${selected === p.id ? "border-primary-600 bg-primary-100 dark:bg-primary-900" : "border-gray-200 dark:border-gray-700"}`}
        >
          <input
            type="radio"
            name="voiceProvider"
            value={p.id}
            checked={selected === p.id}
            onChange={() => setSelected(p.id)}
            className="hidden"
          />
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full">
            <img src={p.avatar} alt={p.name} className="w-8 h-8 rounded-full" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{p.name}</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {p.language} • {p.accent} • {p.gender}
            </p>
          </div>
          <div
            className={`h-4 w-4 rounded-full border-2 ${
              selected === p.id
              ? "border-primary-600 bg-primary-600"
              : "border-gray-400"
            }`}
          />
        </label>
      ))}
    </div>
  );
}
