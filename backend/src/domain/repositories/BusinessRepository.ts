import { BusinessModel } from '../models/Business';
import { BaseRepository } from '../base/BaseRepository';
import { Business } from '../models/Business';

export class BusinessRepository extends BaseRepository<Business> {
  constructor() {
    super(BusinessModel);
  }
}
