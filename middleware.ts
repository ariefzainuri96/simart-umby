import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
    const currentUser = cookies().get("currentUser")?.value;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-url", request.url);

    if (currentUser && !request.nextUrl.pathname.startsWith("/")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // redirect to login if cookies is inactive
    if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
