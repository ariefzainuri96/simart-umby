import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { UserTable } from "./user-table";
import { z } from "zod";

export const PengumumanTable = pgTable("pengumuman", {
    id: serial("id").primaryKey(),
    tanggal: timestamp("tanggal", { mode: "string" }).defaultNow().notNull(),
    judul: varchar("title", { length: 255 }).notNull(),
    pengumuman: text("deskripsi").notNull(),
    lampiran: text("lampiran").notNull(),
    authorId: serial("authorId")
        .references(() => UserTable.id)
        .notNull(),
});

export type TPengumumanTable = typeof PengumumanTable.$inferSelect;
export type TPengumumanTableInsert = typeof PengumumanTable.$inferInsert;

export const ZTambahPengumumanTableInsert = z.object({
    tanggal: z.string().trim().min(1, { message: "Tanggal is required" }),
    judul: z.string().trim().min(1, { message: "Judul is required" }),
    pengumuman: z.string().trim().min(1, { message: "Pengumuman is required" }),
    lampiran: z.string().optional(),
    authorId: z.number().min(1, { message: "AuthorId is required" }),
});
