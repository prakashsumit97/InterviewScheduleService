export interface IInterview {
    id: string;
    interviewerId: string;
    candidateId: string;
    date: string; // Format: "YYYY-MM-DD"
    startTime: string; // Format: "HH:mm"
    endTime: string;   // Format: "HH:mm"
    status: "scheduled" | "completed" | "cancelled";
    createdAt: Date;
}
