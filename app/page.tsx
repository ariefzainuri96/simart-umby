import { Suspense } from "react";
import ErrorBoundary from "@/components/error-boundary";
import { AddProductDialog } from "./(components)/add-product-dialog";
import { PlusIcon } from "lucide-react";
import { ProductSkeleton } from "./(components)/product-item-skeleton";
import Link from "next/link";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: SearchParamProps) {
    return (
        <div className="h-full w-full overflow-y-auto">
            <div className="flex flex-col items-start">
                <Link href={"/master-data"}>Dashboard</Link>
            </div>
        </div>
    );
}
