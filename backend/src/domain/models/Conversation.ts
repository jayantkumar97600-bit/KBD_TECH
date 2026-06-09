import { Schema, model } from 'mongoose';
import { BaseEntity } from '../base/BaseEntity';

export interface Conversation extends BaseEntity {
  tenantId: string;
  leadId: string;
  aiAgentId: string;
  startedAt: Date;
  endedAt?: Date;
  status: 'active' | 'closed' | 'failed';
}

const ConversationSchema = new Schema<Conversation>(
  {
    tenantId: { type: String, required: true, index: true },
    leadId: { type: String, required: true, index: true },
    aiAgentId: { type: String, required: true, index: true },
    startedAt: { type: Date, default: Date.now },
    endedAt: { type: Date },
    status: { type: String, enum: ['active', 'closed', 'failed'], default: 'active' },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

export const ConversationModel = model<Conversation>('Conversation', ConversationSchema);
