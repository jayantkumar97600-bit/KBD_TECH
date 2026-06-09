// AgentWizard – multi-step creation wizard for AI agents
"use client";

import { useState } from "react";
import StepProgress from "./StepProgress";
import BasicInfoForm from "./BasicInfoForm";
import BusinessConfigForm from "./BusinessConfigForm";
import VoiceSelection from "./VoiceSelection";
import PersonalityForm from "./PersonalityForm";
import KnowledgeUploadZone from "./KnowledgeUploadZone";
import WorkflowAutomation from "./WorkflowAutomation";
import ReviewLaunch from "./ReviewLaunch";

const steps = [
  { title: "Basic Info", component: BasicInfoForm },
  { title: "Business Config", component: BusinessConfigForm },
  { title: "Voice Selection", component: VoiceSelection },
  { title: "AI Personality", component: PersonalityForm },
  { title: "Knowledge Base", component: KnowledgeUploadZone },
  { title: "Workflow Automation", component: WorkflowAutomation },
  { title: "Review & Launch", component: ReviewLaunch },
];

export default function AgentWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const StepComponent = steps[currentStep].component;

  const next = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 0));

  return (
    <div className="flex flex-col gap-6">
      <StepProgress steps={steps.map((s) => s.title)} current={currentStep} />
      <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
        <StepComponent />
      </div>
      <div className="flex justify-between mt-4">
        {currentStep > 0 && (
          <button onClick={prev} className="px-4 py-2 bg-gray-200 rounded">Back</button>
        )}
        {currentStep < steps.length - 1 && (
          <button onClick={next} className="px-4 py-2 bg-primary-600 text-white rounded">Next</button>
        )}
      </div>
    </div>
  );
}
