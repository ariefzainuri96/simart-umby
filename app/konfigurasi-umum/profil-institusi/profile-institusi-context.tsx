"use client";

import React, { createContext, ReactNode, useContext } from "react";
import useProfileInstitusi from "./use-profile-institusi";

// Define the context type
type ProfileInstitusiContextType = ReturnType<typeof useProfileInstitusi>;

// Create the context with an initial value of `undefined`
const ProfileInstitusiContext =
    createContext<ProfileInstitusiContextType | null>(null);

// Custom hook to consume the context
export function useProfileInstitusiContext() {
    const context = useContext(ProfileInstitusiContext);

    if (!context) {
        throw new Error(
            "useProfileInstitusiContext must be used within a ProfileInstitusiProvider",
        );
    }

    return context;
}

// Create the provider component
export const ProfileInstitusiProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const profileInstitusi = useProfileInstitusi();

    return (
        <ProfileInstitusiContext.Provider value={profileInstitusi}>
            {children}
        </ProfileInstitusiContext.Provider>
    );
};
