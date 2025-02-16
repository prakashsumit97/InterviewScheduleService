import { IInterview } from "../Modal/interviewModal";

export interface IInterviewService {
    ScheduleAInterview(data: IInterview): Promise<IInterview>; // Returns the created interview
    GetDetailsOfSpecificInterview(id: string): Promise<IInterview>; // Returns interview details
    GetAllInterviewsOfUser(userId: string): Promise<IInterview[]>; // Returns all interviews of a user
    UpdateInterviewStatus(id: string, status: "scheduled" | "completed" | "cancelled"): Promise<IInterview>; // Updates and returns interview
}