import { z } from "zod";

export const tambahPengumumanBaruModelSchema = z.object({
    tanggal: z.string().trim().min(1, { message: "Tanggal is required" }),
    judul: z.string().trim().min(1, { message: "Judul is required" }),
    isiPengumuman: z
        .string()
        .trim()
        .min(1, { message: "Deskripsi is required" }),
    file: z.string().optional(),
});
