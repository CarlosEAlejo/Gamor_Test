import React, { useState } from 'react';

const MainBoard = ({ games, onAddGame }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredGames, setFilteredGames] = useState([]);

    const handleSearch = () => {
        const results = games.filter(game => game.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredGames(results);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Buscar juego..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button onClick={handleSearch}>Buscar</button>
            <div>
                {filteredGames.map(game => (
                    <div key={game.id}>
                        <h3>{game.name}</h3>
                        <button onClick={() => onAddGame(game)}>+</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainBoard;
