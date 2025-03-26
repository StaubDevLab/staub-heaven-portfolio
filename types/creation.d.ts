import {Image} from "@/types/image";

export type Creation = {
    id: string;
    title: string;
    coverImage: string;
    images: Image[];
    order: number;
    active: boolean;
    description: string;
}
