import { IAvailability, IAvailabilitySlot } from "../Modal/availabilityModal";

export interface IAvailabilityService {
    SetAvailabilitySlotForUser(data: IAvailability): Promise<IAvailability>; // Returns the created availability entry
    GetAvailabilitySlotForUser(userId: string): Promise<IAvailability[]>;    // Returns all availability slots for a user
    GetCommonAvailableSlotForIntAndCand(interviewerId: string, userId: string, date: string): Promise<IAvailabilitySlot[]>; // Returns common slots
    RemoveAvailabilitySlot(availabilityId: string): Promise<boolean>;       // Returns true if deletion was successful
}