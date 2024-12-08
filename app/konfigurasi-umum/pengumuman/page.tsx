import Breadcrumbs from "@/components/reusable-components/breadcrumbs";
import Column from "@/components/reusable-components/column";
import PengumumanAction from "@/components/page-components/konfigurasi-umum/pengumuman/section/action";
import PengumumanDataTable from "@/components/page-components/konfigurasi-umum/pengumuman/section/pengumuman-data-table";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pengumuman",
};

const Pengumumanpage = () => {
    return (
        <div className="overflow-y-auto">
            <Column className="p-6">
                <Breadcrumbs />
                <PengumumanAction />
                <PengumumanDataTable />
            </Column>
        </div>
    );
};

export default Pengumumanpage;
