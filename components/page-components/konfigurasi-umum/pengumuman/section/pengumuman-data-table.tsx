"use client";

import Row from "@/components/row";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import icDelete from "@/public/icons/ic-delete.svg";
import usePengumuman from "@/hooks/konfigurasi-umum/pengumuman/use-pengumuman";

const PengumumanDataTable = () => {
    const { pengumumanList } = usePengumuman();

    const IcEdit = () => {
        return (
            <svg
                width="18"
                height="18"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3.66668 13.6705H6.49334C6.58108 13.671 6.66806 13.6542 6.74928 13.621C6.83051 13.5879 6.90438 13.539 6.96668 13.4772L11.58 8.8572L13.4733 7.00387C13.5358 6.94189 13.5854 6.86816 13.6193 6.78692C13.6531 6.70568 13.6705 6.61854 13.6705 6.53053C13.6705 6.44252 13.6531 6.35539 13.6193 6.27415C13.5854 6.19291 13.5358 6.11917 13.4733 6.0572L10.6467 3.1972C10.5847 3.13471 10.511 3.08512 10.4297 3.05127C10.3485 3.01743 10.2614 3 10.1733 3C10.0853 3 9.9982 3.01743 9.91696 3.05127C9.83572 3.08512 9.76199 3.13471 9.70001 3.1972L7.82001 5.08387L3.19334 9.70387C3.13156 9.76616 3.08267 9.84004 3.0495 9.92126C3.01632 10.0025 2.9995 10.0895 3.00001 10.1772V13.0039C3.00001 13.1807 3.07025 13.3502 3.19527 13.4753C3.3203 13.6003 3.48987 13.6705 3.66668 13.6705ZM10.1733 4.61053L12.06 6.4972L11.1133 7.44387L9.22668 5.5572L10.1733 4.61053ZM4.33334 10.4505L8.28668 6.4972L10.1733 8.38387L6.22001 12.3372H4.33334V10.4505Z"
                    fill="#2F80ED"
                />
            </svg>
        );
    };

    return (
        <div className="mt-4 w-full overflow-hidden rounded-[8px] border border-[#EFEFEF]">
            <table className="w-full">
                <thead className="text-left text-[.875rem] font-semibold text-[#465478]">
                    <th className="py-4 pl-6 pr-3">
                        <input className="size-4" type="checkbox" />
                    </th>
                    <th className="px-3">Aksi</th>
                    <th className="px-3">Tanggal</th>
                    <th className="px-3">Judul</th>
                    <th className="px-3">Isi Pengumuman</th>
                    <th className="pl-3 pr-6">Lampiran</th>
                </thead>
                <tbody className="text-left">
                    {pengumumanList.map((item, index) => {
                        return (
                            <tr
                                className={twMerge(
                                    "text-[1rem] text-[#465478]",
                                    index % 2 === 0
                                        ? "bg-[#F8F8F8]"
                                        : "bg-white",
                                )}
                                key={index}
                            >
                                <td className="py-4 pl-6 pr-3">
                                    <input className="size-4" type="checkbox" />
                                </td>
                                <td className="px-3 py-4">
                                    <Row className="gap-3">
                                        <div className="bg-icon bg-[#2F80ED4D]">
                                            <IcEdit />
                                        </div>
                                        <div className="bg-icon bg-[#FF5D5D4D]">
                                            <Image
                                                src={icDelete}
                                                width={16}
                                                height={16}
                                                color="#FF5D5D"
                                                alt="Edit"
                                            />
                                        </div>
                                    </Row>
                                </td>
                                <td className="px-3 py-4">{item.tanggal}</td>
                                <td className="px-3 py-4">{item.title}</td>
                                <td className="px-3 py-4">{item.deskripsi}</td>
                                <td className="py-4 pl-3 pr-6">
                                    {item.lampiran}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PengumumanDataTable;
