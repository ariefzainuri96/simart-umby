"use client";

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
import useTambahPengumumanBaru from "@/hooks/konfigurasi-umum/pengumuman/use-tambah-pengumuman-baru";
import { X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

type TambahPengumumanBaruDialogProps = {
    trigger: ReactNode;
};

export default function TambahPengumumanBaruDialog({
    trigger,
}: TambahPengumumanBaruDialogProps) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const { setOpen } = useCustomDialogLoadingContext();
    const { form, handleChange, pengumumanMutation } =
        useTambahPengumumanBaru();

    // check if there's response, then hide loading dialog
    useEffect(() => {
        setOpen(pengumumanMutation.isPending);

        // if success, close dialog
        if (pengumumanMutation.isSuccess) {
            setDialogOpen(false);
        }
    }, [pengumumanMutation.isPending, pengumumanMutation.isSuccess]);

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
                            onClick={() => setDialogOpen(false)}
                        />
                    </Row>
                </DialogTitle>
                <form className="w-full rounded-xl bg-white px-4 pb-4">
                    <Column className="gap-6">
                        <Row className="w-full gap-4">
                            <CustomTextfield
                                label={"Tanggal"}
                                type="date"
                                value={form.tanggal}
                                onChange={handleChange}
                                id="tanggal"
                                name="tanggal"
                                className="basis-1/3"
                            />
                            <CustomTextfield
                                label={"Judul"}
                                id="judul"
                                name="judul"
                                className="basis-2/3"
                                value={form.judul}
                                onChange={handleChange}
                            />
                        </Row>

                        <CustomTextfield
                            label={"Isi Pengumuman"}
                            id="pengumuman"
                            name="pengumuman"
                            variant="area"
                            value={form.pengumuman}
                            onChange={handleChange}
                        />

                        <CustomTextfield
                            label={"Isi Lampiran"}
                            id="lampiran"
                            name="lampiran"
                            value={form.lampiran}
                            onChange={handleChange}
                        />

                        <Row className="gap-4">
                            <button
                                type="submit"
                                disabled={pengumumanMutation.isPending}
                                aria-disabled={pengumumanMutation.isPending}
                                onClick={(e) => {
                                    e.preventDefault();

                                    pengumumanMutation.mutate();
                                }}
                                className="poppins600-14 h-[53px] rounded-[8px] bg-[#9747FF] px-6 text-white"
                            >
                                Perbaharui
                            </button>
                            <CustomButton
                                onClick={(e) => {
                                    e.preventDefault();

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
