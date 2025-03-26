'use server'


import {Creation} from "@/types/creation";

export const getCreations = async () : Promise<Creation[]> =>  {
    try {
        const response = await fetch(`${process.env.API_URL_BACK}/api/creation`, {
            next: {tags: ['creations']},
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (e) {
        console.log("Erreur lors de la récupération des créations", e)
        return []
    }

}

export const getCreation = async(id:string) : Promise<Creation | null> =>{
    try {
        const response = await fetch(`${process.env.API_URL_BACK}/api/creation/${id}/`, {
            next: {tags: ['creation']},
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (e) {
        console.log("Erreur lors de la récupération des créations", e)
        return null
    }
}

