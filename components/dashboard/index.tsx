// components/Dashboard.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {useEffect, useState} from "react";
import CreationForm from "@/components/creation-added-form";
import CreationsList from "@/components/creation-list-admin";
import {Creation} from "@/types/creation";
import {getCreations} from "@/actions/creations-actions";
import {toast} from "sonner";
import {Skeleton} from "@/components/ui/skeleton";


export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [creations, setCreations] = useState<Creation[]>([]); // État partagé

    const [loading, setLoading] = useState(true);

    async function fetchCreations() {

        try {

            const data = await getCreations();
            setCreations(data);
            console.log(data)
        } catch (error) {
            console.log(error)
            toast("Impossible de charger les créations.", {style: {background: "#FF0000", color: "#FFFFFF"}});
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        setLoading(true)
        fetchCreations();
    }, []);
    const handleDelete = (id: string) => {
        setCreations((prev) => prev.filter((creation) => creation.id !== id));
    };
    const handleCreationAdded = () =>{
        fetchCreations()
        setOpen(false)
    }
    const handleCreationUpdated = () =>{
        fetchCreations()
    }

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array(3)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} className="h-64 w-full"/>
                    ))}
            </div>
        );
    }
    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button>Ajouter une création</Button>
                    </SheetTrigger>
                    <SheetContent className={"p-4"}>
                        <SheetHeader>
                            <SheetTitle>Ajouter une nouvelle création</SheetTitle>
                        </SheetHeader>
                        <div className="mt-4">
                            <CreationForm onSuccess={handleCreationAdded} />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="mt-6">
                <CreationsList onSuccessUpdated={handleCreationUpdated} creations={creations} handleDelete={handleDelete}/>
            </div>
        </div>
    );
}
