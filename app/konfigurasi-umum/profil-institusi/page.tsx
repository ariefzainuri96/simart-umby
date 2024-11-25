import Breadcrumbs from "@/components/breadcrumbs";
import Column from "@/components/column";
import React from "react";
import MailConfiguration from "./(section)/mail-configuration";
import { ProfileInstitusiProvider } from "./profile-institusi-context";
import Revisi from "./(section)/revisi";

const ProfileInstitusiPage = () => {
    return (
        <div className="overflow-y-auto">
            <Column className="p-6">
                <Breadcrumbs />
                <ProfileInstitusiProvider>
                    <MailConfiguration className="mt-6" />
                    <div className="my-[1.5rem] h-[4px] w-full bg-[#F2F2F2]" />
                    <Revisi />
                </ProfileInstitusiProvider>
            </Column>
        </div>
    );
};

export default ProfileInstitusiPage;
