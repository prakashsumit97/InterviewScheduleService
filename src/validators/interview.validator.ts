import { Response, Request, NextFunction } from "express";
import { param, body, query, validationResult } from "express-validator";

class InterviewValidator {
    public async ScheduleAInterviewValidator(req: Request, res: Response, next: NextFunction) {
        await Promise.all([
            body("interviewerId", "Invalid interviewerId format")
                .isMongoId()
                .withMessage("interviewerId must be a valid MongoDB ObjectId")
                .run(req),

            body("candidateId", "Invalid candidateId format")
                .isMongoId()
                .withMessage("candidateId must be a valid MongoDB ObjectId")
                .run(req),

            body("date", "Invalid date format")
                .isISO8601()
                .withMessage("date must be in YYYY-MM-DD format")
                .run(req),

            body("startTime", "startTime is required and must be in HH:mm format")
                .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
                .withMessage("startTime must be in HH:mm format")
                .run(req),

            body("endTime", "endTime is required and must be in HH:mm format")
                .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
                .withMessage("endTime must be in HH:mm format")
                .run(req),

            body("status", "status must be one of: scheduled, cancelled, completed")
                .isIn(["scheduled", "cancelled", "completed"])
                .withMessage("Invalid status value")
                .run(req),

            body("createdAt", "Invalid createdAt timestamp")
                .isISO8601()
                .withMessage("createdAt must be a valid timestamp")
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

    public async GetDetailsOfSpecificInterviewValidator(req: Request, res: Response, next: NextFunction) {
        await Promise.all([
            param("id", "Invalid interviewerId format")
                .isMongoId()
                .withMessage("interviewerId must be a valid MongoDB ObjectId")
                .run(req),
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


    public async GetAllInterviewsOfUserValidator(req: Request, res: Response, next: NextFunction) {
        await Promise.all([
            param("id", "id UserId format")
                .isMongoId()
                .withMessage("user id must be a valid MongoDB ObjectId")
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

    public async CancelInterviewStatusValidator(req: Request, res: Response, next: NextFunction) {
        await Promise.all([
            param("id", "id interviewerId format")
                .isMongoId()
                .withMessage("id must be a valid MongoDB ObjectId")
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

    public async MarkInterviewStatusAsCompleteValidator(req: Request, res: Response, next: NextFunction) {
        await Promise.all([
            param("id", "id interviewerId format")
                .isMongoId()
                .withMessage("id must be a valid MongoDB ObjectId")
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

export const interviewValidator = new InterviewValidator();
