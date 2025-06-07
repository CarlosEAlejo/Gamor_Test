import React, { useState, useEffect } from "react";
import "./MainBoard.css";

const MainBoard = ({ games, onAddGame, onRemoveGame, addedGameIds }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredGames, setFilteredGames] = useState(games);
    const [removingIds, setRemovingIds] = useState(new Set());

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredGames(games.filter((g) => !addedGameIds.has(g.id)));
        } else {
            const lowerSearch = searchTerm.toLowerCase();
            setFilteredGames(
                games.filter(
                    (game) =>
                        game.name.toLowerCase().includes(lowerSearch) &&
                        !addedGameIds.has(game.id)
                )
            );
        }
    }, [searchTerm, games, addedGameIds]);

    // Manejar la animación de salida y luego eliminar juego
    const handleRemoveClick = (id) => {
        setRemovingIds((prev) => new Set(prev).add(id));
        // La animación dura 300ms (según CSS), luego se elimina el juego
        setTimeout(() => {
            setRemovingIds((prev) => {
                const copy = new Set(prev);
                copy.delete(id);
                return copy;
            });
            onRemoveGame(id);
        }, 300);
    };

    return (
        <section className="mainboard-section" aria-labelledby="mainboard-heading">
            <div className="mainboard-container">
                <h2 id="mainboard-heading" className="mainboard-header">
                    Buscar juegos
                </h2>

                <div className="search-panel">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Escribe para buscar un juego..."
                        value={searchTerm}
                        aria-label="Buscar juego"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="lists-container">
                    <div
                        className="games-list"
                        aria-live="polite"
                        aria-label="Lista de juegos disponibles"
                    >
                        <h3>Juegos disponibles</h3>
                        {filteredGames.length === 0 && <p>No se encontraron juegos.</p>}
                        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                            {filteredGames.map((game) => (
                                <li key={game.id} className="game-item">
                                    <span className="game-name">{game.name}</span>
                                    <button
                                        className="add-game-button"
                                        aria-label={`Agregar ${game.name}`}
                                        onClick={() => onAddGame(game)}
                                        title="Añadir juego"
                                    >
                                        +
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="added-list"
                        aria-live="polite"
                        aria-label="Lista de juegos agregados"
                    >
                        <h3>Juegos agregados</h3>
                        {addedGameIds.size === 0 ? (
                            <p>No has agregado juegos aún.</p>
                        ) : (
                            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                                {[...addedGameIds].map((id) => {
                                    const game = games.find((g) => g.id === id);
                                    const isRemoving = removingIds.has(id);
                                    return (
                                        <li
                                            key={id}
                                            className={`game-item ${isRemoving ? "exiting" : ""}`}
                                            style={{ fontWeight: "600", color: "var(--color-text-dark)" }}
                                        >
                                            <span>{game ? game.name : "Juego"}</span>
                                            <button
                                                type="button"
                                                className="remove-game-button"
                                                aria-label={`Eliminar ${game ? game.name : "juego"}`}
                                                onClick={() => handleRemoveClick(id)}
                                                title="Eliminar juego"
                                                disabled={isRemoving}
                                            >
                                                &ndash;
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainBoard;
