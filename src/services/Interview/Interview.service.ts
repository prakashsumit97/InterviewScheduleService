import { IMongoStore } from "../../datastore/mongoStore/IMongoStore";
import { IInterview } from "../Modal/interviewModal";
import { IInterviewService } from "./IInterview.service";



export class InterviewService implements IInterviewService {
    _mongoStore: IMongoStore;

    constructor(mongoStore: IMongoStore) {
        this._mongoStore = mongoStore;
    }


    public async ScheduleAInterview(data: IInterview): Promise<IInterview> {
        let allSchedule: any = await this._mongoStore.ScheduleAInterview(data)
        return allSchedule;
    }

    public async GetDetailsOfSpecificInterview(id: string): Promise<IInterview> {
        let user = await this._mongoStore.GetDetailsOfSpecificInterview(id)
        return user;
    }


    public async GetAllInterviewsOfUser(userId: string): Promise<IInterview[]> {
        let user: any = await this._mongoStore.GetAllInterviewsOfUser(userId)
        return user;
    }

    public async UpdateInterviewStatus(id: string, status: string): Promise<IInterview> {
        let user: any = await this._mongoStore.UpdateInterviewStatus(id, status)
        return user;
    }
}