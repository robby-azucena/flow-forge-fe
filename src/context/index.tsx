"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import MuiThemeProvider from "./MuiThemeProvider";
import SnackbarProvider from "./SnackbarProvider";
import Background from "@/shared/ui/Background";

interface PropType {
    children: ReactNode;
}

const ProviderContainer = ({ children }: PropType) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });
    return (
        <AppRouterCacheProvider>
            <QueryClientProvider client={queryClient}>
                <MuiThemeProvider>
                    <SnackbarProvider>
                        <Background />

                        <main className="w-dvw h-dvh flex self-stretch overflow-hidden">{children}</main>
                    </SnackbarProvider>
                </MuiThemeProvider>
            </QueryClientProvider>
        </AppRouterCacheProvider>
    );
};

export default ProviderContainer;
