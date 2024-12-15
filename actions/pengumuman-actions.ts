"use server";

import { db } from "@/db/db";
import { PengumumanTable } from "@/db/schema/pengumuman-table";
import { decrypt } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

export type TPengumumanTable = typeof PengumumanTable.$inferSelect;

export async function tambahPengumumanBaru(prevState: any, data: FormData) {
    try {
        console.log("Data: ", data);

        return { status: 200 };
    } catch (error) {
        console.log("Error happen: ", error);

        return { status: 400 };
    }
}

export async function getAllPengumuman(
    throwError: boolean = false,
): Promise<TPengumumanTable[]> {
    if (throwError) {
        throw new Error("Error");
    }

    try {
        const data = await db.query.PengumumanTable.findMany({});

        return data;
    } catch (error) {
        console.log("Error happen: ", error);

        return [];
    }
}

export async function getPengumumanById(): Promise<TPengumumanTable[]> {
    try {
        const user = await decrypt(cookies().get("currentUser")?.value ?? "");

        const data = await db.query.PengumumanTable.findMany({
            where: eq(PengumumanTable.authorId, user.userId),
        });

        return data;
    } catch (error) {
        return [];
    }
}
