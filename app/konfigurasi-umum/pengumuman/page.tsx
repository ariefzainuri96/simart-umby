import Breadcrumbs from "@/components/breadcrumbs";
import Column from "@/components/column";
import React from "react";
import PengumumanAction from "./(section)/action";
import PengumumanDataTable from "./(section)/pengumuman-data-table";
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
