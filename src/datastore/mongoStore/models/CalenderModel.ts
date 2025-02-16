import * as mongoose from "mongoose";


const Schema = mongoose.Schema;

// Updated Schema Definition
const calender = new Schema({
    slots: [
        {
            startTime: { type: String, required: true }, // e.g. "10:00"
            endTime: { type: String, required: true }, // e.g. "11:00"
        },
    ],
    createdAt: { type: Date, default: Date.now },
});


const CalenderModel = mongoose.model<any>("calender", calender);

export { CalenderModel };
