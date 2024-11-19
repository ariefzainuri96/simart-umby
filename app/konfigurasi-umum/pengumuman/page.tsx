import Breadcrumbs from "@/components/breadcrumbs";
import Column from "@/components/column";
import CustomButton from "@/components/custom-button";
import Row from "@/components/row";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import PengumumanAction from "./(section)/action";

const Pengumumanpage = () => {
    return (
        <div className="overflow-y-auto">
            <Column className="p-6">
                <Breadcrumbs />
                <PengumumanAction />
            </Column>
        </div>
    );
};

export default Pengumumanpage;
