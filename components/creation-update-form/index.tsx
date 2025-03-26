// components/CreationUpdateForm.tsx
"use client";

import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getCreation } from "@/actions/creations-actions";

// Schéma Zod pour la validation
const creationSchema = z.object({
    title: z.string().min(1, "Le titre est requis").max(255),
    coverImage: z.string().url("URL invalide").optional().or(z.literal("")),
    description: z.string().optional(),
    images: z.array(z.object({ url: z.string().url("URL invalide") })).optional(),
});

type CreationFormData = z.infer<typeof creationSchema>;

interface CreationUpdateFormProps {
    creationId: string;
    onSuccess: () => void; // Callback pour signaler la mise à jour réussie
}

export default function CreationUpdateForm({ creationId, onSuccess }: CreationUpdateFormProps) {
    const [loading, setLoading] = useState(true);

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<CreationFormData>({
        resolver: zodResolver(creationSchema),
        defaultValues: {
            title: "",
            coverImage: "",
            description: "",
            images: [],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "images",
    });

    // Charger les données de la création
    const fetchCreation = async () => {
        try {
            const creation = await getCreation(creationId);
            if (creation) {
                reset({
                    title: creation.title,
                    coverImage: creation.coverImage || "",
                    description: creation.description || "",
                    images: creation.images || [], // Assumes images est un tableau [{ url: string }]
                });
            }
        } catch (error) {
            console.error("Erreur lors du chargement de la création :", error);
            toast("Erreur lors du chargement de la création.", {style:{backgroundColor:"red"}});
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCreation();
    }, [creationId]);

    const onSubmit = async (data: CreationFormData) => {
        try {
            const response = await fetch(`http://localhost:3000/api/creation/${creationId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: data.title,
                    coverImage: data.coverImage || null,
                    description: data.description || null,
                    images: data.images || [],
                }),
            });

            if (!response.ok) throw new Error("Erreur lors de la mise à jour");

            toast("Création mise à jour avec succès.", {style:{backgroundColor:"green"}});

            onSuccess();
        } catch (error) {
            console.log(error)
            toast("Une erreur est survenue lors de la mise à jour.", {style:{backgroundColor:"red"}});
        }
    };

    if (loading) {
        return <p>Chargement...</p>; // Ou un Skeleton si tu préfères
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-2">
                <Label htmlFor="title">Titre</Label>
                <Input id="title" {...register("title")} />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="coverImage">Image de couverture (URL)</Label>
                <Input id="coverImage" {...register("coverImage")} />
                {errors.coverImage && (
                    <p className="text-red-500 text-sm">{errors.coverImage.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" {...register("description")} />
                {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <Label>Images supplémentaires (URLs)</Label>
                <div className="flex gap-2">
                    <Input
                        placeholder="Entrez l'URL de l'image"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                const value = e.currentTarget.value;
                                if (value) {
                                    append({ url: value });
                                    e.currentTarget.value = "";
                                }
                            }
                        }}
                    />
                    <Button
                        type="button"
                        onClick={() => {
                            const input = document.querySelector(
                                'input[placeholder="Entrez l\'URL de l\'image"]'
                            ) as HTMLInputElement;
                            if (input?.value) {
                                append({ url: input.value });
                                input.value = "";
                            }
                        }}
                    >
                        Ajouter
                    </Button>
                </div>
                <ul className="mt-2 space-y-2">
                    {fields.map((field, index) => (
                        <li key={field.id} className="flex items-center gap-2">
                            <Input {...register(`images.${index}.url`)} />
                            <Button type="button" variant="destructive" onClick={() => remove(index)}>
                                Supprimer
                            </Button>
                            {errors.images?.[index]?.url && (
                                <p className="text-red-500 text-sm">{errors.images[index]?.url?.message}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Mise à jour..." : "Mettre à jour"}
            </Button>
        </form>
    );
}
