import React from "react";

// Définition des types des props de Pions
interface PionsProps {
    nbId: string;
    team: string;
}

const Pions: React.FC<PionsProps> = ({ nbId, team }) => {
    const handleDragStart = (ev: React.DragEvent<HTMLDivElement>) => {
        // Définir l'identifiant de l'élément à déplacer
        ev.dataTransfer.setData("text/plain", ev.currentTarget.id);
        console.log(ev.currentTarget.id)
    };

    return (
        <div
            id={"poin"+nbId}
            className={`pions ${team} `}
            draggable
            onDragStart={handleDragStart}
        >
            <p>{nbId}</p>
        </div>
    );
};

export default Pions;
