import { headers } from "next/headers";

export default function useHeaders() {
    const headersList = headers();
    const activePath = (headersList.get("x-url") ?? "").split("/").pop();

    return activePath;
}
