import React, {FC} from 'react';
import {twMerge} from "tailwind-merge";

interface DateItemProps {
    day: number;
    month: string;
    weekDay: string
    edgeOfMonth: boolean
    fullDate: Date
    isSelected: boolean
}

const DateItem:FC<DateItemProps> = ({day, month, weekDay, edgeOfMonth, isSelected, fullDate}) => {
    return (
        <div className="flex flex-col gap-1">
            {edgeOfMonth && <span className="text-secondary text-[14px]">{month}</span>}
            <div className={
                twMerge("flex flex-col items-center justify-center w-16 h-16 rounded-[8px] border border-gray cursor-pointer",
                isSelected ? "bg-gray text-pink text-[16px]" : "text-primary text-[14px]"
                )}
                 data-date={fullDate}
            >
                <span className={twMerge(isSelected ? "font-medium" : "font-regular")}>{weekDay}</span>
                <span>{day}</span>
            </div>
        </div>
    );
};

export default DateItem;
