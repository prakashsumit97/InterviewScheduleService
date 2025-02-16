// Function to find overlapping slots
export const findCommonSlots = (slots1: any[], slots2: any[]) => {
    const commonSlots: any[] = [];

    slots1.forEach(slot1 => {
        slots2.forEach(slot2 => {
            const start = Math.max(timeToMinutes(slot1.startTime), timeToMinutes(slot2.startTime));
            const end = Math.min(timeToMinutes(slot1.endTime), timeToMinutes(slot2.endTime));

            if (start < end) {
                commonSlots.push({
                    startTime: minutesToTime(start),
                    endTime: minutesToTime(end),
                });
            }
        });
    });

    return commonSlots;
};

// Helper function: Convert time "HH:MM" to minutes
const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
};

// Helper function: Convert minutes back to "HH:MM"
const minutesToTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
};