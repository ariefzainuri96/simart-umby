"use client";

import { authenticate } from "@/lib/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import UmbyLogo from "@/public/images/umby-logo.png";
import TextField from "@mui/material/TextField";

export const LoginForm = () => {
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
        <>
            <Image src={UmbyLogo} alt="Umby Logo" width={162} height={158} />
            <h1 className="text-bluePrimary mt-[3rem] text-[1.75rem] font-semibold">
                SIMART
            </h1>
            <span className="text-textSecondary mt-[0.5rem] text-[1rem]">
                Sistem Informasi Aset Rumah Tangga
            </span>
            <form className="mt-[3.5rem] max-w-[600px]" action={dispatch}>
                <TextField
                    className="w-full"
                    variant="outlined"
                    label="NIS"
                    name="nis"
                    sx={styles}
                />
                <input
                    required
                    className="product-input mt-2 w-full"
                    type="password"
                    name="password"
                    placeholder="Input password"
                />
                <SubmitButton />
            </form>
            <span className="mt-4 self-center">
                {"Don't"} have an account?{" "}
                <span
                    onClick={(e) => {
                        e.preventDefault();

                        router.push("/register");
                    }}
                    className="cursor-pointer font-semibold text-blue-500 underline"
                >
                    Register
                </span>
            </span>
            {error && (
                <span className="mt-2 text-sm font-normal text-red-500">
                    {error.message}
                </span>
            )}
        </>
    );
};

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            aria-disabled={pending}
            className={
                "btn-filled-primary mt-4 w-full " +
                (pending ? "bg-slate-400 hover:bg-slate-400" : "")
            }
        >
            Login
        </button>
    );
};
