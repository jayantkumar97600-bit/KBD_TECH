import { BusinessRepository } from '../repositories/BusinessRepository';
import { BaseService } from '../base/BaseService';
import { Business } from '../models/Business';
import { z } from 'zod';

// DTO for creation
export const CreateBusinessDto = z.object({
  tenantId: z.string().uuid(),
  name: z.string().min(1),
  domain: z.string().optional(),
  createdBy: z.string(),
});
export type CreateBusinessInput = z.infer<typeof CreateBusinessDto>;

export class BusinessService extends BaseService<Business> {
  constructor() {
    super(new BusinessRepository());
  }

  async createBusiness(payload: unknown) {
    const data = CreateBusinessDto.parse(payload);
    return this.create(data);
  }
}
