// Placeholder types – replace with actual definitions if needed
type Role = string;
type TenantId = string; // simple string identifier
import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  userId?: string; // Clerk user id
  tenantId?: TenantId;
  role?: Role;
}
