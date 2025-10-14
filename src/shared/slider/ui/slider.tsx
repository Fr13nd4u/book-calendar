"use client"

import {FC, ReactNode, useRef, useState, useLayoutEffect, MouseEventHandler} from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import {twMerge} from "tailwind-merge";

interface SliderProps {
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>
}

const Slider: FC<SliderProps> = ({ children, className, onClick }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isAtStart, setIsAtStart] = useState<boolean>(true);
    const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

    const handleSlide = (direction: "left" | "right") => {
        if (!containerRef.current) return;
        const { scrollLeft, clientWidth } = containerRef.current;
        const scrollAmount = (clientWidth + 8);

        containerRef.current.scrollTo({
            left:
                direction === "left"
                    ? scrollLeft - scrollAmount
                    : scrollLeft + scrollAmount,
            behavior: "smooth",
        });
    };

    useLayoutEffect(() => {
        const checkScrollPosition = () => {
            const el = containerRef.current;
            if (!el) return;
            setIsAtStart(el.scrollLeft <= 0);
            setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
        };

        const el = containerRef.current;
        if (!el) return;
        checkScrollPosition();
        el.addEventListener("scroll", checkScrollPosition);
        return () => el.removeEventListener("scroll", checkScrollPosition);
    }, []);

    return (
        <div className="relative flex items-center gap-2 md:gap-4">
            <button
                type="button"
                aria-label="Previous"
                disabled={isAtStart}
                onClick={() => handleSlide("left")}
                className="hidden md:flex md:static md:h-10 md:w-10 items-center justify-center w-6 h-6 mr-3"
            >
                <ChevronLeft  className={twMerge("w-6 h-6 text-primary", isAtStart ? "text-[#C0C1D1]" : "cursor-pointer")} />
            </button>

            <div
                ref={containerRef}
                className={`flex items-end max-w-106 overflow-x-auto scrollbar-hide gap-2 md:overflow-hidden scroll-smooth -mb-3 pb-3 ${className || ""}`}
                onClick={onClick}
            >
                {children}
            </div>

            <button
                type="button"
                aria-label="Next"
                disabled={isAtEnd}
                onClick={() => handleSlide("right")}
                className="hidden md:flex md:static md:h-10 md:w-10 items-center justify-center w-6 h-6 ml-3"
            >
                <ChevronRight className={twMerge("w-6 h-6 text-primary", isAtEnd ? "text-[#C0C1D1]" : "cursor-pointer")} />
            </button>
        </div>
    );
};

export default Slider;
