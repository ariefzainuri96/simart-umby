export * from "./db";

import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import { UserTable } from "./schema/user-table";

const db = drizzle(process.env.DATABASE_URL as string);

async function main() {
    console.log("Inserting user...");

    const data = await db
        .insert(UserTable)
        .values({
            nis: "sm-5",
            password: "123",
        })
        .returning({
            id: UserTable.id,
        });

    console.log(data);
    // const user: typeof UserTable.$inferInsert = {
    //     name: "John",
    // };
    // await db.insert(UserTable).values(user);
    // console.log("New user created!");
    // const users = await db.select().from(UserTabRle);
    // console.log("Getting all users from the database: ", users);
    // await db
    //     .update(UserTable)
    //     .set({
    //         name: "John Cena",
    //     })
    //     .where(eq(UserTable.id, users[users.length].id));
    // console.log("User info updated!");
}

main();
