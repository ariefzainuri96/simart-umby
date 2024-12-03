"use client";

import React from "react";
import { useProfileInstitusiContext } from "../profile-institusi-provider";
import Column from "@/components/column";
import Row from "@/components/row";
import CustomTextfield from "@/components/custom-textfield";
import CustomButton from "@/components/custom-button";

export default function SiteConfiguration() {
    const { form, save, handleSiteConfigurationChange } =
        useProfileInstitusiContext();

    return (
        <Column className="w-full">
            <h1 className="poppins600-18">Site Configuration</h1>
            <Row className="mt-6 w-full gap-6">
                <CustomTextfield
                    label={"Name"}
                    name="name"
                    id="name"
                    value={form.siteConfiguration?.name}
                    onChange={handleSiteConfigurationChange}
                />
                <CustomTextfield
                    label={"Email"}
                    name="email"
                    id="email"
                    value={form.siteConfiguration?.email}
                    onChange={handleSiteConfigurationChange}
                />
            </Row>
            <Row className="mt-6 w-full gap-6">
                <CustomTextfield
                    label={"Phone"}
                    name="phone"
                    id="phone"
                    value={form.siteConfiguration?.phone}
                    onChange={handleSiteConfigurationChange}
                />
                <CustomTextfield
                    label={"Address"}
                    name="address"
                    id="address"
                    value={form.siteConfiguration?.address}
                    onChange={handleSiteConfigurationChange}
                />
            </Row>
            <Row className="mt-6 gap-4">
                <CustomButton
                    title={"Simpan"}
                    variant={"filled"}
                    backgroundColor="#4CD964"
                    buttonHeight={53}
                    paddingHorizontal={24}
                    onClick={(e) => {
                        e.preventDefault();

                        save();
                    }}
                />
                <CustomButton
                    title={"Batalkan"}
                    variant={"outlined"}
                    borderColor="#FF5B5B"
                    buttonHeight={53}
                    paddingHorizontal={24}
                />
            </Row>
        </Column>
    );
}
