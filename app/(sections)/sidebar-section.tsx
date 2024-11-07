import { Accordion } from "@/components/ui/accordion";
import { menuList } from "@/model/dashboard/menu-model";
import { MenuItem } from "../(components)/menu-item";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import ImgLogo from "@/public/images/img-logo.png";

export default function SidebarSection({ className }: { className?: string }) {
    return (
        <div
            className={twMerge(
                "h-full w-full max-w-[325px] bg-blue2",
                className,
            )}
        >
            <div className="flex flex-col">
                <div className="flex w-full flex-row items-center gap-2 px-[1.5rem] py-[.75rem]">
                    <Image src={ImgLogo} alt="logo" width={44} height={64} />
                    <div className="flex flex-col items-start">
                        <span className="text-[1.75rem] font-semibold text-white">
                            SIMART
                        </span>
                        <span className="text-[.75rem] font-medium text-white">
                            Universitas Mercu Buana Yogyakarta
                        </span>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col items-start pl-[1.5rem]">
                        <Accordion type="single" className="w-full" collapsible>
                            {menuList.map((item, index) => {
                                return <MenuItem key={index} data={item} />;
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
