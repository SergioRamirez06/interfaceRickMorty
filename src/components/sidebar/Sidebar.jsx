import { useState } from 'react';
import { personajesRickAndMorty } from '../../data/rickAndMorty';
import { CharactersList, Search, StarredCharactersList } from '../sidebar/index';

export const Sidebar = ({ onCharacterSelect }) => {
    const [starredCharacters, setStarredCharacters] = useState([]);

    const handleStarClick = (personaje) => {
        setStarredCharacters((prev) =>
            prev.some(star => star.id === personaje.id) 
                ? prev.filter(star => star.id !== personaje.id) 
                : [...prev, personaje]
        );
    };

    const filteredCharacters = personajesRickAndMorty.filter((personaje) => 
        !starredCharacters.some((star) => star.id === personaje.id)
    );

    return (
        <div className="h-full w-full bg-gray-100 text-black flex flex-col p-6">
            <Search />

            <StarredCharactersList
                starredCharacters={starredCharacters}
                onStarClick={handleStarClick}
                onCharacterSelect={onCharacterSelect}
            />

            <CharactersList 
                personajes={filteredCharacters}
                onStarClick={handleStarClick} 
                onCharacterSelect={onCharacterSelect}
            />
        </div>
    );
};
