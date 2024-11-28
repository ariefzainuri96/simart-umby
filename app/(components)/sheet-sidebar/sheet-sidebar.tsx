import {
    SheetTrigger,
    SheetContent,
    Sheet,
    SheetTitle,
    SheetHeader,
} from "@/components/ui/sheet";
import React from "react";
import SidebarSection from "../../(sections)/sidebar-section";
import { Menu } from "lucide-react";
import { useSheetSidebarContext } from "./sheet-sidebar-provider";

export default function SheetSidebar() {
    const { sheetOpen, setSheetOpen } = useSheetSidebarContext();

    return (
        <div className="block lg:hidden">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                    <Menu
                        width={24}
                        height={24}
                        color="#000"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent
                    className="w-[325px] p-0"
                    hideXIcon={true}
                    side={"left"}
                >
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                    </SheetHeader>
                    <SidebarSection />
                </SheetContent>
            </Sheet>
        </div>
    );
}
