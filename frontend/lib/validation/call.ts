import { z } from "zod";

export const callDirectionEnum = z.enum(["INBOUND", "OUTBOUND"]);
export const callStatusEnum = z.enum([
  "MISSED",
  "ANSWERED",
  "VOICEMAIL",
  "IN_PROGRESS",
]);

export const callCreateSchema = z.object({
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  customerName: z.string().min(1, { message: "Customer name is required" }),
  leadId: z.string().optional(),
  direction: callDirectionEnum,
  status: callStatusEnum.optional(),
  duration: z.number().int().nonnegative().optional(),
  transcript: z.string().optional(),
  recordingUrl: z.string().url().optional(),
  startedAt: z.string().optional(),
  endedAt: z.string().optional(),
});

export const callUpdateSchema = callCreateSchema.partial().refine((data) => {
  return Object.keys(data).length > 0;
}, { message: "At least one field must be provided" });
