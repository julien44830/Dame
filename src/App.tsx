import Damier from "./assets/components/Damier";
import "./assets/styles/Damier.css";

function App() {
    return (
        <main>
            <h1>Jeu de Dame</h1>
            <section className="game-zone">
                <Damier />
            </section>
        </main>
    );
}

export default App;
