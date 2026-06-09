import { Schema, model } from 'mongoose';
import { BaseEntity } from '../base/BaseEntity';

export interface AiAgent extends BaseEntity {
  tenantId: string;
  name: string;
  providerModel: string; // e.g., 'gpt-4o', 'claude-3.5'
  config: Record<string, any>;
}

const AiAgentSchema = new Schema<AiAgent>(
  {
    tenantId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    model: { type: String, required: true },
    config: { type: Schema.Types.Mixed, default: {} },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

export const AiAgentModel = model<AiAgent>('AiAgent', AiAgentSchema);
