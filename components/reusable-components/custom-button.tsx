import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
import Row from "./row";
import { twMerge } from "tailwind-merge";

type CustomButtonProps = {
    title: string;
    variant: "filled" | "outlined";
    Icon?: React.ReactNode;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    hideOnBreakpoint?: boolean;
    buttonHeight?: number;
    paddingHorizontal?: number;
} & ComponentPropsWithoutRef<"div">;

const CustomButton = ({
    title,
    backgroundColor,
    borderColor,
    textColor,
    Icon,
    variant,
    hideOnBreakpoint = false,
    buttonHeight = 38,
    paddingHorizontal = 16,
    ...props
}: CustomButtonProps) => {
    const filledStyle: React.CSSProperties = {
        backgroundColor: backgroundColor,
        borderColor: borderColor ?? "#00000000",
        border: "1px solid",
        color: textColor ?? "#FFF",
        height: buttonHeight,
        paddingInline: paddingHorizontal,
    };

    const outlinedStyle: React.CSSProperties = {
        borderColor: borderColor,
        color: borderColor,
        border: "1px solid",
        height: buttonHeight,
        paddingInline: paddingHorizontal,
    };

    return (
        <Row
            style={variant === "filled" ? filledStyle : outlinedStyle}
            className="cursor-pointer items-center rounded-[8px] px-[1rem] hover:bg-slate-50 xl:gap-2"
            {...props}
        >
            {Icon}
            <span
                className={twMerge(
                    "line-clamp-1 flex-1 text-ellipsis text-[.875rem] font-medium",
                    hideOnBreakpoint && "text-[0px] xl:text-[.875rem]",
                )}
            >
                {title}
            </span>
        </Row>
    );
};

export default CustomButton;
