import { TAnnouncement } from "@/model/login/t-announcement";
import React from "react";

export const AnnouncementItem = ({ data }: { data: TAnnouncement }) => {
    return (
        <div className="rounded-[12px] bg-white shadow-md">
            <div className="flex flex-col items-start px-[2rem] py-[1.5rem]">
                <span className="text-[1.125rem] font-semibold text-textSecondary">
                    {data.title}
                </span>
                <span className="mt-[0.5rem] text-[0.875rem] text-textSecondary">
                    {data.description.substring(0, 100)}...{" "}
                    {data.description.length > 100 && (
                        <span className="text-[0.875rem] font-semibold text-blue1 underline">
                            Baca Selengkapnya
                        </span>
                    )}
                </span>
            </div>
            <span></span>
        </div>
    );
};
