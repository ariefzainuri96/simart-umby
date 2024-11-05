import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { menuList } from "@/model/dashboard/menu-model";
import { MenuItem } from "../(components)/menu-item";

export default function SidebarSection() {
    return (
        <div className="bg-blue2 h-full w-full max-w-[300px]">
            <div className="h-full overflow-y-auto">
                <div className="flex flex-col items-start">
                    <Accordion type="single" className="w-full" collapsible>
                        {menuList.map((item, index) => {
                            return <MenuItem key={index} data={item} />;
                        })}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
