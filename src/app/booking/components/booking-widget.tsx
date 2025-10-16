"use client"

import React, {useState} from 'react';
import {Button} from "@/shared/button";
import { DatePicker } from './date-picker';
import { TimePicker } from './time-picker';
import { BookASession } from './book-a-session';
import Image from 'next/image';
import { useBookingSelection } from '../hooks';

export const BookingWidget = () => {
    const {
        selectedDay,
        selectedTime,
        selectDay,
        selectTime,
    } = useBookingSelection();

    const handleConfirm = () => {
    if (!selectedTime) return;
    console.log({ timestamp: selectedTime.timestamp });
    };

    return (
        <div className='fixed bottom-0 w-full md:static md:max-w-[568px]'>
            <div className="relative bg-background flex flex-col gap-8 md:gap-10 rounded-tl-2xl rounded-tr-2xl pt-8 px-5 pb-3 md:py-10  md:rounded-lg md:my-10 md:shadow-[0_20px_22px_0_rgba(0,0,0,0.25)]">
                <BookASession />
                <DatePicker 
                    selectedDay={selectedDay} 
                    onSelectDay={selectDay}
                    />
                <TimePicker
                    selectedDay={selectedDay}
                    selectedTime={selectedTime}
                    onSelectTime={selectTime}
                />
                <Button
                    disabled={!selectedTime}
                    className="md:max-w-92.5 self-center mt-16 md:mt-26"
                    onClick={handleConfirm}
                >Confirm</Button>

                <div className="rounded-full absolute md:hidden -top-55 right-[204px] -z-1 translate-x-full bg-secondary-50 w-75.25 h-75.25 border-4 border-secondary-100">
                    <Image className="w-43 h-72.5 absolute top-[-38px] right-[92px]" src={"/assets/images/cool-session.png"} width={172} height={290} alt="cool session" />
                </div>
            </div>

        </div>
    );
};

