"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type TextFieldProps = {
    label: string;
    className?: string;
} & ComponentPropsWithoutRef<"input">;

export default function CustomTextfield({
    label,
    className,
    ...props
}: TextFieldProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={twMerge("relative w-full", className)}
        >
            {/* Label */}
            <label
                htmlFor={props.id}
                className={`absolute left-6 cursor-text font-medium transition-all duration-150 ${
                    isFocused
                        ? "top-[-10px] bg-white px-1 text-sm text-[#18469C]"
                        : isFocused && props.value
                          ? "top-[-10px] bg-white px-1 text-sm text-[#18469C]"
                          : !isFocused && props.value
                            ? "top-[-10px] bg-white px-1 text-sm text-[#BFBFBF]"
                            : "top-3.5 text-[1rem] text-[#BFBFBF]"
                }`}
            >
                {label}
            </label>

            {/* Input */}
            <input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`poppins500-16 h-[56px] w-full rounded-md border px-6 py-2 transition-colors ${
                    isFocused || isHovered
                        ? "border-[#18469C]"
                        : "border-[#BFBFBF]"
                }
           duration-300 focus:outline-none`}
                {...props}
            />
        </div>
    );
}
