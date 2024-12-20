"use client";

import Column from "@/components/reusable-components/column";
import Row from "@/components/reusable-components/row";
import CustomTextfield from "@/components/reusable-components/custom-textfield";
import CustomButton from "@/components/reusable-components/custom-button";
import CustomFilePicker from "@/components/reusable-components/custom-file-picker";
import { useCustomDialogLoadingContext } from "@/components/reusable-components/custom-dialog-loading/custom-dialog-loading-provider";
import { delay } from "@/lib/utils";
import { useProfileInstitusiContext } from "../components/profile-institusi-provider";

export default function SiteConfiguration() {
    const {
        form,
        save,
        handleSiteConfigurationChange,
        updateSiteConfiguration,
    } = useProfileInstitusiContext();
    const { setOpen } = useCustomDialogLoadingContext();

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

            <CustomFilePicker
                className="mt-6"
                title={"Logo"}
                label={"Logo"}
                image={form.siteConfiguration?.imgLogo}
                onReset={() => updateSiteConfiguration("imgLogo", null)}
                onImageChange={(event) => {
                    if (event.target.files && event.target.files[0]) {
                        updateSiteConfiguration(
                            "imgLogo",
                            URL.createObjectURL(event.target.files[0]),
                        );
                    }
                }}
            />

            <CustomFilePicker
                className="mt-6"
                title={"Upload Gambar Halaman Multirole"}
                label={"Multirole"}
                image={form.siteConfiguration?.imgMultirole}
                onReset={() => updateSiteConfiguration("imgMultirole", null)}
                onImageChange={(event) => {
                    if (event.target.files && event.target.files[0]) {
                        updateSiteConfiguration(
                            "imgMultirole",
                            URL.createObjectURL(event.target.files[0]),
                        );
                    }
                }}
            />

            <CustomFilePicker
                className="mt-6"
                title={"Upload Cap Dokumen"}
                label={"Dokumen"}
                image={form.siteConfiguration?.imgDokumen}
                onReset={() => updateSiteConfiguration("imgDokumen", null)}
                onImageChange={(event) => {
                    if (event.target.files && event.target.files[0]) {
                        updateSiteConfiguration(
                            "imgDokumen",
                            URL.createObjectURL(event.target.files[0]),
                        );
                    }
                }}
            />

            <Row className="mt-6 gap-4">
                <CustomButton
                    title={"Simpan"}
                    variant={"filled"}
                    backgroundColor="#4CD964"
                    buttonHeight={53}
                    paddingHorizontal={24}
                    onClick={async (e) => {
                        e.preventDefault();

                        save();

                        setOpen(true);

                        await delay(1500);

                        setOpen(false);
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
