import { LoginForm } from "./(sections)/login-form";

const Login = () => {
    return (
        <div className="h-full w-full">
            <div className="flex h-full w-full flex-row justify-center">
                {/* left side */}
                <div className="flex w-full flex-col items-center lg:basis-1/3">
                    <LoginForm />
                </div>
                {/* right side */}
                <div className="hidden bg-red-50 lg:block lg:basis-2/3"></div>
            </div>
        </div>
    );
};

export default Login;
