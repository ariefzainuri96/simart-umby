import Announcement from "@/components/page-components/login/section/announcement";
import { AnnouncementList } from "@/components/page-components/login/section/announcement-list";
import LoginForm from "@/components/page-components/login/section/login-form";
import TestCloneElement, {
    TextClone,
} from "@/components/page-components/login/section/test-clone-element";
import CircularLoader from "@/components/reusable-components/circular-progress";
import Column from "@/components/reusable-components/column";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Login",
};

const Login = () => {
    return (
        <div className="flex h-full w-full flex-row justify-center">
            {/* left side */}
            <div className="flex w-full flex-col items-center lg:basis-1/3">
                <LoginForm />
            </div>
            {/* right side */}
            <div className="hidden lg:block lg:basis-2/3">
                <Announcement />
            </div>
        </div>
    );
};

export default Login;
