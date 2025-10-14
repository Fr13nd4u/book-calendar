import React, {FC, MouseEventHandler} from 'react';
import {twMerge} from "tailwind-merge";

interface TimeItemProps {
    isSelected: boolean
    time: string
    onClick?: MouseEventHandler<HTMLDivElement>
}

const TimeItem:FC<TimeItemProps> = ({isSelected, time, onClick}) => {
    return (
        <div className={
            twMerge("flex flex-col items-center justify-center py-3 px-4 whitespace-nowrap w-20.25 h-11.25 rounded-[100px] border border-[#E8EBF4] cursor-pointer text-[14px]",
                isSelected ? "bg-[#E8EBF4] text-[#DE3A6B]" : "text-primary"
            )}
            onClick={onClick}
        >
            <span className={twMerge(isSelected ? "font-medium" : "font-regular")}>{time}</span>
        </div>
    );
};

export default TimeItem;
