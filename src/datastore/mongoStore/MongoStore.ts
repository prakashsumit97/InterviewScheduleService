
import mongoose, * as _moongose from "mongoose";
import { CalenderModel } from "./models/CalenderModel";
import { IMongoStore } from "./IMongoStore";
import { UserModel } from "./models/UserModel";
import { AvailabilityModal } from "./models/AvailabilityModal";
import { InterviewModel } from "./models/InterviewModal";
import { UserModal } from "../../services/Modal/userModal";
import { IAvailability } from "../../services/Modal/availabilityModal";
import { IInterview } from "../../services/Modal/interviewModal";

export class MongoStore implements IMongoStore {
    public async GetCalenerAllSchedule(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                // const applicationCreateRequestModel = new CalenderModel();
                const result = await CalenderModel.find();

                resolve(result);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    public async CreateInterviewSlotForCurrentDay(data: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const applicationCreateRequestModel = new CalenderModel(data);
                const result = await applicationCreateRequestModel.save();

                resolve(result);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    public async GetAllRegisteredUsers(): Promise<UserModal[]> {
        return new Promise(async (resolve, reject) => {
            try {
                // const applicationCreateRequestModel = new CalenderModel();
                const result = await UserModel.find();

                resolve(result);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    public async CreateNewUser(data: any): Promise<UserModal> {
        return new Promise(async (resolve, reject) => {
            try {
                const createUserModel = new UserModel(data);
                const result = await createUserModel.save();

                resolve(result);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }


    public async GetUser(id: string): Promise<UserModal> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await UserModel.find({ _id: new mongoose.Types.ObjectId(id) });

                resolve(result.length ? result[0] : []);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    public async DeleteUser(id: string): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await UserModel.deleteMany({ _id: new mongoose.Types.ObjectId(id) });

                resolve(result?.acknowledged);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    public async SetAvailabilitySlotForUser(data: IAvailability): Promise<IAvailability> {
        return new Promise(async (resolve, reject) => {
            try {
                const createAvailabilityModel = new AvailabilityModal(data);
                const result = await createAvailabilityModel.save();

                resolve(result);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    public async GetAvailabilitySlotForUser(id: string): Promise<IAvailability[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await AvailabilityModal.find({ userId: new mongoose.Types.ObjectId(id) });

                resolve(result);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    public async GetAvailabilityOfUerOnParticularDate(id: string, date: string): Promise<IAvailability> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await AvailabilityModal.find({ userId: id, date });

                resolve(result.length ? result[0] : []);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }


    public async RemoveAvailabilitySlot(id: string): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await AvailabilityModal.deleteMany({ _id: new mongoose.Types.ObjectId(id) });

                resolve(result?.acknowledged);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }


    public async ScheduleAInterview(data: IInterview): Promise<IInterview> {
        return new Promise(async (resolve, reject) => {
            try {
                const createInterviewModel = new InterviewModel(data);
                const result = await createInterviewModel.save();

                resolve(result);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    public async GetDetailsOfSpecificInterview(id: string): Promise<IInterview> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await InterviewModel.find({ _id: new mongoose.Types.ObjectId(id) });

                resolve(result.length ? result[0] : []);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    public async GetAllInterviewsOfUser(userId: string): Promise<IInterview[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await InterviewModel.find({
                    $or: [
                        { interviewerId: new mongoose.Types.ObjectId(userId) },
                        { candidateId: new mongoose.Types.ObjectId(userId) }
                    ]
                });

                resolve(result);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }

    public async UpdateInterviewStatus(id: string, status: string): Promise<IInterview> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await InterviewModel.findByIdAndUpdate(id, { status: status }, { new: true });

                resolve(result);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }
}
