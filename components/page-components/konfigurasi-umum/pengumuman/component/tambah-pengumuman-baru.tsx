"use client";

import { serverTambahPengumumanBaru } from "@/actions/pengumuman-actions";
import Column from "@/components/reusable-components/column";
import CustomButton from "@/components/reusable-components/custom-button";
import { useCustomDialogLoadingContext } from "@/components/reusable-components/custom-dialog-loading/custom-dialog-loading-provider";
import CustomTextfield from "@/components/reusable-components/custom-textfield";
import Row from "@/components/reusable-components/row";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

type TambahPengumumanBaruDialogProps = {
    trigger: ReactNode;
    onResetDialog: () => void;
};

export default function TambahPengumumanBaruDialog({
    trigger,
    onResetDialog,
}: TambahPengumumanBaruDialogProps) {
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

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent
                className="rounded-xl border-none p-0 outline-none"
                hideXIcon={true}
                onInteractOutside={(e) => e.preventDefault()}
            >
                <DialogTitle>
                    <Row className="w-full gap-3 rounded-tl-lg rounded-tr-lg bg-[#2F80ED] p-4">
                        <span className="flex-1 text-[1.25rem] font-semibold text-white">
                            Tambah Pengumuman Baru
                        </span>
                        <X
                            size={20}
                            className="cursor-pointer"
                            color="#fff"
                            onClick={() => {
                                onResetDialog();
                                setDialogOpen(false);
                            }}
                        />
                    </Row>
                </DialogTitle>
                <form
                    action={action}
                    className="w-full rounded-xl bg-white px-4 pb-4"
                >
                    <Column className="gap-6">
                        <Row className="w-full items-start gap-4">
                            <CustomTextfield
                                label={"Tanggal"}
                                type="date"
                                id="tanggal"
                                name="tanggal"
                                className="basis-1/3"
                                error={
                                    (response?.errors ?? []).find((element) =>
                                        element.name.includes("tanggal"),
                                    )?.message
                                }
                            />
                            <CustomTextfield
                                label={"Judul"}
                                id="judul"
                                name="judul"
                                className="basis-2/3"
                                error={
                                    (response?.errors ?? []).find((element) =>
                                        element.name.includes("judul"),
                                    )?.message
                                }
                            />
                        </Row>

                        <CustomTextfield
                            label={"Isi Pengumuman"}
                            id="pengumuman"
                            name="pengumuman"
                            variant="area"
                            error={
                                (response?.errors ?? []).find((element) =>
                                    element.name.includes("pengumuman"),
                                )?.message
                            }
                        />

                        <CustomTextfield
                            label={"Isi Lampiran"}
                            id="lampiran"
                            name="lampiran"
                            error={
                                (response?.errors ?? []).find((element) =>
                                    element.name.includes("lampiran"),
                                )?.message
                            }
                        />

                        <Row className="gap-4">
                            <ButtonPerbarui />
                            <CustomButton
                                onClick={(e) => {
                                    e.preventDefault();

                                    onResetDialog();
                                    setDialogOpen(false);
                                }}
                                title={"Batalkan"}
                                variant={"outlined"}
                                borderColor="#BFBFBF"
                                textColor="#FF5B5B"
                                buttonHeight={53}
                            />
                        </Row>
                    </Column>
                </form>
            </DialogContent>
        </Dialog>
    );
}

const ButtonPerbarui = () => {
    const { pending } = useFormStatus();
    const { setOpen } = useCustomDialogLoadingContext();

    useEffect(() => {
        if (pending) setOpen(true);
    }, [pending]);

    return (
        <button
            type="submit"
            disabled={pending}
            aria-disabled={pending}
            className="poppins600-14 h-[53px] rounded-[8px] bg-[#9747FF] px-6 text-white"
        >
            Perbaharui
        </button>
    );
};
