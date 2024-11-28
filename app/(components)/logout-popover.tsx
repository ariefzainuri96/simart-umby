import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { logout } from "@/lib/auth";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import { useTransition } from "react";
import { twMerge } from "tailwind-merge";
import icLogout from "@/public/icons/ic-logout.svg";

export default function LogoutPopover() {
    const [pending, startTransition] = useTransition();

    const handleLogout = () => {
        ("use server");

        try {
            logout();
        } catch (error) {
            console.log(error);
        }

        redirect("/login", RedirectType.replace);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="bg-profile">S</div>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <div className="flex flex-col items-start rounded-lg bg-white">
                    <div className="flex w-full flex-row items-center gap-2 px-[1.5rem] py-[1rem]">
                        <div className="bg-profile">S</div>
                        <div className="flex flex-1 flex-col items-start">
                            <span className="text-[1rem] font-semibold text-textSecondary">
                                Sarif Udin
                            </span>
                            <span className="text-[.75rem] text-textSecondary">
                                Superadmin
                            </span>
                        </div>
                        <div className="flex size-[2.25rem] items-center justify-center rounded-md bg-[#1E3A8A26]">
                            <ChevronRight className="size-4" />
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-slate-50" />
                    <div
                        onClick={(e) => {
                            e.preventDefault();

                            if (pending) return;

                            startTransition(() => {
                                handleLogout();
                            });
                        }}
                        className={twMerge(
                            "flex w-full cursor-pointer flex-row items-center gap-4 px-[1.5rem] py-[1rem] text-[#EB5757] hover:rounded-bl-lg hover:rounded-br-lg hover:bg-slate-50",
                            pending && "cursor-not-allowed",
                        )}
                    >
                        <Image
                            src={icLogout}
                            width={16}
                            height={16}
                            alt={"logout"}
                        />
                        <span className="text-[0.875rem] font-medium">
                            Logout
                        </span>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
