import { Model, Document, Types } from 'mongoose';
import { BaseEntity } from './BaseEntity';

/**
 * Generic repository providing common CRUD operations with soft‑delete support.
 */
export class BaseRepository<T extends BaseEntity> {
  constructor(protected readonly model: Model<T>) {}

  async create(doc: Partial<T>): Promise<T> {
    const created = await this.model.create(doc as any);
    return created;
  }

  async findById(id: string | Types.ObjectId): Promise<T | null> {
    return this.model.findOne({ _id: id, deletedAt: { $exists: false } }).exec();
  }

  async findAll(filter: Partial<T> = {}, limit = 50, skip = 0): Promise<T[]> {
    const query = { ...filter, deletedAt: { $exists: false } } as any;
    return this.model.find(query).limit(limit).skip(skip).exec();
  }

  async update(id: string | Types.ObjectId, update: Partial<T>): Promise<T | null> {
    return this.model
      .findOneAndUpdate({ _id: id, deletedAt: { $exists: false } }, update, { new: true })
      .exec();
  }

  // Soft‑delete: set deletedAt timestamp
  async delete(id: string | Types.ObjectId): Promise<T | null> {
    return this.model
      .findOneAndUpdate({ _id: id, deletedAt: { $exists: false } }, { deletedAt: new Date() }, { new: true })
      .exec();
  }
}
