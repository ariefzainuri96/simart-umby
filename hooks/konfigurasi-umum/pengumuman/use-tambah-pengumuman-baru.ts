import { TambahPengumumanBaruModel } from "@/model/pengumuman/tambah-pengumuman-baru-model";
import React, { useState } from "react";

export default function useTambahPengumumanBaru() {
    const [form, setForm] = useState<TambahPengumumanBaruModel>({});

    function handleChange(
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) {
        const { name, value } = e.target;

        setForm((form) => {
            return { ...form, [name]: value };
        });
    }

    return { form, handleChange } as const;
}
