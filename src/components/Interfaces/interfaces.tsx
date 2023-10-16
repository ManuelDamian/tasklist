interface TASK {
  id: number;
  title: string;
  assignedTo?: string;
  status: "ToDo" | "Blocked" | "InProgress" | "InReview" | "Complete";
}

interface AppState {
  tasks: TASK[];
}

export type { TASK, AppState };
