import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { UserTable } from "./user-table";
import { relations } from "drizzle-orm";

export const PengumumanTable = pgTable("pengumuman", {
    id: serial("id").primaryKey(),
    tanggal: timestamp("tanggal", { mode: "string" }).defaultNow().notNull(),
    judul: varchar("title", { length: 255 }).notNull(),
    pengumuman: varchar("deskripsi", { length: 255 }).notNull(),
    lampiran: varchar("lampiran", { length: 255 }).notNull(),
    authorId: serial("authorId")
        .references(() => UserTable.id)
        .notNull(),
});

export type TPengumumanTable = typeof PengumumanTable.$inferSelect;
export type TPengumumanTableInsert = typeof PengumumanTable.$inferInsert;
