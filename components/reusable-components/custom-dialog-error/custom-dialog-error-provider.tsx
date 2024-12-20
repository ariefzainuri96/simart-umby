"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import CustomDialogError from "./custom-dialog-error";

// Define the context type
type CustomDialogErrorContextType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    error: string;
    setError: (error: string) => void;
};

// Create the context with an initial value of `undefined`
const CustomDialogErrorContext =
    createContext<CustomDialogErrorContextType | null>(null);

// Custom hook to consume the context
export function useCustomDialogErrorContext() {
    const context = useContext(CustomDialogErrorContext);

    if (!context) {
        throw new Error(
            "useCustomDialogErrorContext must be used within a CustomDialogErrorProvider",
        );
    }

    return context;
}

// Create the provider component
export default function CustomDialogErrorProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");

    return (
        <CustomDialogErrorContext.Provider
            value={{ open, setOpen, error, setError }}
        >
            <CustomDialogError />
            {children}
        </CustomDialogErrorContext.Provider>
    );
}
