export interface IAvailabilitySlot {
    startTime: string;  // Format: "HH:mm" (e.g., "09:00")
    endTime: string;    // Format: "HH:mm" (e.g., "10:00")
}

export interface IAvailability {
    id: string;
    userId: string;
    date: string;  // Format: "YYYY-MM-DD"
    slots: IAvailabilitySlot[];
    createdAt: Date;
}
