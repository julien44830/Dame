function Pionts() {
    const handleDragStart = (ev: React.DragEvent<HTMLDivElement>) => {
        // Définir l'identifiant de l'élément à déplacer
        ev.dataTransfer.setData("text/plain", ev.currentTarget.id);
    };
    return (
        <>
            <div
                id="piont1"
                className="points a"
                draggable
                onDragStart={handleDragStart}
            >
                <p>1</p>
            </div>
            <div
                id="piont2"
                className="points b"
                draggable
                onDragStart={handleDragStart}
            >
                <p>2</p>
            </div>
        </>
    );
}

export default Pionts;
