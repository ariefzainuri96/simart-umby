import CustomButton from "@/components/reusable-components/custom-button";
import Row from "@/components/reusable-components/row";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import icFilter from "@/public/icons/ic-filter-3.svg";
import icDelete from "@/public/icons/ic-delete.svg";
import TambahPengumumanBaruDialog from "../components/tambah-pengumuman-baru";
import TambahPengumumanBaruTrigger from "../components/tambah-pengumuman-baru-trigger";

const PengumumanAction = () => {
    const IcSearch = () => (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_2100_12672)">
                <path
                    d="M18.031 17.117L22.314 21.399L20.899 22.814L16.617 18.531C15.0237 19.8082 13.042 20.5029 11 20.5C6.032 20.5 2 16.468 2 11.5C2 6.532 6.032 2.5 11 2.5C15.968 2.5 20 6.532 20 11.5C20.0029 13.542 19.3082 15.5237 18.031 17.117ZM16.025 16.375C17.2941 15.0699 18.0029 13.3204 18 11.5C18 7.632 14.867 4.5 11 4.5C7.132 4.5 4 7.632 4 11.5C4 15.367 7.132 18.5 11 18.5C12.8204 18.5029 14.5699 17.7941 15.875 16.525L16.025 16.375Z"
                    fill="#465478"
                />
            </g>
            <defs>
                <clipPath id="clip0_2100_12672">
                    <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    );

    return (
        <div className="mt-6 flex w-full flex-col items-start gap-4 md:flex-row md:items-end">
            <Row className="flex-1 justify-start">
                <Row className="gap-2 border-b-[1px] border-b-black pb-2">
                    <IcSearch />
                    <input
                        className="flex-1 text-[.875rem] font-normal text-[#465478] outline-none"
                        placeholder="cari..."
                    />
                </Row>
            </Row>
            <div className="flex flex-row items-center gap-4">
                <CustomButton
                    title={"Filter"}
                    variant="outlined"
                    borderColor="#465478"
                    Icon={
                        <Image
                            src={icFilter}
                            alt="filter"
                            width={16}
                            height={16}
                        />
                    }
                />
                <CustomButton
                    title="Hapus"
                    variant="outlined"
                    borderColor="#FF5D5D"
                    Icon={<Image src={icDelete} alt="dekete" />}
                />
                <TambahPengumumanBaruTrigger />
            </div>
        </div>
    );
};

export default PengumumanAction;
