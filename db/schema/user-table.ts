import { relations } from "drizzle-orm";
import { pgTable, serial, uniqueIndex, varchar } from "drizzle-orm/pg-core";
import { PengumumanTable } from "./pengumuman-table";

export const UserTable = pgTable(
    "user",
    {
        id: serial("id").primaryKey(),
        nis: varchar("nis", { length: 255 }).notNull(),
        password: varchar("password", { length: 255 }).notNull(),
    },
    (table) => {
        return {
            nisIndex: uniqueIndex("nisIndex").on(table.nis),
        };
    },
);
