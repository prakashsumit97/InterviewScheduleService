export interface UserModal {
    id: string;
    name: string;
    email: string;
    role: "interviewer" | "candidate"; // Assuming these are the only roles
    createdAt: Date;
    updatedAt?: Date;
}
