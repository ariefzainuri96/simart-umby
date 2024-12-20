"use client";

import CustomButton from "@/components/reusable-components/custom-button";
import { Plus } from "lucide-react";
import { useCallback, useState } from "react";
import TambahPengumumanBaruDialog from "./tambah-pengumuman-baru";

export default function TambahPengumumanBaruTrigger() {
    const [dialogKey, setDialogKey] = useState(0);

    const resetDialog = useCallback(() => setDialogKey((prev) => prev + 1), []);

    return (
        <TambahPengumumanBaruDialog
            key={dialogKey}
            trigger={
                <CustomButton
                    title={"Tambah Pengumuman Baru"}
                    variant="filled"
                    backgroundColor="#5CB85C"
                    Icon={<Plus width={16} height={16} />}
                />
            }
            onResetDialog={() => resetDialog()}
        />
    );
}
