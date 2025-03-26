import type React from "react"
import type {Metadata} from "next"
import {Poppins} from "next/font/google"
import "./globals.css"
import {SessionProvider} from "next-auth/react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Guillaume STAUB - Portfolio culinaire",
    description: "Portfolio culinaire - Reconversion CAP Pâtisserie",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr">
        <SessionProvider>
            <body className={`${poppins.className} flex min-h-screen flex-col`}>

            {children}
            </body>
        </SessionProvider>
        </html>
    )
}

