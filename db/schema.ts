import { table } from "console";
import { relations } from "drizzle-orm";
// import UserTable from "./schema/user-table";
import { PengumumanTable } from "./schema/pengumuman-table";
import { UserTable } from "./schema/user-table";

export const schema = {
    user: UserTable,
    pengumuman: PengumumanTable,
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
