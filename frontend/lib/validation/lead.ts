// Zod schemas for Lead API validation
import { z } from "zod";

export const leadStatusEnum = z.enum([
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "APPOINTMENT_BOOKED",
  "CLOSED",
  "LOST",
]);

export const leadCreateSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  status: leadStatusEnum.optional(),
});

export const leadUpdateSchema = leadCreateSchema.partial().refine((data) => {
  return Object.keys(data).length > 0;
}, { message: "At least one field must be provided" });

export const leadStatusSchema = z.object({
  status: leadStatusEnum,
});
