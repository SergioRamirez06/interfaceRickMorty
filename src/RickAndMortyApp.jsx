import { useState } from "react";
import { CharacterList } from "./components/contenido/CharacterList"
import { Sidebar } from "./components/sidebar/Sidebar";

export const RickAndMortyApp = () => {

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (personaje) => {
    setSelectedCharacter(personaje);
  };
  
  return (
    <div className="flex h-screen">

      <div className="w-full sm:w-1/2 h-full bg-gray-200">
        <Sidebar onCharacterSelect={handleCharacterSelect} />
      </div>

      <div className="hidden md:block w-2/3 h-full bg-white">
        <CharacterList selectedCharacter={selectedCharacter} />
      </div>
      
    </div>
   
  );
};
