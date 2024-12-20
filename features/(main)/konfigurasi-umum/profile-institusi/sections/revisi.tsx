"use client";

import React from "react";
import Column from "@/components/reusable-components/column";
import CustomTextfield from "@/components/reusable-components/custom-textfield";
import { Minus, Plus } from "lucide-react";
import { useProfileInstitusiContext } from "../components/profile-institusi-provider";

export default function Revisi() {
    const { form, updateForm, handleChange } = useProfileInstitusiContext();

    return (
        <Column className="w-full">
            <h1 className="poppins600-18">Revisi</h1>
            <CustomTextfield
                className="mt-6"
                value={form.limitasiBatasRevisi}
                id="limitasiBatasRevisi"
                name="limitasiBatasRevisi"
                onChange={handleChange}
                label="Limitasi Batas Revisi"
                trailing={
                    <div className="flex cursor-pointer flex-row items-center rounded-br-md rounded-tr-md border border-l-0 border-[#BFBFBF]">
                        <div
                            onClick={(e) => {
                                e.preventDefault();

                                if (form.limitasiBatasRevisi === "") return;

                                if (
                                    (Number(form.limitasiBatasRevisi ?? "0") ??
                                        0) === 1
                                ) {
                                    updateForm("limitasiBatasRevisi", "");
                                    return;
                                }

                                updateForm(
                                    "limitasiBatasRevisi",
                                    `${(Number(form.limitasiBatasRevisi ?? "0") ?? 0) - 1}`,
                                );
                            }}
                            className="flex size-[54px] items-center justify-center bg-[#F2F2F2]"
                        >
                            <Minus width={24} height={24} color="#465478" />
                        </div>
                        <div className="h-[54px] w-[1px] bg-[#BFBFBF]" />
                        <div
                            onClick={(e) => {
                                e.preventDefault();

                                updateForm(
                                    "limitasiBatasRevisi",
                                    `${(Number(form.limitasiBatasRevisi ?? "0") ?? 0) + 1}`,
                                );
                            }}
                            className="flex size-[54px] cursor-pointer items-center justify-center bg-[#4CD96433]"
                        >
                            <Plus width={24} height={24} color="#4CD964" />
                        </div>
                    </div>
                }
            />
        </Column>
    );
}
