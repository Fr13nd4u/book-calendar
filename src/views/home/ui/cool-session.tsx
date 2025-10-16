import React from 'react';
import { Clock } from "lucide-react";
import Image from "next/image";

const CoolSession = () => {
    return (
        <div className="relative mt-16 self-start px-5 h-100 md:hidden">
            <div className="text-white">
                <h2 className="font-medium text-[27px]">Cool session</h2>
                <p className="mb-6">Additional type</p>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-white-opacity rounded-[80px] w-fit">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[13px]">30 min</span>
                </span>
            </div>


            <div className="rounded-full absolute right-0 bottom-[146px] translate-x-full bg-secondary-50 w-75.25 h-75.25 border-4 border-secondary-100">
                <Image className="w-50.5 h-72.5 absolute top-[-34px] right-[71px]" src={"/assets/images/cool-session.png"} width={202} height={290} alt="cool session" />
            </div>
        </div>

    );
};

export default CoolSession;
