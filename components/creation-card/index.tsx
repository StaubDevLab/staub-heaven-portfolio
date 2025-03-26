"use client"
import React, {useState} from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Image as ImageType} from "@/types/image";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import DeleteBtn from "@/components/delete-btn";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import CreationUpdateForm from "@/components/creation-update-form";
interface CreationCardProps {
    id:string
    title:string
    coverImage:string
    description:string
    images:ImageType[]
    handleDelete: (id: string) => void;
    handleCreationUpdated: () => void;
}
const CreationCard = ({id, title, coverImage, description, images, handleDelete,handleCreationUpdated} : CreationCardProps) => {
    const [open, setOpen] = useState(false)
    const onSuccessUpdated = () => {
        handleCreationUpdated()
        setOpen(false)
    }
    return (
        <Card key={id} className="flex flex-col">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                {coverImage ? (
                    <Image
                        src={coverImage}
                        alt={title}
                        width={300}
                        height={200}
                        className="object-cover rounded-md w-full h-40"
                    />
                ) : (
                    <div className="bg-muted h-40 rounded-md flex items-center justify-center">
                        <span className="text-muted-foreground">Pas d&apos;image</span>
                    </div>
                )}
                {description && (
                    <p className="mt-2 text-sm text-muted-foreground truncate">{description}</p>
                )}
                {images?.length > 0 && (
                    <div className="mt-2 flex gap-2 overflow-x-auto">
                        {images.map((img) => (
                            <Image
                                key={img.id}
                                src={img.url}
                                alt="Image associée"
                                width={100}
                                height={100}
                                className="object-cover rounded-md h-20 w-20"
                            />
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex justify-between">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button>Modifier</Button>
                    </SheetTrigger>
                    <SheetContent className={"p-4"}>
                        <SheetHeader>
                            <SheetTitle>Modifier la création {title}</SheetTitle>
                        </SheetHeader>
                        <div className="mt-4">
                            <CreationUpdateForm onSuccess={onSuccessUpdated} creationId={id} />
                        </div>
                    </SheetContent>
                </Sheet>
                <DeleteBtn creationId={id} onDelete={handleDelete}/>
            </CardFooter>
        </Card>
    );
};

export default CreationCard;
