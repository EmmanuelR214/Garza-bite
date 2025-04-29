import React, {useContext} from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom'; // para redireccionar
import { CartContext } from '../Context/ContextStore';

export const ProductCard = ({ nombre, precio, imagen }) => {
    const { agregarAlCarrito } = useContext(CartContext);
    const navigate = useNavigate();

    const handleOrderNow = () => {
        const producto = { nombre, precio, imagen };
        localStorage.setItem('productoOrdenar', JSON.stringify(producto));
        navigate('/finishPayment');
    };
    
    const handleAddToCart = () => {
        const producto = { nombre, precio, imagen };
        agregarAlCarrito(producto);
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col w-full  mx-auto">
        {/* Imagen */}
        <img
            src={imagen}
            alt={nombre}
            className="rounded-xl object-cover h-40 w-full"
        />

        {/* Contenido */}
        <div className="flex flex-col flex-grow mt-4">
            {/* Nombre y precio */}
            <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-[#1f1f1f] truncate">{nombre}</h3>
            <span className="text-orange-500 font-bold">${precio}</span>
            </div>

            {/* Botones */}
            <div className="flex justify-between items-center mt-auto">
            <button
                onClick={handleOrderNow}
                className="bg-[#2e1d06] hover:bg-[#402d07] text-white font-semibold py-2 px-4 rounded-full text-sm cursor-pointer"
            >
                Ordenar ahora
            </button>
            <button
                onClick={handleAddToCart}
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full cursor-pointer"
            >
                <ShoppingCartIcon className="h-5 w-5" />
            </button>
            </div>
        </div>
        </div>
    );
};
