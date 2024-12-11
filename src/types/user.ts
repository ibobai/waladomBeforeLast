export type UserRole = 'F' | 'X' | 'Y' | 'Z' | 'A';

export interface User {
  email: string;
  name: string;
  cardId: string;
  role: UserRole;
  country: string;
  job: string;
  dateOfBirth: string;
  placeOfBirth: string;
  joinedDate: string;
  isAdmin?: boolean;
}

export const roleColors: Record<UserRole, string> = {
  'A': 'bg-red-500',
  'F': 'bg-purple-500',
  'X': 'bg-blue-500',
  'Y': 'bg-green-500',
  'Z': 'bg-orange-500'
};