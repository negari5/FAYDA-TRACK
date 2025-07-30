export type UserRole = 'user' | 'medical' | 'admin';

export interface User {
  id: string;
  fullName: string;
  faydaId: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  role: UserRole;
  organization?: string; // For medical team and admin
}

export interface HealthRecord {
  id: string;
  title: string;
  date: string;
  summary: string;
  userId: string;
  verifiedBy?: string;
  status: 'pending' | 'verified' | 'rejected';
  documents?: string[];
}