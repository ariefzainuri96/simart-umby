import { PengumumanModel } from "@/model/pengumuman/pengumuman-model";

export default function usePengumuman() {
    const pengumumanList: PengumumanModel[] = [
        {
            tanggal: "25 Agustus 2022",
            title: "Pengumuman Baru",
            deskripsi: "Deskripsi Pengumuman Baru",
            lampiran: "Lampiran Pengumuman Baru",
            checked: false,
        },
        {
            tanggal: "25 Agustus 2022",
            title: "Pengumuman Baru",
            deskripsi: "Deskripsi Pengumuman Baru",
            lampiran: "Lampiran Pengumuman Baru",
            checked: false,
        },
    ];

    return { pengumumanList };
}
