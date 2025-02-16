import { UserModal } from "../Modal/userModal";

export interface IUserService {
    GetAllRegisteredUsers(): Promise<UserModal[]>;
    CreateNewUser(data: any): Promise<UserModal>;
    GetUser(id: string): Promise<UserModal | null>;
    DeleteUser(id: string): Promise<boolean>;
}