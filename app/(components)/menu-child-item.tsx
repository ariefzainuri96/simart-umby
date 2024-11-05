import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuChildModel } from "@/model/dashboard/menu-model";
import { ChevronDown } from "lucide-react";

export const MenuChildItem = ({ data }: { data: MenuChildModel }) => {
    const Content = () => {
        return (
            <div className="flex w-full flex-row items-center gap-[1rem] p-4 hover:bg-[#082F76]">
                {/* indicator */}
                <div />
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
                            return <MenuChildItem key={index} data={item} />;
                        })}
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
        );
    }

    return <Content />;
};
