import * as express from "express";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import swaggerJSDoc = require("swagger-jsdoc");
import Database from "./config/mongoconfig";
import * as swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes";

export const app = express();





if (process.env.CORSENABLED == "true") {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
        );
        next();
    });
}

// Swagger Documentation Configuration
if (process.env.SWAGGERDOCENABLED == "true") {
    const options = {
        swaggerDefinition: {
            info: {
                title: "Interview Scheduling Service",
                version: "1.0.0",
                description: "Calender Apis"
            },
            basePath: "/",
            schemes: ["http", "https"],
            securityDefinitions: {
                AccessTokenAuth: {
                    type: "apiKey",
                    in: "header",
                    name: "x-access-token"
                }
            }
        },
        apis: ["./dist/**/*.js"]
    };

    const spec = swaggerJSDoc(options);

    app.get("/interviewSchedulingService/api-docs.json", function (req, res) {
        res.setHeader("Content-Type", "application/json");
        res.send(spec);
    });

    app.use("/interviewSchedulingService/api-docs", swaggerUi.serve, swaggerUi.setup(spec));
}

// MongoDB Connection
Database.getDbInstance()
    .then(() => {
        console.log("MongoDB Connected!");
    })
    .catch((e: unknown) => {
        console.error(`ERR_MONGO_CONNECTION: ${e}`);
        throw e;
    });

app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));
app.use(cookieParser());
app.use("/interviewSchedulingService/readme", express.static(path.join(__dirname, "public")));

RegisterRoutes(app);
