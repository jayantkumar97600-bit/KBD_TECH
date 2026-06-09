import { Schema, model } from 'mongoose';
import { BaseEntity } from '../base/BaseEntity';

export interface User extends BaseEntity {
  tenantId: string; // business/organization ID
  clerkUserId: string; // Clerk user identifier
  email: string;
  name: string;
  role: 'admin' | 'user' | 'manager';
}

const UserSchema = new Schema<User>(
  {
    tenantId: { type: String, required: true, index: true },
    clerkUserId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user', 'manager'], default: 'user' },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

export const UserModel = model<User>('User', UserSchema);
