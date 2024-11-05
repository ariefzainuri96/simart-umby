import { MenuModel } from "@/model/dashboard/menu-model";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuChildItem } from "./menu-child-item";
import IcDashboard from "@/public/icons/ic-dashboard.svg";
import IcSettings from "@/public/icons/ic-settings.svg";
import { twMerge } from "tailwind-merge";
import { ChevronDown } from "lucide-react";

export const MenuItem = ({ data }: { data: MenuModel }) => {
    function selectedIcon(): any {
        switch (data.icon) {
            case "dashboard":
                return IcDashboard;
            case "konfigurasi-umum":
                return IcSettings;
            default:
                break;
        }
    }

    const Content = () => {
        return (
            <div className="flex w-full flex-row items-center gap-[1rem] p-4 hover:bg-[#082F76]">
                <Image
                    src={selectedIcon()}
                    alt={`${data.title}`}
                    width={20}
                    height={20}
                />
                <span className="line-clamp-1 flex-1 overflow-ellipsis text-start font-semibold text-white">
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
                    <Accordion className="w-full" type="single" collapsible>
                        {(data.child ?? []).map((item, index) => {
                            return <MenuChildItem key={index} data={item} />;
                        })}
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
        );
    }

    return <Content />;
};
