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
        borderColor: "#00000000",
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
            className="h-[2.375rem] cursor-pointer items-center rounded-[8px] px-[1rem] hover:bg-slate-50 xl:gap-2"
            {...props}
        >
            {Icon}
            <span className="line-clamp-1 flex-1 text-ellipsis text-[0px] font-medium xl:text-[.875rem]">
                {title}
            </span>
        </Row>
    );
};

export default CustomButton;
