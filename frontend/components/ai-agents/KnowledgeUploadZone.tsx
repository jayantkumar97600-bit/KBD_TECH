// KnowledgeUploadZone – step 5 of the AI Agent creation wizard (UI only)
"use client";

import { useState } from "react";
import GlassCard from "../ui/GlassCard";

export default function KnowledgeUploadZone() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [docxFile, setDocxFile] = useState<File | null>(null);
  const [website, setWebsite] = useState("");
  const [faq, setFaq] = useState("");
  const [businessKnowledge, setBusinessKnowledge] = useState("");

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, setter: (f: File) => void) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) setter(file);
  };

  return (
    <GlassCard className="p-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Knowledge Base</h2>
      <form className="grid gap-4">
        {/* PDF Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Upload PDF</label>
          <div
            className="mt-1 flex items-center justify-center border-2 border-dashed rounded-md p-4 cursor-pointer hover:border-primary-600"
            onDrop={(e) => handleDrop(e, setPdfFile)}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById('pdf-input')?.click()}
          >
            {pdfFile ? (
              <p className="text-sm text-gray-600 dark:text-gray-300">{pdfFile.name}</p>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">Drag & drop PDF here or click to select</p>
            )}
            <input id="pdf-input" type="file" accept=".pdf" className="hidden" onChange={(e) => setPdfFile(e.target.files?.[0] || null)} />
          </div>
        </div>
        {/* DOCX Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Upload DOCX</label>
          <div
            className="mt-1 flex items-center justify-center border-2 border-dashed rounded-md p-4 cursor-pointer hover:border-primary-600"
            onDrop={(e) => handleDrop(e, setDocxFile)}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById('docx-input')?.click()}
          >
            {docxFile ? (
              <p className="text-sm text-gray-600 dark:text-gray-300">{docxFile.name}</p>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">Drag & drop DOCX here or click to select</p>
            )}
            <input id="docx-input" type="file" accept=".docx" className="hidden" onChange={(e) => setDocxFile(e.target.files?.[0] || null)} />
          </div>
        </div>
        {/* Website URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Website URL (optional)</label>
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://example.com"
            className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        {/* FAQ */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">FAQ (optional)</label>
          <textarea
            rows={3}
            value={faq}
            onChange={(e) => setFaq(e.target.value)}
            className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        {/* Business Knowledge */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Business Knowledge (optional)</label>
          <textarea
            rows={3}
            value={businessKnowledge}
            onChange={(e) => setBusinessKnowledge(e.target.value)}
            className="mt-1 w-full rounded border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </form>
    </GlassCard>
  );
}
