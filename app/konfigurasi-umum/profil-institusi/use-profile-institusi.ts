import { ProfileInstitusiForm } from "@/model/profile-institusi/profile-institusi-form";
import { useState } from "react";

export default function useProfileInstitusi() {
    const [form, setForm] = useState<ProfileInstitusiForm>({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setForm((form) => {
            return { ...form, [name]: value };
        });
    }

    return { form, handleChange } as const;
}
