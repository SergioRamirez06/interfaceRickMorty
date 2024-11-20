
export const StarredCharactersList = ({ starredCharacters, onCharacterSelect, onStarClick }) => {
    return (
        <div>
            <h1 className="text-xl font-bold text-black">Starred Characters ({starredCharacters.length})</h1>
            <div className="flex flex-col gap-4">
                {starredCharacters.map((personaje) => (
                    <div 
                        key={personaje.id} 
                        className="bg-white p-4 rounded-lg flex items-center justify-between hover:bg-purple-100 transition-colors duration-300 cursor-pointer" // Añadido cursor-pointer
                        onClick={() => onCharacterSelect(personaje)} // Hacer clic en toda la tarjeta
                    >
                        <img
                            src={personaje.imagen}
                            alt={personaje.nombre}
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                            <h2 className="text-lg font-semibold text-black">{personaje.nombre}</h2>
                            <p className="text-sm text-gray-400">{personaje.especie}</p>
                        </div>
                        <button 
                            className="text-green-400 hover:text-green-500" 
                            onClick={(e) => { 
                                e.stopPropagation(); 
                                onStarClick(personaje);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
