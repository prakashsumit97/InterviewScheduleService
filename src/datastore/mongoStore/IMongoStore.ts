import * as _moongose from "mongoose";
import { UserModal } from "../../services/Modal/userModal";
import { IAvailability, IAvailabilitySlot } from "../../services/Modal/availabilityModal";
import { IInterview } from "../../services/Modal/interviewModal";

export interface IMongoStore {
    /**
     * All Registered User in our database
     */
    GetAllRegisteredUsers(): Promise<UserModal[]>;
    CreateNewUser(data: any): Promise<UserModal>;
    GetUser(id: string): Promise<UserModal>
    DeleteUser(id: string): Promise<boolean>

    /**
     * Availability of User for Interview
     */

    SetAvailabilitySlotForUser(data: IAvailability): Promise<IAvailability>
    GetAvailabilitySlotForUser(userId: string): Promise<IAvailability[]>
    GetAvailabilityOfUerOnParticularDate(id: string, date: string): Promise<IAvailability>;
    RemoveAvailabilitySlot(availabilityId: string): Promise<boolean>


    /**
     * Interview for user
     */

    ScheduleAInterview(data: IInterview): Promise<IInterview>
    GetDetailsOfSpecificInterview(id: string): Promise<IInterview>
    GetAllInterviewsOfUser(userId: string): Promise<IInterview[]>
    UpdateInterviewStatus(id: string, status: string): Promise<IInterview>

}

