"use client";

import { authenticate } from "@/lib/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import TextField from "@mui/material/TextField";
import { CustomCheck } from "@/components/custom-check";
import IcWarning from "@/public/icons/ic-warning.svg";
import UmbyLogo from "@/public/images/umby-logo.png";

const LoginForm = () => {
    const [error, dispatch] = useFormState(authenticate, undefined);
    const router = useRouter();

    const styles = () => ({
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#BFBFBF",
            },
            "&:hover fieldset": {
                borderColor: "#18469C",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#18469C",
                borderWidth: "1px",
            },
        },
        "& label": {
            "& ": {
                color: "#BFBFBF",
            },
            "&.Mui-focused": {
                color: "#18469C",
            },
        },
    });

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
                    <TextField
                        className="w-full"
                        variant="outlined"
                        label="NIS"
                        name="nis"
                        sx={styles}
                        required
                    />
                    <div className="mt-4">
                        <TextField
                            className="w-full"
                            variant="outlined"
                            label="Password"
                            name="password"
                            type="password"
                            required
                            sx={styles}
                        />
                    </div>
                    <SubmitButton />
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

const SubmitButton = () => {
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

export default LoginForm;
