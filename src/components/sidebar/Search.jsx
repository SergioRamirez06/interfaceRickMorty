import { FaSearch } from 'react-icons/fa';
import { HiAdjustmentsVertical } from 'react-icons/hi2';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const Search = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const { search, onInputChange } = useForm('')

  const handleFilterClick = () => {
    setShowFilterOptions((prev) => !prev);
  };
  const characters = ['All', 'Starreed', 'Others'];
  const spices = ['All', 'Human', 'Alien'];

  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">Rick and Morty list</h1>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search or filter results"
          className="w-full py-2 pl-10 pr-10 bg-gray-200 rounded-lg focus:outline-none placeholder-gray-500"
          name='search'
          value={ search }
          onChange={ onInputChange }
        />
        <FaSearch className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <HiAdjustmentsVertical
            className="w-8 h-8 text-purple-700 border rounded-md p-1 cursor-pointer transition duration-150 ease-in-out hover:bg-purple-300 "
            onClick={handleFilterClick}
          />
        </div>
        {showFilterOptions && (
          <div  className="absolute left-0 right-0 mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-300 z-10">
              <ul className="py-2">
                  <li className="px-4 py-2 text-gray-400 font-semibold m-1">Character</li>
                  <div className="flex flex-wrap justify-start w-full">
                    {characters.map(character => (
                      <button 
                        key={character} 
                        className="flex-grow w-1/4 mx-1 px-2 py-1 text-black border border-gray-200 rounded hover:bg-purple-400"
                        >
                        {character}
                      </button>
                    ))}
                  </div>
                  <li className="px-4 py-2 text-gray-400 font-semibold m-1">Spacie</li>
                  <div className="flex flex-wrap justify-start w-full">
                    {spices.map(character => (
                      <button 
                        key={character} 
                        className="flex-grow w-1/4 mx-1 px-2 py-1 text-black border border-gray-200 rounded hover:bg-purple-400">
                        {character}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-center py-2">
                    <button className="w-[98%] py-2 bg-purple-900 text-white rounded-lg mx-auto m-2">
                      Filter
                    </button>
                  </div>
              </ul>
          </div>
        )}
      </div>
    </>
  );
};
