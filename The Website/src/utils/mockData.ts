import { User, HealthRecord } from "@/types/user";

export const sampleUsers: User[] = [
  {
    id: "user-1",
    fullName: "Abebe Bekele Tadesse",
    faydaId: "FD-2024-ET-789012",
    email: "abebe.bekele@email.et",
    dateOfBirth: "1985-03-15",
    gender: "Male",
    role: "user"
  },
  {
    id: "medical-1", 
    fullName: "Dr. Hewan Mengistu",
    faydaId: "FD-2024-MD-123456",
    email: "dr.hewan@blacklionhospital.et",
    dateOfBirth: "1978-08-22",
    gender: "Female",
    role: "medical",
    organization: "Black Lion Hospital"
  },
  {
    id: "admin-1",
    fullName: "Solomon Tesfaye",
    faydaId: "FD-2024-AD-456789", 
    email: "solomon.admin@fayda.gov.et",
    dateOfBirth: "1980-12-10",
    gender: "Male",
    role: "admin",
    organization: "Ethiopian Digital Health Initiative"
  }
];

export const mockHealthRecords: HealthRecord[] = [
  {
    id: "1",
    title: "Annual Physical Checkup",
    date: "2024-01-15",
    summary: "Routine physical examination - all vital signs normal, blood pressure 120/80, weight 70kg",
    userId: "user-1",
    verifiedBy: "medical-1",
    status: "verified"
  },
  {
    id: "2", 
    title: "COVID-19 Vaccination",
    date: "2024-01-03",
    summary: "Third dose of COVID-19 vaccine administered, no adverse reactions reported",
    userId: "user-1",
    status: "pending"
  },
  {
    id: "3",
    title: "Blood Test Results", 
    date: "2023-12-20",
    summary: "Complete blood count and lipid panel - glucose levels normal, cholesterol slightly elevated",
    userId: "user-1",
    verifiedBy: "medical-1",
    status: "verified"
  },
  {
    id: "4",
    title: "Pregnancy Checkup",
    date: "2024-01-20",
    summary: "First trimester checkup - fetal development normal, mother's health stable",
    userId: "user-2",
    status: "pending"
  },
  {
    id: "5",
    title: "Child Vaccination",
    date: "2024-01-18",
    summary: "Routine childhood immunization - MMR vaccine administered",
    userId: "user-3", 
    status: "pending"
  }
];

// Mock medical team assigned patients
export const assignedPatients = [
  {
    userId: "user-1",
    userName: "Abebe Bekele Tadesse",
    faydaId: "FD-2024-ET-789012",
    pendingRecords: 1,
    totalRecords: 3
  },
  {
    userId: "user-2", 
    userName: "Tigist Woldemariam",
    faydaId: "FD-2024-ET-234567",
    pendingRecords: 1,
    totalRecords: 2
  },
  {
    userId: "user-3",
    userName: "Mohammed Ahmed Ali", 
    faydaId: "FD-2024-ET-345678",
    pendingRecords: 1,
    totalRecords: 1
  }
];

// Mock admin analytics
export const adminAnalytics = {
  totalUsers: 15642,
  totalMedicalTeam: 234,
  totalRecords: 45789,
  pendingVerifications: 89,
  flaggedContent: 3,
  systemHealth: "healthy"
};