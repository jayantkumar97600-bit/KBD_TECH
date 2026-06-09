import { Role, TenantId } from 'shared';
import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  userId?: string; // Clerk user id
  tenantId?: TenantId;
  role?: Role;
}
