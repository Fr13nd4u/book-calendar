import React from 'react';
import Image from "next/image";

export const BookASession = () => {
    return (
        <div className="flex items-center gap-5 md:pl-13 md:pr-6.75 mb-8 md:mb-10">
            <Image className="hidden md:block w-30 h-30" src={"/assets/images/book-a-session.png"} width={120} height={120} alt="book a session" />
            <div>
                <h3 className="font-kaisei-tokumin font-bold text-[28px] mb-2">Book a Session</h3>
                <p className="text-secondary md:text-[14px]">Choose a date and time that is convenient for you to e-meet your stylist</p>
            </div>

        </div>
    );
};

