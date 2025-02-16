import { Response, Request } from "express";
import { availabilityService } from "../../services";

class Controller {
    public static controllerName = "AvailabilityController";

    public async SetAvailabilitySlotForUser(req: Request, res: Response) {
        try {
            const createRes = await availabilityService.SetAvailabilitySlotForUser(req.body);
            res.status(200).json(createRes);
        } catch (error) {
            res.status(500).json({ message: "Failed to set availability slot", error: error.message });
        }
    }

    public async GetAvailabilitySlotForUser(req: Request, res: Response) {
        try {
            const allScheduleRes = await availabilityService.GetAvailabilitySlotForUser(req.params.id);
            if (!allScheduleRes) {
                return res.status(404).json({ message: "No availability slot found" });
            }
            res.status(200).json(allScheduleRes);
        } catch (error) {
            res.status(500).json({ message: "Failed to fetch availability slot", error: error.message });
        }
    }

    public async RemoveAvailabilitySlot(req: Request, res: Response) {
        try {
            const deletedSlot = await availabilityService.RemoveAvailabilitySlot(req.params.id);
            if (!deletedSlot) {
                return res.status(404).json({ message: "Availability slot not found" });
            }
            res.status(200).json({ message: "Availability slot removed successfully" });
        } catch (error) {
            res.status(500).json({ message: "Failed to remove availability slot", error: error.message });
        }
    }

    public async GetCommonAvailableSlotForIntAndCand(req: Request, res: Response) {
        try {
            const allScheduleRes = await availabilityService.GetCommonAvailableSlotForIntAndCand(
                req.query.interviewerId as string,
                req.query.candidateId as string,
                req.query.date as string
            );
            if (!allScheduleRes || allScheduleRes.length === 0) {
                return res.status(404).json({ message: "No common slots available" });
            }
            res.status(200).json(allScheduleRes);
        } catch (error) {
            res.status(500).json({ message: "Failed to fetch common available slots", error: error.message });
        }
    }
}

export const availabilityController = new Controller();
