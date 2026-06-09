import { Schema, model } from 'mongoose';
import { BaseEntity } from '../base/BaseEntity';

export interface Lead extends BaseEntity {
  tenantId: string;
  name: string;
  email: string;
  phone?: string;
  status: 'new' | 'contacted' | 'qualified' | 'lost';
  source?: string;
}

const LeadSchema = new Schema<Lead>(
  {
    tenantId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    status: { type: String, enum: ['new', 'contacted', 'qualified', 'lost'], default: 'new' },
    source: { type: String },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

export const LeadModel = model<Lead>('Lead', LeadSchema);
