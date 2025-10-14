"use client"

import React, {FC, MouseEvent, useMemo} from 'react';
import { getNextDates } from "@/widgets/booking";
import {DateItem} from "@/entities/ui";
import {Slider} from "@/shared/slider";

interface DatePickerProps {
    selectedDay: Date | null;
    onSelectDay: (day: Date) => void;
}

const DatePicker:FC<DatePickerProps> = ({selectedDay, onSelectDay}) => {
    const dates = useMemo(() => getNextDates(), []);

    const handleSelect = (e: MouseEvent<HTMLDivElement>) => {
        const target = (e.target as HTMLElement).closest("[data-date]") as HTMLElement | null;
        if (!target) return;

        const dateStr = target.dataset.date;
        if (!dateStr) return;

        const selectedDate = new Date(dateStr);
        onSelectDay(selectedDate);
    }

    return (
        <Slider className="-mt-6" onClick={handleSelect}>
            {dates.map((date) =>
                (<DateItem key={date.fullDate.getTime()} {...date} isSelected={date.fullDate.toDateString() === selectedDay?.toDateString() } />)
            )}
        </Slider>
    );
};

export default DatePicker;
