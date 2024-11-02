import { LoginForm } from "./(sections)/login-form";

const Login = () => {
    return (
        <div className="h-full w-full">
            <div className="flex w-full flex-row justify-center">
                {/* left side */}
                <div className="overflow-y-auto lg:basis-1/3">
                    <div className="flex flex-col items-center px-4">
                        <LoginForm />
                    </div>
                </div>
                {/* right side */}
                <div className="hidden bg-red-50 lg:block lg:basis-2/3"></div>
            </div>
        </div>
    );
};

export default Login;
