// app/api/upload/route.ts
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

const s3 = new S3Client({
    region: "eu-west-3",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

export async function POST(req: Request) {
    const session = await auth();
    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const formData = await req.formData();
        const file = formData.get("coverImage") as File;
        const title = formData.get("title") as string;

        if (!file) {
            return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
        }

        const extension = file.name.split(".").pop();
        const fileName = `${title}-${Date.now()}.${extension}`;
        const bufferedImage = Buffer.from(await file.arrayBuffer());

        await s3.send(
            new PutObjectCommand({
                Bucket: "staub-heaven-portfolio",
                Key: `images/${fileName}`,
                Body: bufferedImage,
                ContentType: file.type,
                ACL: "public-read",
            })
        );

        const url = `https://staub-heaven-portfolio.s3.eu-west-3.amazonaws.com/images/${fileName}`;
        return NextResponse.json({ url }, { status: 200 });
    } catch (error) {
        console.error("Erreur lors de l'upload :", error);
        return NextResponse.json({ error: "Erreur lors de l'upload" }, { status: 500 });
    }
}
