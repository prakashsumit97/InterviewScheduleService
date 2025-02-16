import { Response, Request } from "express";
import { interviewService } from "../../services";

class Controller {
    public static controllerName = "InterviewController";

    public async ScheduleAInterview(req: Request, res: Response) {
        try {
            const createRes = await interviewService.ScheduleAInterview(req.body);
            res.status(201).json(createRes);
        } catch (error) {
            res.status(500).json({ message: "Failed to schedule an interview", error: error.message });
        }
    }

    public async GetDetailsOfSpecificInterview(req: Request, res: Response) {
        try {
            const interviewDetails = await interviewService.GetDetailsOfSpecificInterview(req.params.id);
            if (!interviewDetails) {
                return res.status(404).json({ message: "Interview not found" });
            }
            res.status(200).json(interviewDetails);
        } catch (error) {
            res.status(500).json({ message: "Failed to fetch interview details", error: error.message });
        }
    }

    public async GetAllInterviewsOfUser(req: Request, res: Response) {
        try {
            const interviews = await interviewService.GetAllInterviewsOfUser(req.params.id);
            if (!interviews || interviews.length === 0) {
                return res.status(404).json({ message: "No interviews found for the user" });
            }
            res.status(200).json(interviews);
        } catch (error) {
            res.status(500).json({ message: "Failed to fetch interviews", error: error.message });
        }
    }

    public async CancelInterviewStatus(req: Request, res: Response) {
        try {
            const updatedInterview = await interviewService.UpdateInterviewStatus(req.params.id, "cancelled");
            if (!updatedInterview) {
                return res.status(404).json({ message: "Interview not found or already canceled" });
            }
            res.status(200).json({ message: "Interview status updated to canceled" });
        } catch (error) {
            res.status(500).json({ message: "Failed to cancel interview", error: error.message });
        }
    }

    public async MarkInterviewStatusAsComplete(req: Request, res: Response) {
        try {
            const updatedInterview = await interviewService.UpdateInterviewStatus(req.params.id, "completed");
            if (!updatedInterview) {
                return res.status(404).json({ message: "Interview not found or already completed" });
            }
            res.status(200).json({ message: "Interview status updated to complete" });
        } catch (error) {
            res.status(500).json({ message: "Failed to mark interview as complete", error: error.message });
        }
    }
}

export const interviewController = new Controller();
