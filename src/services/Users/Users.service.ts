import { IMongoStore } from "../../datastore/mongoStore/IMongoStore";
import { UserModal } from "../Modal/userModal";
import { IUserService } from "./IUser.service";

export class UserService implements IUserService {
    _mongoStore: IMongoStore;

    constructor(mongoStore: IMongoStore) {
        this._mongoStore = mongoStore;
    }

    public async GetAllRegisteredUsers(): Promise<UserModal[]> {
        let allSchedule = await this._mongoStore.GetAllRegisteredUsers()
        return allSchedule;
    }


    public async CreateNewUser(data: UserModal): Promise<UserModal> {
        let allSchedule = await this._mongoStore.CreateNewUser(data)
        return allSchedule;
    }

    public async GetUser(id: string): Promise<UserModal> {
        let user = await this._mongoStore.GetUser(id)
        return user;
    }

    public async DeleteUser(id: string): Promise<boolean> {
        let user = await this._mongoStore.DeleteUser(id)
        return user;
    }
}