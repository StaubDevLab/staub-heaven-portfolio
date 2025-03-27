import { auth } from "@/auth";
import {prisma} from "@/prisma";
import {NextResponse} from "next/server";

export const GET = async () => {

    try {

        const creations = await prisma.creation.findMany()
        return NextResponse.json(creations, {status: 200});

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }

}

export async function POST(req: Request) {
    const session = await auth();
    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { title, coverImage, description, images, order } = body;
        console.log(body)
        const creation = await prisma.creation.create({
            data: {
                title,
                coverImage: coverImage || null,
                description: description || null,
                images: {
                    create: images?.map((img: { url: string }) => ({ url: img.url })) || [],
                },
                order: order || null,
            },
        });

        return NextResponse.json(
            { message: "Création ajoutée avec succès", creation },
            { status: 201 }
        );
    } catch (error) {
        console.error("Erreur lors de la création :", error);
        return NextResponse.json(
            { error: "Une erreur est survenue lors de la création" },
            { status: 500 }
        );
    }
}

