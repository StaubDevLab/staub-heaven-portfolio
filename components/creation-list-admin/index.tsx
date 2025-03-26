

import {Creation} from "@/types/creation";

import CreationCard from "@/components/creation-card";

interface CreationsListProps {
    creations: Creation[];
    handleDelete : (id: string) => void;
    onSuccessUpdated : () => void;
}
export default function CreationsList({creations, handleDelete, onSuccessUpdated}: CreationsListProps) {



    if (creations.length === 0) {
        return <p className="text-center text-muted-foreground">Aucune création trouvée.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {creations.map((creation) => (
                <CreationCard handleCreationUpdated={onSuccessUpdated} key={creation.id} {...creation} handleDelete={handleDelete}/>
            ))}
        </div>
    );
}
