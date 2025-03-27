// components/CreationForm.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";




const creationSchema = z.object({
    title: z.string().min(1, "Le titre est requis").max(255),
    coverImage: z.string().url("URL invalide").optional().or(z.literal("")),
    description: z.string().optional(),
    images: z.array(z.object({ url: z.string().url("URL invalide") })).optional(),
});

type CreationFormData = z.infer<typeof creationSchema>;

interface CreationFormProps {
    onSuccess: () => void;

}

export default function CreationForm({ onSuccess }: CreationFormProps) {
    const {
        register,
        control,
        handleSubmit,
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

    const onSubmit = async (data: CreationFormData) => {
        try {
            const response = await fetch(`/api/creation`, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    title: data.title,
                    coverImage: data.coverImage || null,
                    description: data.description || null,
                    images: data.images || [],
                    order: 2,

                }),
            });

            if (!response.ok) throw new Error("Erreur lors de la création");

            toast( "Création ajoutée avec succès !", {style:{backgroundColor:"green"}});
            onSuccess();
        } catch (e) {
            console.log(e)
            toast("Une erreur est survenue", {style:{backgroundColor:"red"}});
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className={"flex flex-col gap-2"}>
                <Label htmlFor="title">Titre</Label>
                <Input id="title" {...register("title")} />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <div className={"flex flex-col gap-2"}>
                <Label htmlFor="coverImage">Image de couverture (URL)</Label>
                <Input id="coverImage" {...register("coverImage")} />
                {errors.coverImage && (
                    <p className="text-red-500 text-sm">{errors.coverImage.message}</p>
                )}
            </div>

            <div className={"flex flex-col gap-2"}>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" {...register("description")} />
                {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description.message}</p>
                )}
            </div>

            <div className={"flex flex-col gap-2"}>
                <Label>Images supplémentaires (URLs)</Label>
                <div className="flex gap-2">
                    <Input
                        placeholder="Entrez l'URL de l'image"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                const value = e.currentTarget.value;
                                if (value) {
                                    append({url: value});
                                    e.currentTarget.value = ""; // Réinitialise le champ
                                }
                            }
                        }}
                    />
                    <Button
                        type="button"
                        onClick={() => {
                            const input = document.querySelector('input[placeholder="Entrez l\'URL de l\'image"]') as HTMLInputElement;
                            if (input?.value) {
                                append({url: input.value});
                                input.value = "";
                            }
                        }}
                    >
                        Ajouter
                    </Button>
                </div>
                <ul className="mt-2">
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
                {isSubmitting ? "Envoi..." : "Créer"}
            </Button>
        </form>
    );
}
