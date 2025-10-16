import React, {FC, useMemo, startTransition, memo} from 'react';
import {TimeItem} from "@/shared/ui";
import {Slider} from "@/shared/slider";
import { getTimeSlots } from '../utils';

interface TimePickerProps {
    selectedDay?: Date | null
    selectedTime?: { label: string; timestamp: number } | null
    onSelectTime: (time: { label: string; timestamp: number }) => void;
}

export const TimePicker:FC<TimePickerProps> = memo(({selectedDay, onSelectTime, selectedTime}) => {
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
});

