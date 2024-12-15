"use client";

import React, { createContext, ReactNode, useContext } from "react";
import CustomDialogError from "./custom-dialog-error";
import useCustomDialogError from "./use-custom-dialog-error";

// Define the context type
type CustomDialogErrorContextType = ReturnType<typeof useCustomDialogError>;

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
    const customDialog = useCustomDialogError();

    return (
        <CustomDialogErrorContext.Provider value={customDialog}>
            <CustomDialogError />
            {children}
        </CustomDialogErrorContext.Provider>
    );
}
