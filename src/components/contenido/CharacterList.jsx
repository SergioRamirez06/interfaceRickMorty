import React from 'react';
import { CardRickMorty } from './CardRickMorty';

export const CharacterList = ({ selectedCharacter }) => {
  return (
    <div className="p-6">
      {selectedCharacter ? (
        <CardRickMorty 
          personaje={selectedCharacter} 
          />
      ) : (
        <p className="text-gray-500">Selecciona un personaje para ver los detalles.</p>
      )}
    </div>
  );
};

