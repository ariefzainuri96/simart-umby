import Breadcrumbs from "@/components/reusable-components/breadcrumbs";
import Column from "@/components/reusable-components/column";
import React from "react";
import { Metadata } from "next";
import MailConfiguration from "@/features/(main)/konfigurasi-umum/profile-institusi/sections/mail-configuration";
import Revisi from "@/features/(main)/konfigurasi-umum/profile-institusi/sections/revisi";
import SiteConfiguration from "@/features/(main)/konfigurasi-umum/profile-institusi/sections/site-configuration";
import { ProfileInstitusiProvider } from "@/features/(main)/konfigurasi-umum/profile-institusi/components/profile-institusi-provider";

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
