
export const CardRickMorty = ({ personaje }) => {
    return (
      <div className="max-w-sm rounded bg-white m-4">
        <div className="flex flex-col items-start py-4">
          <div className="relative">
            <img 
              src={personaje.imagen} 
              alt={personaje.nombre} 
              className="h-36 w-auto border rounded-full" 
            />
            <img 
              src="../src/assets/corazon.jpg" 
              className="absolute right-0 bottom-0 h-10 w-auto border rounded-full"
            />
          </div>
          <h1 className="font-bold text-xl mt-2">{ personaje.nombre }</h1>
        </div>
  
        <div className="px-2 py-4">
          <h6  className="font-bold text-m mt-2">Specie</h6>
          <h4 className="text-gray-700 text-base mb-2">{ personaje.especie }</h4>
          <hr className="border-t border-gray-300" />
          <h6  className="font-bold text-m mt-2">Status</h6>
          <p className="text-gray-600 text-sm mb-2">{ personaje.estatus }</p>
          <hr className="border-t border-gray-300" />
          <h6  className="font-bold text-m mt-2">Occupation</h6>
          <p className="text-gray-600 text-sm mb-2">{ personaje.ocupacion }</p> 
        </div>
      </div>
    );
  };