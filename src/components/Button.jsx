import React from 'react';

export const CategoriaButton = ({ titulo, imagen, onClick }) => {
    return (
        <button
        onClick={onClick}
        className="flex flex-col items-center focus:outline-none hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-transparent hover:border-orange-300 shadow-md">
            <img
            src={imagen}
            alt={titulo}
            className="w-full h-full object-cover"
            />
        </div>
        <p className="mt-2 text-sm font-semibold text-[#3e2a08]">{titulo}</p>
        </button>
    );
}
