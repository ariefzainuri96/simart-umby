import Announcement from "@/features/(auth)/login/components/announcement";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const LoginForm = dynamic(
    () => import("../../../features/(auth)/login/components/login-form"),
    {
        ssr: false,
    },
);

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
