import * as express from "express";
import { userValidator } from "../validators";
import { userController } from "../controller/users/users.controller";

const router = express.Router();

/**
 * @swagger
 * /users/register:
 *      post:
 *          tags:
 *          - User
 *          description: Register a new user
 *          consumes:
 *          - application/json
 *          parameters:
 *           - name: body
 *             in: body
 *             required: true
 *             schema:
 *               type: object
 *               required:
 *                 - name
 *                 - email
 *                 - password
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: "johndoe@example.com"
 *                 password:
 *                   type: string
 *                   format: password
 *                   example: "SecureP@ss123"
 *          responses:
 *              200:
 *                description: User registered successfully
 *                schema:
 *                   type: object
 *                   properties:
 *                      message:
 *                          type: string
 *                          example: "User registered successfully"
 *                      userId:
 *                          type: string
 *                          example: "abc123xyz"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */

router.post(
    "/register",
    userValidator.CreateUserValidator,
    userController.CreateUser
);


/**
 * @swagger
 * /users/all:
 *      get:
 *          tags:
 *          - User
 *          description: Get all registered users
 *          responses:
 *              200:
 *                description: Users fetched successfully
 *                schema:
 *                   type: array
 *                   items:
 *                      type: object
 *                      properties:
 *                        userId:
 *                          type: string
 *                          example: "abc123xyz"
 *                        name:
 *                          type: string
 *                          example: "John Doe"
 *                        email:
 *                          type: string
 *                          example: "johndoe@example.com"
 *              500:
 *                description: Internal server error
 */

router.get(
    "/all",
    userController.GetAllUsers
);


/**
 * @swagger
 * /users/{id}:
 *      get:
 *          tags:
 *          - User
 *          description: Get details of a specific user
 *          parameters:
 *           - name: id
 *             in: path
 *             required: true
 *             type: string
 *             example: "abc123xyz"
 *          responses:
 *              200:
 *                description: User details fetched successfully
 *                schema:
 *                   type: object
 *                   properties:
 *                      userId:
 *                          type: string
 *                          example: "abc123xyz"
 *                      name:
 *                          type: string
 *                          example: "John Doe"
 *                      email:
 *                          type: string
 *                          example: "johndoe@example.com"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */


router.get(
    "/:id",
    userValidator.GetUserValidator,
    userController.GetUser
);

/**
 * @swagger
 * /users/{id}:
 *      delete:
 *          tags:
 *          - User
 *          description: Delete a user by ID
 *          parameters:
 *           - name: id
 *             in: path
 *             required: true
 *             type: string
 *             example: "abc123xyz"
 *          responses:
 *              200:
 *                description: User deleted successfully
 *                schema:
 *                   type: object
 *                   properties:
 *                      message:
 *                          type: string
 *                          example: "User deleted successfully"
 *              400:
 *                description: Validation error
 *              500:
 *                description: Internal server error
 */

router.delete(
    "/:id",
    userValidator.DeleteUservalidator,
    userController.DeleteUser
);


export const user = router;
