"use server";

import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { isRedirectError } from "next/dist/client/components/redirect";
import { delay } from "./utils";
// import { UserTable } from "../db/schema";

// type TUser = typeof UserTable.$inferSelect;

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

const infiniteDate = new Date(Date.now() + 60 * 60000 * 24 * 365 * 100);

export async function authenticate(_: any, formData: FormData) {
    try {
        const nis = formData.get("nis")?.toString() ?? "";
        const password = formData.get("password")?.toString() ?? "";
        const rememberMe =
            (formData.get("rememberMe")?.toString() ?? "") === "on";

        console.log(nis, password, rememberMe);

        await delay(1500);
        await setAuthCookies(nis, "123");
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

        // const user = await db
        //     .select()
        //     .from(UserTable)
        //     .where(eq(UserTable.email, email));

        // if (user.length === 0) {
        //     return { status: 401, message: "Invalid email or password" };
        // }

        // if (!bcrypt.compareSync(password, user[0].password)) {
        //     return { status: 401, message: "Invalid email or password" };
        // }

        // await setCookies(email, user[0].id);
        return { status: 200, message: "Login Success" };
    } catch (error) {
        console.log(error);

        if (isRedirectError(error)) throw error;
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
