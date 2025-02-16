import { Response, Request, NextFunction } from "express";
import { body, param, query, validationResult } from "express-validator";

class UserValidator {
    public async CreateUserValidator(req: Request, res: Response, next: NextFunction) {
        await Promise.all([
            body("name", "Name is required and must be at least 3 characters long")
                .trim()
                .isLength({ min: 3 })
                .withMessage("Name must be at least 3 characters long")
                .run(req),

            body("email", "Invalid email format")
                .isEmail()
                .withMessage("Email must be a valid email address")
                .run(req),

            body("role", "Role must be either 'candidate' or 'interviewer'")
                .isIn(["candidate", "interviewer"])
                .withMessage("Invalid role value")
                .run(req)
        ]);

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        } catch (e) {
            res.status(500).json({ message: "Validation error", error: e });
        }
    }


    public async GetUserValidator(req: Request, res: Response, next: NextFunction) {
        await Promise.all([
            param("id", "id UserId format")
                .isMongoId()
                .withMessage("UserId must be a valid MongoDB ObjectId")
                .run(req)
        ]);

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        } catch (e) {
            res.status(500).json({ message: "Validation error", error: e });
        }
    }

    public async DeleteUservalidator(req: Request, res: Response, next: NextFunction) {
        await Promise.all([
            param("id", "id userId format")
                .isMongoId()
                .withMessage("UserId must be a valid MongoDB ObjectId")
                .run(req)
        ]);

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        } catch (e) {
            res.status(500).json({ message: "Validation error", error: e });
        }
    }
}

export const userValidator = new UserValidator();
