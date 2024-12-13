import Image from "next/image";
import Bullhorn from "@/public/icons/ic-bullhorn.svg";
import SplashBackground from "@/public/images/splash-background.png";
import { AnnouncementItem } from "@/components/reusable-components/announcement-item";
import { TAnnouncement } from "@/model/login/t-announcement";

export default function Announcement() {
    const announcements: TAnnouncement[] = [
        {
            title: "Test Pengumuman",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque enim gravida massa in praesent dictum orci blandit diam. Quis duis purus senectus sit pellentesque. Baca Selengkapnya",
            date: "5 Februari 2023",
        },
    ];

    return (
        <div className="relative h-full w-full">
            <div className="relative z-0 h-full w-full">
                <Image
                    className="h-full w-full"
                    src={SplashBackground}
                    alt="Background"
                    width={1920}
                    height={1080}
                />
            </div>
            <div className="absolute inset-0 z-10 overflow-y-auto">
                <div className="flex flex-col items-start px-[2rem] py-[3rem]">
                    {/* pengumuman */}
                    <div className="mb-[2rem] flex flex-row items-center gap-[1rem]">
                        <div className="flex size-[2rem] justify-center rounded-[8px] bg-[rgba(255,255,255,0.3)]">
                            <Image
                                src={Bullhorn}
                                alt="bullhorn"
                                width={16}
                                height={16}
                            />
                        </div>
                        <span className="text-[1.15rem] font-semibold text-white">
                            Pengumuman
                        </span>
                    </div>
                    {/* pengumuman list */}
                    {announcements.map((item, index) => {
                        return <AnnouncementItem key={index} data={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}
