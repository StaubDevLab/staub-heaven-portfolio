// app/api/creation/[id]/route.ts
import { prisma } from "@/prisma";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const session = await auth();
    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await prisma.creation.delete({
            where: {
                id: params.id,

            },
        });
        return NextResponse.json({ message: "Création supprimée" }, { status: 200 });
    } catch (error) {
        console.error("Erreur lors de la suppression :", error);
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la suppression" },
            { status: 500 }
        );
    }
}

export async function GET (req: Request,context: { params: Promise<{ id: string }> }) {

    try {
        const { id } = await context.params;
        const creation = await prisma.creation.findUnique({
            where: {
                id: id,

            },
        });
        return NextResponse.json(creation, {status: 200});

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }
}

export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
    const session = await auth();
    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {

        const { id } = await context.params;

        const body = await req.json();
        const { title, coverImage, description, images } = body;


        const updatedCreation = await prisma.creation.update({
            where: { id }, // Utilise id après l'avoir attendu
            data: {
                title,
                coverImage: coverImage || null,
                description: description || null,
                images: {
                    deleteMany: {}, // Supprime toutes les images existantes
                    create: images?.map((img: { url: string }) => ({ url: img.url })) || [],
                },
            },
        });

        return NextResponse.json(
            { message: "Création mise à jour avec succès", creation: updatedCreation },
            { status: 200 }
        );
    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la mise à jour" },
            { status: 500 }
        );
    }
}
