import { Announcement } from "@/components/page-components/login/section/announcement";
import LoginForm from "@/components/page-components/login/section/login-form";

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
