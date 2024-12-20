"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import CustomDialogLoading from "./custom-dialog-loading";

// Define the context type
type CustomDialogLoadingContextType = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

// Create the context with an initial value of `undefined`
const CustomDialogLoadingContext =
    createContext<CustomDialogLoadingContextType | null>(null);

// Custom hook to consume the context
export function useCustomDialogLoadingContext() {
    const context = useContext(CustomDialogLoadingContext);

    if (!context) {
        throw new Error(
            "useCustomDialogLoadingContext must be used within a CustomDialogLoadingProvider",
        );
    }

    return context;
}

// Create the provider component
export default function CustomDialogLoadingProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <CustomDialogLoadingContext.Provider value={{ open, setOpen }}>
            <CustomDialogLoading />
            {children}
        </CustomDialogLoadingContext.Provider>
    );
}
