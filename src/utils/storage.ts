import { CrewRequestData, PlumberApplicationData } from '../types';

const STORAGE_KEYS = {
  SAVED_JOBS: 'manstaffplumbing_saved_jobs_v1',
  CREW_REQUESTS: 'manstaffplumbing_crew_requests_v1',
  JOB_APPLICATIONS: 'manstaffplumbing_job_applications_v1',
  RECENT_SEARCHES: 'manstaffplumbing_recent_searches_v1',
};

// Safe JSON parser helper
function safeGet<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw) as T;
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
}

function safeSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error saving to localStorage key "${key}":`, error);
  }
}

/* SAVED JOBS */
export function getSavedJobIds(): string[] {
  return safeGet<string[]>(STORAGE_KEYS.SAVED_JOBS, []);
}

export function toggleSaveJob(jobId: string): boolean {
  const current = getSavedJobIds();
  let updated: string[];
  let isSaved = false;

  if (current.includes(jobId)) {
    updated = current.filter(id => id !== jobId);
    isSaved = false;
  } else {
    updated = [jobId, ...current];
    isSaved = true;
  }

  safeSet(STORAGE_KEYS.SAVED_JOBS, updated);
  return isSaved;
}

export function isJobSaved(jobId: string): boolean {
  return getSavedJobIds().includes(jobId);
}

/* CREW REQUESTS (EMPLOYERS) */
export function getStoredCrewRequests(): CrewRequestData[] {
  return safeGet<CrewRequestData[]>(STORAGE_KEYS.CREW_REQUESTS, []);
}

export function saveCrewRequest(request: Omit<CrewRequestData, 'id' | 'submittedAt' | 'status'>): CrewRequestData {
  const current = getStoredCrewRequests();
  const newRecord: CrewRequestData = {
    ...request,
    id: `CR-${Date.now().toString().slice(-6)}`,
    submittedAt: new Date().toISOString(),
    status: 'Pending Review',
  };
  safeSet(STORAGE_KEYS.CREW_REQUESTS, [newRecord, ...current]);
  return newRecord;
}

/* PLUMBER APPLICATIONS (CANDIDATES) */
export function getStoredJobApplications(): PlumberApplicationData[] {
  return safeGet<PlumberApplicationData[]>(STORAGE_KEYS.JOB_APPLICATIONS, []);
}

export function saveJobApplication(app: Omit<PlumberApplicationData, 'id' | 'submittedAt' | 'status'>): PlumberApplicationData {
  const current = getStoredJobApplications();
  const newRecord: PlumberApplicationData = {
    ...app,
    id: `APP-${Date.now().toString().slice(-6)}`,
    submittedAt: new Date().toISOString(),
    status: 'Received',
  };
  safeSet(STORAGE_KEYS.JOB_APPLICATIONS, [newRecord, ...current]);
  return newRecord;
}

/* RECENT SEARCHES */
export function getRecentSearches(): string[] {
  return safeGet<string[]>(STORAGE_KEYS.RECENT_SEARCHES, []);
}

export function addRecentSearch(query: string): void {
  const trimmed = query.trim();
  if (!trimmed) return;
  const current = getRecentSearches().filter(q => q.toLowerCase() !== trimmed.toLowerCase());
  safeSet(STORAGE_KEYS.RECENT_SEARCHES, [trimmed, ...current].slice(0, 8));
}

export function clearAllLocalData(): void {
  try {
    Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k));
  } catch (err) {
    console.error(err);
  }
}
