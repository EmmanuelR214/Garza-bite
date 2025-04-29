import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/ContextStore'
import { CartItem } from '../components/Cart'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate, Link } from 'react-router-dom';


function Car() {
    const { carrito } = useContext(CartContext);
    const [comentario, setComentario] = useState('');
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    // Calcular el total dinámicamente
    useEffect(() => {
        const nuevoTotal = carrito.reduce(
            (sum, producto) => sum + producto.precio * producto.cantidad,
        0
        );
        setTotal(nuevoTotal);
    }, [carrito]);
    const handleSiguiente = () => {
        // Aquí podrías guardar el comentario en localStorage si es necesario
        localStorage.setItem('comentarioOrden', comentario);
        navigate('/finishPayment'); // Redirigir a siguiente pantalla
    };
    return (
        <div className="pt-24 px-4 sm:px-8 lg:px-16 bg-white min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-[#1f1f1f]">Carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Listado de productos */}
            <div className="lg:col-span-2 lg:h-[60vh] overflow-y-auto space-y-4 pr-2">
            {carrito.map((producto, idx) => (
                <CartItem key={idx} producto={producto} />
            ))}
            </div>

            {/* Comentario + total + botón */}
            <div className="flex flex-col justify-between h-auto lg:h-[60vh]">
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                Agrega un comentario a tu orden
                </label>
                <textarea
                placeholder="Ej: Sin cilantro"
                onChange={(e) => setComentario(e.target.value)}
                className="w-full border rounded-md p-3 h-28 resize-none"
                />
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-evenly gap-4">
                <p className="text-lg font-medium text-center md:text-right">
                Total: <span className="font-bold text-[#1f1f1f]">${total}</span>
                </p>
                <button onClick={handleSiguiente} className="flex items-center justify-center bg-[#2e1d06] hover:bg-[#402d07] text-white font-semibold px-6 py-3 rounded-full w-full md:w-auto">
                Siguiente
                <span className="ml-3">➜</span>
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Car