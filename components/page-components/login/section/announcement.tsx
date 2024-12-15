import Image from "next/image";
import Bullhorn from "@/public/icons/ic-bullhorn.svg";
import SplashBackground from "@/public/images/splash-background.png";
import { AnnouncementList } from "./announcement-list";

export default function Announcement() {
    // const [refreshKey, setRefreshKey] = useState(1);

    // const refreshAnnouncements = () => setRefreshKey((prev) => prev + 1);

    // const childrenWithProps = Children.map(children, (child) => {
    //     if (isValidElement(child) && typeof child.type !== "string") {
    //         return cloneElement(child as React.ReactElement<any>, {
    //             key: refreshKey,
    //         });
    //     }

    //     return child;
    // });

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
                    <div className="mb-[1rem] flex flex-row items-center gap-[1rem]">
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
                    <AnnouncementList />
                </div>
            </div>
        </div>
    );
}
