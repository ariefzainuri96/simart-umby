import { ProfileInstitusiForm } from "@/model/profile-institusi/profile-institusi-form";
import { useState } from "react";

export default function useProfileInstitusi() {
    const [form, setForm] = useState<ProfileInstitusiForm>({
        limitasiBatasRevisi: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setForm((form) => {
            return { ...form, [name]: value };
        });
    }

    function handleSiteConfigurationChange(
        e: React.ChangeEvent<HTMLInputElement>,
    ) {
        const { name, value } = e.target;

        setForm((form) => {
            return {
                ...form,
                siteConfiguration: {
                    ...form.siteConfiguration,
                    [name]: value,
                },
            };
        });
    }

    function updateSiteConfiguration(cName: string, cValue: any) {
        setForm((form) => {
            return {
                ...form,
                siteConfiguration: {
                    ...form.siteConfiguration,
                    [cName]: cValue,
                },
            };
        });
    }

    function updateForm(cName: string, cValue: any) {
        setForm((form) => {
            return { ...form, [cName]: cValue };
        });
    }

    function save() {
        console.log("Form ->\n", form);
    }

    return {
        form,
        handleChange,
        handleSiteConfigurationChange,
        updateSiteConfiguration,
        updateForm,
        save,
    } as const;
}
