import Breadcrumbs from "@/components/reusable-components/breadcrumbs";
import Column from "@/components/reusable-components/column";
import PengumumanAction from "@/components/page-components/konfigurasi-umum/pengumuman/section/pengumuman-action";
import PengumumanDataTable from "@/components/page-components/konfigurasi-umum/pengumuman/section/pengumuman-data-table";
import { Metadata } from "next";
import { Suspense } from "react";
import CircularLoader from "@/components/reusable-components/circular-progress";

export const metadata: Metadata = {
    title: "Pengumuman",
};

const Pengumumanpage = () => {
    return (
        <div className="overflow-y-auto">
            <Column className="p-6">
                <Breadcrumbs />
                <PengumumanAction />
                <Suspense
                    fallback={<CircularLoader className="mt-4 self-center" />}
                >
                    <PengumumanDataTable />
                </Suspense>
            </Column>
        </div>
    );
};

export default Pengumumanpage;
