import React from 'react';
import { Clock } from "lucide-react";


const CoolSession = () => {
    return (
        <div className="mt-16 self-start px-5 mb-16.25 min-h-[90vh] md:hidden">
            <div className="text-white">
                <h2 className="font-medium text-[27px]">Cool session</h2>
                <p className="mb-6">Additional type</p>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-white-opacity rounded-[80px] w-fit">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[13px]">30 min</span>
                </span>
            </div>
            
        </div>

    );
};

export default CoolSession;
