"use client";

import {
    authenticate,
    decrypt,
} from "@/features/(auth)/login/actions/login-actions";
import Image from "next/image";
import { useFormState, useFormStatus } from "react-dom";
import { CustomCheck } from "@/components/reusable-components/custom-check";
import IcWarning from "@/public/icons/ic-warning.svg";
import UmbyLogo from "@/public/images/umby-logo.png";
import CustomTextfield from "@/components/reusable-components/custom-textfield";
import { useEffect, useState } from "react";
import { getCookies } from "cookies-next";
import { useCustomDialogLoadingContext } from "@/components/reusable-components/custom-dialog-loading/custom-dialog-loading-provider";
import { useRouter } from "next/navigation";
import { useCustomDialogErrorContext } from "@/components/reusable-components/custom-dialog-error/custom-dialog-loading-provider";

const LoginForm = () => {
    const { setOpen: setDialogErrorOpen, setError } =
        useCustomDialogErrorContext();
    const { setOpen } = useCustomDialogLoadingContext();
    const router = useRouter();
    const [response, dispatch] = useFormState(authenticate, undefined);
    const [nis, setNis] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    // auto fill input
    useEffect(() => {
        async function getAuthData() {
            const data = await decrypt(
                getCookies()["authData"]?.toString() ?? "",
            );

            if ((data.rememberMe ?? "") === "on") {
                setRememberMe((data.rememberMe ?? "") === "on");
                setNis(data.nis);
                setPassword(data.password);
            }
        }

        getAuthData();
    }, []);

    useEffect(() => {
        if (response) setOpen(false);

        if (response?.status === 200) {
            router.replace("/");
        } else if ((response?.status ?? 0) >= 400) {
            setDialogErrorOpen(true);
            setError(response?.message ?? "");
        }
    }, [response]);

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
                        value={nis}
                        onChange={(e) => setNis(e.target.value)}
                        required
                        label="NIS"
                        autoComplete="off"
                    />
                    <CustomTextfield
                        className="mt-4 w-full"
                        name="password"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        label="Password"
                        autoComplete="off"
                    />
                    <LoginLocalButton />
                    <LoginSSOButton />
                    <div className="mt-4 flex flex-row  items-center">
                        <CustomCheck
                            id="ingatkan-saya"
                            label="Ingatkan Saya"
                            className="flex-1"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
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
    const { setOpen } = useCustomDialogLoadingContext();
    const { pending } = useFormStatus();

    useEffect(() => {
        // i think its a bug of react/nextjs, if i put setOpen(pending) the pending state will always return false
        // so the work around is to use setOpen(true) to show the loading dialog manually
        // and close dialog loading in [LoginForm] when the formstate is returning response
        if (pending) {
            setOpen(true);
        }
    }, [pending]);

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
            type="button"
            className={
                "mt-[1rem] w-full rounded-[0.5rem] border-[1px] border-bluePrimary py-[0.75rem] text-[1rem] font-medium text-bluePrimary"
            }
        >
            Login SSO
        </button>
    );
};

export default LoginForm;
