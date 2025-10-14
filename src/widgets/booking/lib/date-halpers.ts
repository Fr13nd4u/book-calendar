export const getNextDates = (weeksAhead = 6): {
    day: number;
    month: string;
    weekDay: string;
    fullDate: Date;
    edgeOfMonth: boolean;
}[] => {
    const today = new Date();
    const result: {
        day: number;
        month: string;
        weekDay: string;
        fullDate: Date;
        edgeOfMonth: boolean;
    }[] = [];

    const totalDays = weeksAhead * 7;

    for (let i = 0; i < totalDays; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);

        const day = nextDate.getDate();
        const lastDay = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
        const edgeOfMonth = day === 1 || day === lastDay;

        result.push({
            day: nextDate.getDate(),
            month: nextDate.toLocaleString("en-US", { month: "short" }),
            weekDay: nextDate.toLocaleString("en-US", { weekday: "short" }),
            fullDate: nextDate,
            edgeOfMonth
        });
    }

    return result;
};

export const getTimeSlots = (date: Date): { label: string; timestamp: number }[] => {
    const slots: { label: string; timestamp: number }[] = [];
    const now = new Date();

    for (let hour = 0; hour < 24; hour++) {
        for (let min = 0; min < 60; min += 15) {
            const h12 = hour % 12 || 12;
            const mStr = min.toString().padStart(2, "0");
            const period = hour < 12 ? "AM" : "PM";
            const label = `${h12}:${mStr} ${period}`;

            const slotDate = new Date(date);
            slotDate.setHours(hour, min, 0, 0);

            if (slotDate.getTime() < now.getTime()) continue;

            slots.push({
                label,
                timestamp: Math.floor(slotDate.getTime() / 1000),
            });
        }
    }

    return slots;
};

export const timeLabelToTimestamp = (date: Date, timeLabel: string): number => {
    const timeParts = timeLabel.match(/(\d+):(\d+)\s?(AM|PM)/i);
    if (!timeParts) return NaN;

    let hours = parseInt(timeParts[1], 10);
    const minutes = parseInt(timeParts[2], 10);
    const ampm = timeParts[3].toUpperCase();

    if (ampm === "PM" && hours < 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;

    const result = new Date(date);
    result.setHours(hours, minutes, 0, 0);

    return Math.floor(result.getTime() / 1000);
};
