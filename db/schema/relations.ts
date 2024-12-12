import { relations } from "drizzle-orm";
import { PengumumanTable } from "./pengumuman-table";
import { UserTable } from "./user-table";

export const PengumumanTableRelations = relations(
    PengumumanTable,
    ({ one }) => {
        return {
            author: one(UserTable, {
                fields: [PengumumanTable.authorId],
                references: [UserTable.id],
            }),
        };
    },
);

export const UserTableRelations = relations(UserTable, ({ many }) => {
    return {
        pengumuman: many(PengumumanTable),
    };
});
