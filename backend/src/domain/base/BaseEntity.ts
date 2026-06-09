import { Document, Types } from 'mongoose';

export interface BaseEntity extends Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date; // soft delete timestamp
}
