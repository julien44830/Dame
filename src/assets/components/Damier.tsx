function Damier() {
    const handleDragOver = (ev: React.DragEvent<HTMLDivElement>) => {
        // Empêcher le comportement par défaut pour autoriser le drop
        ev.preventDefault();
    };

    const handleDrop = (ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault();
        // Obtenir l'identifiant de l'élément déplacé
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
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                id="1"
                className="1"
            >
                <p>1</p>
            </div>
            <div
                // onDragOver={handleDragOver}
                // onDrop={handleDrop}
                id="2"
                className="2"
            >
                <p>2</p>
            </div>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                id="3"
                className="3"
            >
                <p>3</p>
            </div>
            <div
                // onDragOver={handleDragOver}
                // onDrop={handleDrop}
                id="4"
                className="4"
            >
                <p>4</p>
            </div>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                id="5"
                className="5"
            >
                <p>5</p>
            </div>
            <div
                id="6"
                className="6"
            >
                <p>6</p>
            </div>
            <div
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                id="7"
                className="7"
            >
                <p>7</p>
            </div>
            <div
                id="8"
                className="8"
            >
                <p>8</p>
            </div>
            <div
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                id="9"
                className="9"
            >
                <p>9</p>
            </div>
        </div>
    );
}

export default Damier;
