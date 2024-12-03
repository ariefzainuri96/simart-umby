"use client";

import React, { ComponentPropsWithoutRef, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

type TextFieldProps = {
    label: string;
    className?: string;
    trailing?: ReactNode;
} & ComponentPropsWithoutRef<"input">;

export default function CustomTextfield({
    label,
    className,
    trailing,
    ...props
}: TextFieldProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const [isEmpty, setIsEmpty] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsEmpty(event.target.value.trim() === "");
        if (props.onChange) {
            props.onChange(event);
        }
    };

    return (
        <div className={twMerge("relative w-full", className)}>
            {/* Label */}
            <label
                htmlFor={props.id}
                className={`absolute left-6 cursor-text font-medium transition-all duration-150 ${
                    isFocused
                        ? "top-[-10px] bg-white px-1 text-sm text-[#18469C]"
                        : isFocused && (!isEmpty || props.value)
                          ? "top-[-10px] bg-white px-1 text-sm text-[#18469C]"
                          : !isFocused && (!isEmpty || props.value)
                            ? "top-[-10px] bg-white px-1 text-sm text-[#BFBFBF]"
                            : "top-3.5 text-[1rem] text-[#BFBFBF]"
                }`}
            >
                {label}
            </label>

            {/* Input */}
            <div className="flex flex-row items-center">
                <input
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={handleInputChange}
                    className={twMerge(
                        `poppins500-16 h-[56px] w-full rounded-md border px-6 py-2 transition-colors ${
                            isFocused || isHovered
                                ? "border-[#18469C]"
                                : "border-[#BFBFBF]"
                        }
           duration-300 focus:outline-none`,
                        trailing && "flex-1 rounded-br-none rounded-tr-none",
                    )}
                    {...props}
                />
                {trailing}
            </div>
        </div>
    );
}
