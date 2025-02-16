import { Express } from "express";
import { user } from "./user.routes";
import { availabilities } from "./availiabity.routes";
import { interview } from "./interview.routes";

export const RegisterRoutes = (app: Express) => {
    app.use("/interviewSchedulingService/api/users", user);
    app.use("/interviewSchedulingService/api/availabilities", availabilities)
    app.use("/interviewSchedulingService/api/interview", interview)
};
