import Link from "next/link";

// type SearchParamProps = {
//     searchParams: Record<string, string> | null | undefined;
// };

export default async function Home() {
    return (
        <div className="h-full w-full overflow-y-auto">
            <div className="flex flex-col items-start">
                <Link href={"/master-data"}>Dashboard</Link>
            </div>
        </div>
    );
}
