import { BaseRepository } from './BaseRepository';
import { BaseEntity } from './BaseEntity';
import { Types } from 'mongoose';

/**
 * Generic service exposing CRUD operations and delegating to a repository.
 */
export class BaseService<T extends BaseEntity> {
  constructor(protected readonly repo: BaseRepository<T>) {}

  async create(data: Partial<T>) {
    return this.repo.create(data);
  }

  async getById(id: string | Types.ObjectId) {
    return this.repo.findById(id);
  }

  async list(filter: Partial<T> = {}, limit = 50, skip = 0) {
    return this.repo.findAll(filter, limit, skip);
  }

  async update(id: string | Types.ObjectId, data: Partial<T>) {
    return this.repo.update(id, data);
  }

  async softDelete(id: string | Types.ObjectId) {
    return this.repo.delete(id);
  }
}
