"use client";

import React, { createContext, ReactNode, useContext } from "react";
import useCustomDialog from "./use-custom-dialog";
import CustomDialogLoading from "./custom-dialog-loading";

// Define the context type
type CustomDialogLoadingContextType = ReturnType<typeof useCustomDialog>;

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
    const customDialog = useCustomDialog();

    return (
        <CustomDialogLoadingContext.Provider value={customDialog}>
            <CustomDialogLoading />
            {children}
        </CustomDialogLoadingContext.Provider>
    );
}
