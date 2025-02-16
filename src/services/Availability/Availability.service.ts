import { IMongoStore } from "../../datastore/mongoStore/IMongoStore";
import { findCommonSlots } from "../../utility";
import { IAvailability, IAvailabilitySlot } from "../Modal/availabilityModal";
import { IAvailabilityService } from "./IAvailability.service";



export class AvailabilityService implements IAvailabilityService {
    _mongoStore: IMongoStore;

    constructor(mongoStore: IMongoStore) {
        this._mongoStore = mongoStore;
    }


    public async SetAvailabilitySlotForUser(data: IAvailability): Promise<IAvailability> {
        let allSchedule = await this._mongoStore.SetAvailabilitySlotForUser(data)
        return allSchedule;
    }

    public async GetAvailabilitySlotForUser(id: string): Promise<IAvailability[]> {
        let user = await this._mongoStore.GetAvailabilitySlotForUser(id)
        return user;
    }

    public async RemoveAvailabilitySlot(id: string): Promise<boolean> {
        let user = await this._mongoStore.RemoveAvailabilitySlot(id)
        return user;
    }

    public async GetCommonAvailableSlotForIntAndCand(interviewerId: string, candidateId: string, date: string): Promise<IAvailabilitySlot[]> {
        // Get interviewer and candidate schedules for the given date
        const interviewerSchedule = await this._mongoStore.GetAvailabilityOfUerOnParticularDate(interviewerId, date);
        const candidateSchedule = await this._mongoStore.GetAvailabilityOfUerOnParticularDate(candidateId, date);

        if (!interviewerSchedule || !candidateSchedule) {
            throw new Error("Schedule not found for one or both users.")
        }
        console.log(interviewerSchedule, candidateSchedule)
        const commonSlots = findCommonSlots(interviewerSchedule.slots, candidateSchedule.slots);

        return commonSlots;

    }
}