import {auth} from "@/auth"
import Header from "@/components/header";
import type React from "react";
import Dashboard from "@/components/dashboard";
import {Toaster} from "sonner";
export default async function Page() {
    const session = await auth()

    if (!session) return <div>Not authenticated</div>

    return (
        <div>
            <Header/>

            <Dashboard />
<Toaster/>
        </div>
    )
}
