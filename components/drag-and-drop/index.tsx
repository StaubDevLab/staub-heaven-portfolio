import React from "react";
import { FileUploader } from "react-drag-drop-files";
import Image from "next/image";

const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

interface DragDropProps {
    onChange: (file: File | null) => void;
    value: File | null;
}

export default function DragDrop({ onChange, value }: DragDropProps) {
    const handleChange = (file: File) => {
        onChange(file);
    };

    const handleRemove = () => {
        onChange(null);
    };

    return (
        <>
            <FileUploader
                handleChange={handleChange}
                name="coverImage"
                types={fileTypes}
                uploadedLabel={value?.name}
                label={"Sélectionner un fichier ou glisser-déposer ici"}
            />
            {value && (
                <div className="flex items-center gap-2 mt-2">
                    <Image
                        width={100}
                        height={100}
                        src={URL.createObjectURL(value)}
                        alt="File"
                        className="h-20 w-20 object-cover rounded-md"
                    />
                    <button
                        onClick={handleRemove}
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                        Supprimer
                    </button>
                </div>
            )}
        </>
    );
}
