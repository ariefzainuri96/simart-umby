"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuChildModel } from "@/model/dashboard/menu-model";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const MenuChildItem = ({
    data,
    isLayer,
}: {
    data: MenuChildModel;
    isLayer?: boolean;
}) => {
    const pathname = usePathname();

    const isSelected = () => `${pathname}` === (data.path ?? "");

    const Indicator = () => {
        return (
            <>
                {isLayer && <div className="size-[1.25rem]" />}
                <div
                    className={twMerge(
                        "flex size-[1.25rem] items-center justify-center opacity-0",
                        isSelected() && "opacity-100",
                    )}
                >
                    <div className="size-[.75rem] rounded-full bg-[#05DCA2]" />
                </div>
            </>
        );
    };

    const Content = () => {
        return (
            <div className="flex w-full flex-row items-center gap-[1rem] p-4 hover:bg-[#082F76]">
                {/* indicator */}
                <Indicator />
                <span className="flex-1 text-start text-[0.875rem] font-semibold text-white">
                    {data.title}
                </span>
                {data.child && (
                    <ChevronDown className="h-4 w-4 shrink-0 text-white transition-transform duration-200" />
                )}
            </div>
        );
    };

    if (data.child) {
        return (
            <AccordionItem value={data.title}>
                <AccordionTrigger className="p-0" hideIcon={true}>
                    <Content />
                </AccordionTrigger>
                <AccordionContent>
                    <Accordion type="single" collapsible>
                        {(data.child ?? []).map((item, index) => {
                            return (
                                <MenuChildItem
                                    key={index}
                                    isLayer={true}
                                    data={item}
                                />
                            );
                        })}
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <Link href={data.path!!}>
            <Content />
        </Link>
    );
};
