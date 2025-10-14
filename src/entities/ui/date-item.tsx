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
            {edgeOfMonth && <span className="text-[#8F91A1] text-[14px]">{month}</span>}
            <div className={
                twMerge("flex flex-col items-center justify-center w-16 h-16 rounded-[8px] border border-[#E8EBF4] cursor-pointer",
                isSelected ? "bg-[#E8EBF4] text-[#DE3A6B] text-[16px]" : "text-primary text-[14px]"
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
