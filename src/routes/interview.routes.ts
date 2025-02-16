import * as express from "express";
import { interviewValidator } from "../validators";
import { interviewController } from "../controller/Interview/Interview.controller";

const router = express.Router();

/**
 * @swagger
 * /interviews/create:
 *      post:
 *          tags:
 *          - Interview
 *          description: Schedule a new interview
 *          consumes:
 *          - application/json
 *          parameters:
 *           - name: body
 *             in: body
 *             required: true
 *             schema:
 *               type: object
 *               required:
 *                 - interviewerId
 *                 - candidateId
 *                 - date
 *                 - startTime
 *                 - endTime
 *                 - status
 *               properties:
 *                 interviewerId:
 *                   type: string
 *                   example: "67b052881eb5ebc256ffde98"
 *                 candidateId:
 *                   type: string
 *                   example: "67b09c500a3f334b5e459bdd"
 *                 date:
 *                   type: string
 *                   format: date
 *                   example: "2025-02-16"
 *                 startTime:
 *                   type: string
 *                   example: "10:00"
 *                 endTime:
 *                   type: string
 *                   example: "11:00"
 *                 status:
 *                   type: string
 *                   enum: ["scheduled", "completed", "cancelled"]
 *                   example: "scheduled"
 *          responses:
 *              200:
 *                description: Interview scheduled successfully
 *                schema:
 *                   type: object
 *                   properties:
 *                      message:
 *                          type: string
 *                          example: "Interview scheduled successfully"
 *                      interviewId:
 *                          type: string
 *                          example: "abc123xyz"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */

router.post(
    "/create",
    interviewValidator.ScheduleAInterviewValidator,
    interviewController.ScheduleAInterview
);


/**
 * @swagger
 * /interviews/{id}:
 *      get:
 *          tags:
 *          - Interview
 *          description: Get details of a specific interview
 *          parameters:
 *           - name: id
 *             in: path
 *             required: true
 *             type: string
 *             example: "abc123xyz"
 *          responses:
 *              200:
 *                description: Interview details fetched successfully
 *                schema:
 *                   type: object
 *                   properties:
 *                      interviewerId:
 *                          type: string
 *                          example: "67b052881eb5ebc256ffde98"
 *                      candidateId:
 *                          type: string
 *                          example: "67b09c500a3f334b5e459bdd"
 *                      date:
 *                          type: string
 *                          format: date
 *                          example: "2025-02-16"
 *                      startTime:
 *                          type: string
 *                          example: "10:00"
 *                      endTime:
 *                          type: string
 *                          example: "11:00"
 *                      status:
 *                          type: string
 *                          enum: ["scheduled", "completed", "cancelled"]
 *                          example: "scheduled"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */

router.get(
    "/:id",
    interviewValidator.GetDetailsOfSpecificInterviewValidator,
    interviewController.GetDetailsOfSpecificInterview
);




/**
 * @swagger
 * /interviews/user/{id}:
 *      get:
 *          tags:
 *          - Interview
 *          description: Get all interviews for a specific user
 *          parameters:
 *           - name: id
 *             in: path
 *             required: true
 *             type: string
 *             example: "67b09c500a3f334b5e459bdd"
 *          responses:
 *              200:
 *                description: User's interviews fetched successfully
 *                schema:
 *                   type: array
 *                   items:
 *                      type: object
 *                      properties:
 *                        interviewId:
 *                          type: string
 *                          example: "abc123xyz"
 *                        interviewerId:
 *                          type: string
 *                          example: "67b052881eb5ebc256ffde98"
 *                        candidateId:
 *                          type: string
 *                          example: "67b09c500a3f334b5e459bdd"
 *                        date:
 *                          type: string
 *                          format: date
 *                          example: "2025-02-16"
 *                        startTime:
 *                          type: string
 *                          example: "10:00"
 *                        endTime:
 *                          type: string
 *                          example: "11:00"
 *                        status:
 *                          type: string
 *                          enum: ["scheduled", "completed", "cancelled"]
 *                          example: "scheduled"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */

router.get(
    "/user/:id",
    interviewValidator.GetAllInterviewsOfUserValidator,
    interviewController.GetAllInterviewsOfUser
);


/**
 * @swagger
 * /interviews/{id}/cancel:
 *      patch:
 *          tags:
 *          - Interview
 *          description: Cancel an interview by ID
 *          parameters:
 *           - name: id
 *             in: path
 *             required: true
 *             type: string
 *             example: "abc123xyz"
 *          responses:
 *              200:
 *                description: Interview cancelled successfully
 *                schema:
 *                   type: object
 *                   properties:
 *                      message:
 *                          type: string
 *                          example: "Interview cancelled successfully"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */

router.patch(
    "/:id/cancel",
    interviewValidator.CancelInterviewStatusValidator,
    interviewController.CancelInterviewStatus
);

/**
 * @swagger
 * /interviews/{id}/complete:
 *      patch:
 *          tags:
 *          - Interview
 *          description: Mark an interview as complete
 *          parameters:
 *           - name: id
 *             in: path
 *             required: true
 *             type: string
 *             example: "abc123xyz"
 *          responses:
 *              200:
 *                description: Interview marked as complete
 *                schema:
 *                   type: object
 *                   properties:
 *                      message:
 *                          type: string
 *                          example: "Interview marked as complete"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */
router.patch(
    "/:id/complete",
    interviewValidator.MarkInterviewStatusAsCompleteValidator,
    interviewController.MarkInterviewStatusAsComplete
);


export const interview = router;
