import { Response, Request } from "express";
import { userService } from "../../services";

class Controller {
    public static controllerName = "UserController";

    public async GetAllUsers(req: Request, res: Response) {
        try {
            const users = await userService.GetAllRegisteredUsers();
            if (!users || users.length === 0) {
                return res.status(404).json({ message: "No users found" });
            }
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "Failed to retrieve users", error: error.message });
        }
    }

    public async CreateUser(req: Request, res: Response) {
        try {
            console.log(req.body);
            const newUser = await userService.CreateNewUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: "Failed to create user", error: error.message });
        }
    }

    public async GetUser(req: Request, res: Response) {
        try {
            const user = await userService.GetUser(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: "Failed to retrieve user", error: error.message });
        }
    }

    public async DeleteUser(req: Request, res: Response) {
        try {
            const deletedUser = await userService.DeleteUser(req.params.id);
            if (!deletedUser) {
                return res.status(404).json({ message: "User not found or already deleted" });
            }
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Failed to delete user", error: error.message });
        }
    }
}

export const userController = new Controller();
