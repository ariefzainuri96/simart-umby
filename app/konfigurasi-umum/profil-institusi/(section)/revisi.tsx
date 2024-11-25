"use client";

import React from "react";
import { useProfileInstitusiContext } from "../profile-institusi-context";
import Column from "@/components/column";
import CustomTextfield from "@/components/custom-textfield";

export default function Revisi() {
    const { form, handleChange } = useProfileInstitusiContext();

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
            />
        </Column>
    );
}
