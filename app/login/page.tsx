import dynamic from "next/dynamic";
import { Announcement } from "./(sections)/announcement";

const LoginForm = dynamic<{}>(() => import("./(sections)/login-form"), {
    ssr: false,
});

const Login = () => {
    return (
        <div className="h-full w-full">
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
        </div>
    );
};

export default Login;
