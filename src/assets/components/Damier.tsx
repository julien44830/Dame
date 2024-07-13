import Case from "./Case"
import Pions from "./Pions";

function Damier() {
    const cases = Case;
    console.log(typeof cases[1].id)

    const handleDragOver = (ev: React.DragEvent<HTMLDivElement>) => {
        // Empêcher le comportement par défaut pour autoriser le drop
        ev.preventDefault();
    };

    const handleDrop = (ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault();

        const data = ev.dataTransfer.getData("text/plain");
        const draggableElement = document.getElementById(data);
        if (draggableElement) {
            // Ajouter l'élément déplacé à la nouvelle position
            ev.currentTarget.appendChild(draggableElement);
        }
    };

    return (
        <div
            id="damier"
            className="container-damier"
        >
            {cases.map((c) => (
                <div
                    key={c.id}
                    id={c.id}
                    className={c.color ? "case-dark" : ""}
                    onDragOver={c.color ? handleDragOver : undefined}
                    onDrop={handleDrop}
                >
                    {c.hasPawn? <Pions nbId={String(c.idPion)} team={String(c.team)} /> : null}

                    <p>{c.id}</p>
                </div>
            ))}
        </div>
    );
}

export default Damier;