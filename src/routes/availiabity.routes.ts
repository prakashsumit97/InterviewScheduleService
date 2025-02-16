import * as express from "express";
import { availablityValidator } from "../validators";
import { availabilityController } from "../controller/Availablity/Availiabity.controller";

const router = express.Router();

/**
 * @swagger
 * /interviewSchedulingService/api/availabilities/create:
 *      post:
 *          tags:
 *          - Availability
 *          description: Create an availability slot for a user
 *          consumes:
 *          - application/json
 *          parameters:
 *           - name: body
 *             in: body
 *             required: true
 *             schema:
 *               type: object
 *               required:
 *                 - userId
 *                 - date
 *                 - slots
 *               properties:
 *                 userId:
 *                   type: string
 *                   example: "67b09c500a3f334b5e459bdd"
 *                 date:
 *                   type: string
 *                   format: date
 *                   example: "2025-02-16"
 *                 slots:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       startTime:
 *                         type: string
 *                         example: "09:00"
 *                       endTime:
 *                         type: string
 *                         example: "10:00"
 *          responses:
 *              200:
 *                description: Availability slot created successfully
 *                schema:
 *                   type: object
 *                   properties:
 *                      message:
 *                          type: string
 *                          example: "Availability slot created successfully"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */
router.post(
    "/create",
    availablityValidator.SetAvailabilitySlotForUserValidator,
    availabilityController.SetAvailabilitySlotForUser
);


/**
 * @swagger
 * /interviewSchedulingService/api/availabilities/common:
 *      get:
 *          tags:
 *          - Availability
 *          description: Get common available slots for interviewer and candidate
 *          parameters:
 *           - name: interviewerId
 *             in: query
 *             required: true
 *             type: string
 *             example: "67b052881eb5ebc256ffde98"
 *           - name: candidateId
 *             in: query
 *             required: true
 *             type: string
 *             example: "67b09c500a3f334b5e459bdd"
 *           - name: date
 *             in: query
 *             required: true
 *             type: string
 *             format: date
 *             example: "2025-02-16"
 *          responses:
 *              200:
 *                description: Common available slots fetched successfully
 *                schema:
 *                   type: object
 *                   properties:
 *                      slots:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              startTime:
 *                                type: string
 *                                example: "09:00"
 *                              endTime:
 *                                type: string
 *                                example: "10:00"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */
router.get(
    "/common",
    availablityValidator.GetCommonAvailableSlotForIntAndCandValidator,
    availabilityController.GetCommonAvailableSlotForIntAndCand
);



/**
 * @swagger
 * /interviewSchedulingService/api/availabilities/get/{id}:
 *      get:
 *          tags:
 *          - Availability
 *          description: Get availability slots for a specific user
 *          parameters:
 *           - name: id
 *             in: path
 *             required: true
 *             type: string
 *             example: "67b09c500a3f334b5e459bdd"
 *          responses:
 *              200:
 *                description: User availability slots fetched successfully
 *                schema:
 *                   type: object
 *                   properties:
 *                      slots:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              date:
 *                                type: string
 *                                format: date
 *                                example: "2025-02-16"
 *                              startTime:
 *                                type: string
 *                                example: "09:00"
 *                              endTime:
 *                                type: string
 *                                example: "10:00"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */

router.get(
    "/get/:id",
    availablityValidator.GetAvailabilitySlotForUserValidator,
    availabilityController.GetAvailabilitySlotForUser
);


/**
 * @swagger
 * /interviewSchedulingService/api/availabilities/{id}:
 *      delete:
 *          tags:
 *          - Availability
 *          description: Remove an availability slot by ID
 *          parameters:
 *           - name: id
 *             in: path
 *             required: true
 *             type: string
 *             example: "67b09c500a3f334b5e459bdd"
 *          responses:
 *              200:
 *                description: Availability slot removed successfully
 *                schema:
 *                   type: object
 *                   properties:
 *                      message:
 *                          type: string
 *                          example: "Availability slot deleted successfully"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */


router.delete(
    "/:id",
    availablityValidator.RemoveAvailabilitySlotValidator,
    availabilityController.RemoveAvailabilitySlot
);

export const availabilities = router;
