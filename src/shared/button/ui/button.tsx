import {FC, ReactNode, ButtonHTMLAttributes, memo} from 'react';
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, disabled, className, ...rest }) => {
    const baseClasses = `w-full py-3 rounded-full font-medium text-white transition cursor-pointer font-semibold text-[16px]`;
    const stateClasses = disabled
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-primary hover:bg-gray-800";

    return (
        <button
            {...rest}
            disabled={disabled}
            className={twMerge(baseClasses, stateClasses, className)}
        >
            {children}
        </button>
    );
};

export default memo(Button);
