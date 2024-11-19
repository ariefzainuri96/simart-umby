import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
import Row from "./row";

type CustomButtonProps = {
    title: string;
    variant: "filled" | "outlined";
    Icon?: React.ReactNode;
    backgroundColor?: string;
    borderColor?: string;
} & ComponentPropsWithoutRef<"div">;

const CustomButton = ({
    title,
    backgroundColor,
    borderColor,
    Icon,
    variant,
    ...props
}: CustomButtonProps) => {
    const filledStyle: React.CSSProperties = {
        backgroundColor: backgroundColor,
        borderColor: "transparent",
        border: "1px solid",
        color: "#FFF",
    };

    const outlinedStyle: React.CSSProperties = {
        borderColor: borderColor,
        color: borderColor,
        border: "1px solid",
    };

    return (
        <Row
            style={variant === "filled" ? filledStyle : outlinedStyle}
            className="cursor-pointer gap-2 rounded-[8px] px-[1rem] py-[.625rem] hover:bg-slate-50"
            {...props}
        >
            {Icon}
            <span className="line-clamp-1 flex-1 text-ellipsis text-[.875rem] font-medium">
                {title}
            </span>
        </Row>
    );
};

export default CustomButton;
