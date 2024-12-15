"use server";

import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { UserTable } from "@/db/schema/user-table";
import bcrypt from "bcryptjs";

// const bcrypt = require("bcryptjs");
const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

const infiniteDate = new Date(Date.now() + 60 * 60000 * 24 * 365 * 100);

export async function authenticate(_: any, formData: FormData) {
    try {
        const nis = formData.get("nis")?.toString() ?? "";
        const password = formData.get("password")?.toString() ?? "";

        const user = await db.query.UserTable.findFirst({
            where: eq(UserTable.nis, nis),
        });

        if (user && bcrypt.compareSync(password, user.password)) {
            await setAuthCookies(nis, `${user.id}`);
            await setCookies(
                "authData",
                {
                    nis: nis,
                    password: password,
                    rememberMe: formData.get("rememberMe")?.toString() ?? "",
                },
                false,
                infiniteDate,
            );

            return { status: 200, message: "Login Success" };
        } else {
            return { status: 401, message: "Invalid email or password" };
        }
    } catch (error) {
        return { status: 401, message: `${error}`, data: formData };
    }
}

async function encrypt(payload: any, expires: Date) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expires)
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

async function setAuthCookies(email: string, userId: string) {
    const user = {
        email: email,
        userId: userId,
    };
    // 60000 millisecond => 1 minute
    const expires = new Date(Date.now() + 60 * 60000);
    const session = await encrypt(user, expires);
    cookies().set("currentUser", session, { expires, httpOnly: true }); // httpOnly true -> we can only get cookies in server side
}

async function setCookies(
    key: string,
    data: any,
    httpOnly?: boolean,
    expires?: Date,
) {
    const encryptedData = await encrypt(
        data,
        expires ?? new Date(Date.now() + 60 * 60000),
    );
    cookies().set(key, encryptedData, { expires, httpOnly: httpOnly ?? true }); // httpOnly true -> we can only get cookies in server side
}

export async function logout() {
    cookies().delete("currentUser");
}
