"use client";

import { authenticate } from "@/lib/auth";
import Image from "next/image";
import { useFormState, useFormStatus } from "react-dom";
import { CustomCheck } from "@/components/custom-check";
import IcWarning from "@/public/icons/ic-warning.svg";
import UmbyLogo from "@/public/images/umby-logo.png";
import CustomTextfield from "@/components/custom-textfield";

const LoginForm = () => {
    const [error, dispatch] = useFormState(authenticate, undefined);

    console.log(error);

    return (
        <div className="h-full w-full max-w-[600px] overflow-y-auto lg:overflow-y-hidden">
            <div className="flex h-full w-full flex-col p-4">
                <Image
                    src={UmbyLogo}
                    alt="Umby Logo"
                    width={162}
                    height={158}
                    className="self-center"
                />
                <h1 className="mt-[3rem] self-center text-[1.75rem] font-semibold text-bluePrimary">
                    SIMART
                </h1>
                <span className="mt-[0.5rem] self-center text-[1rem] text-textSecondary">
                    Sistem Informasi Aset Rumah Tangga
                </span>
                <form className="mt-[3.5rem]" action={dispatch}>
                    <CustomTextfield
                        className="w-full"
                        name="nis"
                        id="nis"
                        required
                        label="NIS"
                    />
                    <CustomTextfield
                        className="mt-4 w-full"
                        name="password"
                        id="password"
                        type="password"
                        required
                        label="Password"
                    />
                    <LoginLocalButton />
                    <LoginSSOButton />
                    {/* <Button
                        onClick={(e) => {
                            e.preventDefault();

                            router.push("/register");
                        }}
                        className="mt-2 w-full"
                    >
                        Register
                    </Button> */}
                    <div className="mt-4 flex flex-row  items-center">
                        <CustomCheck
                            id="ingatkan-saya"
                            label="Ingatkan Saya"
                            className="flex-1"
                            name="rememberMe"
                        />
                        <span className="cursor-pointer py-1 text-[0.875rem] font-medium text-blue1">
                            Lupa Password?
                        </span>
                    </div>
                </form>
                <div className="hidden lg:block lg:flex-1" />
                <div className="mb-4 mt-10 flex w-full flex-row items-center gap-4 lg:mt-0">
                    <Image
                        src={IcWarning}
                        alt="warning"
                        width={41}
                        height={36}
                    />
                    <span className="flex-1 text-[0.75rem] text-textSecondary">
                        Untuk alasan keamanan, silahkan logout dan tutup browser
                        Anda setelah selesai menggunakan layanan yang memerlukan
                        otentikasi!
                    </span>
                </div>
            </div>
        </div>
    );
};

const LoginLocalButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            aria-disabled={pending}
            className={
                "mt-[2rem] w-full rounded-[0.5rem] bg-bluePrimary py-[0.75rem] text-[1rem] font-medium text-white " +
                (pending && "bg-slate-400")
            }
        >
            Login Local
        </button>
    );
};

const LoginSSOButton = () => {
    // const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className={
                "mt-[1rem] w-full rounded-[0.5rem] border-[1px] border-bluePrimary py-[0.75rem] text-[1rem] font-medium text-bluePrimary"
            }
        >
            Login SSO
        </button>
    );
};

export default LoginForm;
