export type WorkHistoryItem = {
  position: string;
  employer: string;
  startDate: string;
  endDate: string;
};

export type FormState = {
  firstName: string;
  lastName: string;
  age: string | null;
  nationality: string;
  sex: string | null;
  about: string | null;
  agree: boolean | null;
  workHistory: WorkHistoryItem[];
};
