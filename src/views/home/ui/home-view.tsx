import React from 'react';
import { BookingWidget } from "@/widgets/booking";
import CoolSession from "./cool-session";

const HomeView = () => {
    return (
        <main className="flex flex-col items-center overflow-hidden">
            <CoolSession />
            <BookingWidget />
        </main>
    );
};

export default HomeView;
