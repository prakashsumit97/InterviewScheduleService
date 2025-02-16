import { IMongoStore } from "../datastore/mongoStore/IMongoStore";
import { mongoStore } from "../datastore/mongoStore/MongoStoreFactory";
import { AvailabilityService } from "./Availability/Availability.service";
import { IAvailabilityService } from "./Availability/IAvailability.service";

import { IInterviewService } from "./Interview/IInterview.service";
import { InterviewService } from "./Interview/Interview.service";
import { IUserService } from "./Users/IUser.service";
import { UserService } from "./Users/Users.service";



interface IUserServiceInternal {
    new(mongoStore: IMongoStore): IUserService;
}

const GetUserService = (ctor: IUserServiceInternal): IUserService => {
    return new ctor(mongoStore);
};



interface IAvailablityServiceInternal {
    new(mongoStore: IMongoStore): IAvailabilityService;
}

const GetAvailabilityService = (ctor: IAvailablityServiceInternal): IAvailabilityService => {
    return new ctor(mongoStore);
};


interface IInterviewServiceInternal {
    new(mongoStore: IMongoStore): IInterviewService;
}

const GetInterviewService = (ctor: IInterviewServiceInternal): IInterviewService => {
    return new ctor(mongoStore);
};

export const userService = GetUserService(UserService);
export const availabilityService = GetAvailabilityService(AvailabilityService);
export const interviewService = GetInterviewService(InterviewService);

