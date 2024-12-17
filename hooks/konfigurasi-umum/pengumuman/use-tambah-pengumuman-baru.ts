import { tambahPengumumanBaru } from "@/actions/pengumuman-actions";
import { TPengumumanTableInsert } from "@/db/schema/pengumuman-table";
import { useToast } from "@/hooks/use-toast";
import { decrypt } from "@/lib/auth";
import { CURRENT_USER } from "@/lib/constant";
import { TCurrentUser } from "@/model/current-user";
import { useMutation } from "@tanstack/react-query";
import { getCookies } from "cookies-next";
import React, { useState } from "react";

export default function useTambahPengumumanBaru() {
    const { toast } = useToast();
    const [form, setForm] = useState<TPengumumanTableInsert>({
        lampiran: "",
        judul: "",
        pengumuman: "",
    });

    function handleChange(
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) {
        const { name, value } = e.target;

        setForm((prev) => {
            return { ...prev, [name]: value };
        });
    }

    const pengumumanMutation = useMutation({
        mutationKey: ["tambahPengumumanBaru"],
        mutationFn: async () => {
            return await tambahPengumumanBaru(form);
        },
        onSuccess: () => {
            setForm({
                lampiran: "",
                judul: "",
                pengumuman: "",
            });

            toast({
                title: "Pengumuman Baru",
                description: "Berhasil membuat pengumuman baru!",
            });
        },
        onError: () => {
            toast({
                title: "Error!",
                description: "Gagal membuat pengumuman baru!",
                variant: "destructive",
            });
        },
    });

    return { form, handleChange, pengumumanMutation } as const;
}
