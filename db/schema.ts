import { UserTable } from "./schema/user-table";
import { PengumumanTable } from "./schema/pengumuman-table";
import {
    PengumumanTableRelations,
    UserTableRelations,
} from "./schema/relations";

export default {
    UserTable,
    PengumumanTable,
    PengumumanTableRelations,
    UserTableRelations,
};

// export const ProductTable = pgTable("product", {
//     id: uuid("id").primaryKey().defaultRandom(),
//     name: varchar("name", { length: 255 }).notNull(),
//     price: varchar("price", { length: 255 }).notNull(),
//     quantity: integer("quantity").notNull(),
//     userId: uuid("userId")
//         .references(() => UserTable.id)
//         .notNull(),
// });

// export const CategoryTable = pgTable("category", {
//     id: uuid("id").primaryKey().defaultRandom(),
//     name: varchar("name", { length: 255 }).notNull(),
// });

// export const ProductCategoryTable = pgTable(
//     "productCategory",
//     {
//         productId: uuid("productId")
//             .references(() => ProductTable.id)
//             .notNull(),
//         categoryId: uuid("categoryId")
//             .references(() => CategoryTable.id)
//             .notNull(),
//     },
//     (table) => {
//         return {
//             pk: primaryKey({ columns: [table.productId, table.categoryId] }),
//         };
//     },
// );

// RELATIONS

// export const UserTableRelations = relations(UserTable, ({ many }) => {
//     return {
//         products: many(ProductTable),
//     };
// });

// export const PengumumanTableRelations = relations(
//     PengumumanTable,
//     ({ one }) => {
//         return {
//             author: one(UserTable, {
//                 fields: [PengumumanTable.authorId],
//                 references: [UserTable.id],
//             }),
//         };
//     },
// );

// export const UserTableRelations = relations(UserTable, ({ many }) => {
//     return {
//         pengumuman: many(PengumumanTable),
//     };
// });
