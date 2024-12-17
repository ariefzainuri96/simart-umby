"use server";

import { db } from "@/db/db";
import {
    PengumumanTable,
    TPengumumanTable,
    TPengumumanTableInsert,
} from "@/db/schema/pengumuman-table";
import { decrypt } from "@/lib/auth";
import { CURRENT_USER } from "@/lib/constant";
import { TCurrentUser } from "@/model/current-user";
import { getCookie } from "cookies-next";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function tambahPengumumanBaru(
    form: TPengumumanTableInsert,
): Promise<TPengumumanTable | undefined> {
    try {
        const userData: TCurrentUser = await decrypt(
            getCookie(CURRENT_USER, { cookies })?.toString() ?? "",
        );

        form.authorId = Number(userData.userId);
        const data = await db.insert(PengumumanTable).values(form).returning();

        revalidatePath("/konfigurasi-umum/pengumuman");

        return data[0];
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error happen: ", error.message);
            throw error;
        }
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

export async function getPengumumanById(): Promise<
    TPengumumanTable[] | undefined
> {
    try {
        const user: TCurrentUser = await decrypt(
            cookies().get(CURRENT_USER)?.value ?? "",
        );

        const data = await db.query.PengumumanTable.findMany({
            where: eq(PengumumanTable.authorId, Number(user.userId)),
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}
