import mongoose from "mongoose";

const InterviewSchema = new mongoose.Schema({
    interviewerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true }, // Interview date
    startTime: { type: String, required: true }, // e.g. "10:30"
    endTime: { type: String, required: true }, // e.g. "11:30"
    status: { type: String, enum: ["scheduled", "completed", "canceled"], default: "scheduled" },
    createdAt: { type: Date, default: Date.now },
});


const InterviewModel = mongoose.model<any>("interview", InterviewSchema);

export { InterviewModel };