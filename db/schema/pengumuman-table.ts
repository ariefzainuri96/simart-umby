import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const PengumumanTable = pgTable("pengumuman", {
    id: serial("id").primaryKey(),
    tanggal: varchar("tanggal", { length: 255 }).notNull(),
    judul: varchar("title", { length: 255 }).notNull(),
    pengumuman: varchar("deskripsi", { length: 255 }).notNull(),
    lampiran: varchar("lampiran", { length: 255 }).notNull(),
});
