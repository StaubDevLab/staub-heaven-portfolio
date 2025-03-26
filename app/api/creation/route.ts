import { auth } from "@/auth";
import {prisma} from "@/prisma";
import {NextResponse} from "next/server";

export const GET = async (res: Request) => {

    try {

        const services = await prisma.creation.findMany()
        return NextResponse.json(services, {status: 200});

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }

}

export const POST = async (req: Request, res: Request) => {
    const session = await auth();
    if (!session) {
        return NextResponse.json({error: 'Unauthorized'},
            {status: 401, headers: {'Content-Type': 'application/json'}});
    }
    try {
        const body = req ? await req.json() : null

         await prisma.creation.create(
            {
                data: {
                    title: body.title,
                    coverImage: body.coverImage,
                    images: {
                        create: body.images?.map((img: { url: string }) => ({ url: img.url })) || [], // Corrige ici
                    },
                    order: body.order,
                    active: body.active,
                    description: body.description,
                }
            }
        )
        return NextResponse.json({message: 'Creation ajoutée avec succès'}, {status: 200});

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }

}

