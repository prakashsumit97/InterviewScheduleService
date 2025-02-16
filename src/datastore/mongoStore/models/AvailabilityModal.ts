import mongoose from "mongoose";



const AvailabilitySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true }, // e.g. "2025-02-16"
    slots: [
        {
            startTime: { type: String, required: true }, // e.g. "10:00"
            endTime: { type: String, required: true }, // e.g. "11:00"
        },
    ],
    createdAt: { type: Date, default: Date.now },
});


const AvailabilityModal = mongoose.model<any>("availability", AvailabilitySchema);

export { AvailabilityModal };