"use client"

import React, {useState} from 'react';
import {BookASession} from "./book-a-session";
import {Button} from "@/shared/button";
import DatePicker from "./date-picker";
import TimePicker from "./time-picker";

interface Selection {
    day: Date | null;
    time: { label: string; timestamp: number };
}

export const BookingWidget = () => {
    const [selection, setSelection] = useState<Selection>({
        day: null,
        time: { label: "", timestamp: 0 }
    });

    const handleSelectDay = (day: Date) =>  {
        setSelection({day, time: {label: "", timestamp: 0}})
    };

    const handleSelectTime = (time: { label: string; timestamp: number }) => {
        setSelection(prev => ({...prev, time}));
    }

    const handleConfirm = () => {
        if (!selection.time.timestamp) return;
        console.log({ timestamp: selection.time.timestamp });
    };

    return (
        <div className="bg-background flex flex-col gap-8 md:gap-10 rounded-tl-2xl rounded-tr-2xl pt-8 px-5 pb-3 md:py-10 absolute bottom-0 md:static w-full md:max-w-[568px] md:rounded-lg md:my-10 md:shadow-[0_20px_22px_0_rgba(0,0,0,0.25)]">
            <BookASession />
            <DatePicker selectedDay={selection.day} onSelectDay={handleSelectDay} />
            <TimePicker
                selectedDay={selection.day}
                onSelectTime={handleSelectTime}
                selectedTime={selection.time}
            />
            <Button
                disabled={!selection.time.timestamp}
                className="md:max-w-92.5 self-center mt-16 md:mt-26"
                onClick={handleConfirm}
            >Confirm</Button>
        </div>
    );
};

