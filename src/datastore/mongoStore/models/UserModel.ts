import * as mongoose from "mongoose";


const Schema = mongoose.Schema;

// Updated Schema Definition
const user = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    role: { type: String, enum: ["interviewer", "candidate"], required: true },
    createdAt: { type: Date, default: Date.now },
});


const UserModel = mongoose.model<any>("user", user);

export { UserModel };
