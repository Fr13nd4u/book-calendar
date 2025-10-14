import React, {FC, useMemo, startTransition} from 'react';
import {TimeItem} from "@/entities/ui";
import {getTimeSlots} from "@/widgets/booking";
import {Slider} from "@/shared/slider";

interface TimePickerProps {
    selectedDay?: Date | null
    selectedTime?: { label: string; timestamp: number }
    onSelectTime: (time: { label: string; timestamp: number }) => void;
}

const TimePicker:FC<TimePickerProps> = ({selectedDay, onSelectTime, selectedTime}) => {
    const times = useMemo(() => selectedDay ? getTimeSlots(selectedDay) : [], [selectedDay]);

    if (!selectedDay) return (
        <div className="h-11.25"></div>
    )

    const handleClick = (time: { label: string; timestamp: number }) => {
        startTransition(() => {
            onSelectTime(time);
        });
    };

    return (
        <Slider className="md:max-w-113">
            {times.map((time) => (
                <TimeItem
                    key={time.timestamp}
                    isSelected={selectedTime?.timestamp === time.timestamp}
                    time={time.label}
                    onClick={() => handleClick(time)}
                />
            ))}
        </Slider>
    );
};

export default TimePicker;
