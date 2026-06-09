import { Schema, model } from 'mongoose';
import { BaseEntity } from '../base/BaseEntity';

export interface Business extends BaseEntity {
  name: string;
  tenantId: string; // same as _id for the business (used for scoping)
  domain?: string;
  createdBy: string; // clerkUserId of creator
}

const BusinessSchema = new Schema<Business>(
  {
    name: { type: String, required: true },
    tenantId: { type: String, required: true, unique: true },
    domain: { type: String },
    createdBy: { type: String, required: true },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

export const BusinessModel = model<Business>('Business', BusinessSchema);
