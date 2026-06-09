export interface Call {
  id: string;
  phoneNumber: string;
  customerName?: string;
  direction: string;
  status: string;
  duration: number;
  createdAt?: string;
}