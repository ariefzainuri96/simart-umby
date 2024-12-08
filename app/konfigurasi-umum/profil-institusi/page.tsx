import Breadcrumbs from "@/components/breadcrumbs";
import Column from "@/components/column";
import React from "react";
import { Metadata } from "next";
import MailConfiguration from "@/components/page-components/konfigurasi-umum/profile-institusi/section/mail-configuration";
import Revisi from "@/components/page-components/konfigurasi-umum/profile-institusi/section/revisi";
import SiteConfiguration from "@/components/page-components/konfigurasi-umum/profile-institusi/section/site-configuration";
import { ProfileInstitusiProvider } from "@/components/page-components/konfigurasi-umum/profile-institusi/component/profile-institusi-provider";

export const metadata: Metadata = {
    title: "Profil Institusi",
};

const ProfileInstitusiPage = () => {
    return (
        <div className="w-full flex-1 overflow-y-auto">
            <Column className="p-6">
                <Breadcrumbs />
                <ProfileInstitusiProvider>
                    <MailConfiguration className="mt-6" />
                    <div className="my-[1.5rem] h-[2px] w-full bg-[#F2F2F2]" />
                    <Revisi />
                    <div className="my-[1.5rem] h-[2px] w-full bg-[#F2F2F2]" />
                    <SiteConfiguration />
                </ProfileInstitusiProvider>
            </Column>
        </div>
    );
};

export default ProfileInstitusiPage;
