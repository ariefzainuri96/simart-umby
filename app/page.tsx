import Link from "next/link";
import { logout } from "@/lib/auth";
import { redirect, RedirectType } from "next/navigation";

// type SearchParamProps = {
//     searchParams: Record<string, string> | null | undefined;
// };

export default async function Home() {
    return (
        <div className="h-full w-full overflow-y-auto">
            <div className="flex flex-col items-start">
                <Link href={"/master-data"}>Dashboard</Link>

                <form
                    action={async () => {
                        "use server";

                        try {
                            logout();
                        } catch (error) {
                            console.log(error);
                        }

                        redirect("/login", RedirectType.replace);
                    }}
                >
                    <button type="submit">Logout</button>
                </form>
            </div>
        </div>
    );
}
