import { serverTambahPengumumanBaru } from "@/features/(main)/konfigurasi-umum/pengumuman/actions/pengumuman-actions";
import { useCustomDialogLoadingContext } from "@/components/reusable-components/custom-dialog-loading/custom-dialog-loading-provider";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";

export default function useTambahPengumumanBaru(onResetDialog: () => void) {
    const { toast } = useToast();
    const [dialogOpen, setDialogOpen] = useState(false);
    const { setOpen: setDialogLoadingOpen } = useCustomDialogLoadingContext();
    const [response, action] = useFormState(serverTambahPengumumanBaru, null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onResetDialog();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (response) setDialogLoadingOpen(false);

        if (response?.status === 200) {
            setDialogOpen(false);

            toast({
                title: "Pengumuman Baru",
                description: "Berhasil membuat pengumuman baru!",
            });
        } else if (response?.status === 400) {
            toast({
                title: "Error!",
                description: "Gagal membuat pengumuman baru!",
                variant: "destructive",
            });
        }
    }, [response]);

    return {
        dialogOpen,
        setDialogOpen,
        action,
        response,
    } as const;
}
