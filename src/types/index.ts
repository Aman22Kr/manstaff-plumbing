export type TradeCategory = 
  | 'commercial'
  | 'industrial'
  | 'healthcare'
  | 'fire-protection'
  | 'civil-utilities'
  | 'management';

export interface TradeSpecialty {
  id: string;
  slug: string;
  title: string;
  category: TradeCategory;
  shortDescription: string;
  fullDescription: string;
  image: string;
  certificationsRequired: string[];
  toolsProvidedOrRequired: string[];
  typicalProjects: string[];
  payRangeHourly: string;
  demandLevel: 'High' | 'Critical Surge' | 'Year-round';
  codeStandards: string[];
}

export interface PlumbingJob {
  id: string;
  title: string;
  slug: string;
  tradeSpecialty: string;
  category: TradeCategory;
  location: string;
  city: string;
  state: string;
  payRateHourly: string;
  perDiemDaily: string;
  duration: string;
  hoursPerWeek: string;
  overtimeAvailable: boolean;
  startDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  urgent: boolean;
  postedDate: string;
}

export interface CrewRequestData {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  jobLocationCity: string;
  jobLocationState: string;
  projectType: string;
  tradeRequired: string;
  numberOfWorkers: number;
  startDate: string;
  estimatedDuration: string;
  notes?: string;
  submittedAt: string;
  status: 'Pending Review' | 'Assigned Dispatcher' | 'Crew Confirmed';
}

export interface PlumberApplicationData {
  id: string;
  jobId?: string;
  jobTitle?: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  currentLicense: string;
  yearsExperience: number;
  specialties: string[];
  willingToTravel: boolean;
  hasOwnTransportation: boolean;
  oshaCertified: boolean;
  medgasCertified: boolean;
  notes?: string;
  submittedAt: string;
  status: 'Received' | 'Screening Scheduled' | 'Verified';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  location: string;
  type: 'contractor' | 'plumber';
  metric: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'all' | 'employers' | 'plumbers' | 'licensing' | 'payroll';
}
