import Breadcrumbs from "@/components/breadcrumbs";
import Column from "@/components/column";
import React from "react";
import MailConfiguration from "./(section)/mail-configuration";
import Revisi from "./(section)/revisi";
import { ProfileInstitusiProvider } from "./profile-institusi-provider";
import SiteConfiguration from "./(section)/site-configuration";
import { Metadata } from "next";

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
