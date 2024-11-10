import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import DashboardHeader from "./(sections)/dashboard-header";
import "./globals.css";
import SidebarSection from "./(sections)/sidebar-section";
import React from "react";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const headersList = headers();
    // const activePath = (headersList.get("x-url") ?? "").split("/").pop();

    // console.log(activePath);

    // const hideSidebarPath = ["login"];
    // const hideSidebar = hideSidebarPath.includes(activePath ?? "");

    return (
        <html lang="en">
            <body
                className={
                    inter.className + " h-screen w-screen overflow-hidden"
                }
            >
                <AppRouterCacheProvider>
                    <div className={twMerge("h-full w-full")}>
                        <div className="flex h-full w-full flex-row">
                            {/* sidebar */}
                            <SidebarSection />
                            <div className="flex h-full flex-1 flex-col">
                                <DashboardHeader />
                                <div className="w-full flex-1">{children}</div>
                            </div>
                        </div>
                    </div>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
