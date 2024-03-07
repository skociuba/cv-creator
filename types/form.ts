export type WorkHistoryItem = {
  position: string;
  employer: string;
  startDate: string;
  endDate: string;
};

export type FormState = {
  firstName: string;
  lastName: string;
  jobTitle: string | null;
  nationality: string;
  city: string;
  about: string | null;
  email: string;
  phone: string;
  workHistory: WorkHistoryItem[];
};
