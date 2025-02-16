import { Response, Request, NextFunction } from "express";
import { body, query, validationResult, param } from "express-validator";

class AvailablityApiValidator {
    public async SetAvailabilitySlotForUserValidator(req: Request, res: Response, next: NextFunction) {
        await Promise.all([
            body("userId", "Invalid userId format")
                .isMongoId()
                .withMessage("userId must be a valid MongoDB ObjectId")
                .run(req),

            body("date", "Invalid date format")
                .isISO8601()
                .withMessage("date must be in YYYY-MM-DD format")
                .run(req),

            body("slots")
                .isArray({ min: 1 })
                .withMessage("slots must be an array with at least one slot")
                .run(req),

            body("slots.*.startTime", "Invalid startTime format")
                .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
                .withMessage("startTime must be in HH:mm format (24-hour time)")
                .run(req),

            body("slots.*.endTime", "Invalid endTime format")
                .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
                .withMessage("endTime must be in HH:mm format (24-hour time)")
                .run(req),

            body("createdAt", "Invalid createdAt format")
                .optional()
                .isISO8601()
                .withMessage("createdAt must be a valid ISO date string")
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

    public async GetCommonAvailableSlotForIntAndCandValidator(req: Request, res: Response, next: NextFunction) {
        await Promise.all([
            query("interviewerId", "Invalid interviewerId format")
                .isMongoId()
                .withMessage("interviewerId must be a valid MongoDB ObjectId")
                .run(req),

            query("candidateId", "Invalid candidateId format")
                .isMongoId()
                .withMessage("candidateId must be a valid MongoDB ObjectId")
                .run(req),

            query("date", "Invalid date format")
                .isISO8601()
                .withMessage("date must be in YYYY-MM-DD format")
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


    public async GetAvailabilitySlotForUserValidator(req: Request, res: Response, next: NextFunction) {
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

    public async RemoveAvailabilitySlotValidator(req: Request, res: Response, next: NextFunction) {
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

export const availablityValidator = new AvailablityApiValidator();
