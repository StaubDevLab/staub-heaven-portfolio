import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Guillaume STAUB - Portfolio culinaire",
    description: "Portfolio de pâtisserie pour candidature à l'École Internationale de Pâtisserie",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr">
        <body className={`${poppins.className} bg-blue-500 text-justify`}>{children}</body>
        </html>
    )
}

