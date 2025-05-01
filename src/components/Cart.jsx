import React, {useContext} from 'react';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom'; // para redireccionar
import { CartContext } from '../Context/ContextStore';

export const ProductCard = ({ nombre, precio, imagen }) => {
    const { agregarAlCarrito, obtenerCantidadProducto } = useContext(CartContext);
    const navigate = useNavigate();
    const handleOrderNow = () => {
        const producto = { nombre, precio, imagen };
        agregarAlCarrito(producto);
        navigate('/finishPayment');
    };
    const handleAddToCart = () => {
        const producto = { nombre, precio, imagen };
        agregarAlCarrito(producto);
    };
    const cantidad = obtenerCantidadProducto(nombre);
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col w-full mx-auto">
            <img src={imagen} alt={nombre} className="rounded-xl object-cover h-40 w-full" />
    
            <div className="flex flex-col flex-grow mt-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-semibold text-[#1f1f1f] truncate">{nombre}</h3>
                <span className="text-orange-500 font-bold">${precio}</span>
            </div>
    
            <div className="flex justify-between items-center mt-auto relative">
                <button
                onClick={handleOrderNow}
                className="bg-[#2e1d06] hover:bg-[#402d07] text-white font-semibold py-2 px-4 rounded-full text-sm"
                >
                Ordenar ahora
                </button>
    
                <div className="relative">
                {cantidad > 0 && (
                    <span className="absolute -top-2 -left-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cantidad}
                    </span>
                )}
                <button
                    onClick={handleAddToCart}
                    className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full"
                >
                    <ShoppingCartIcon className="h-5 w-5" />
                </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export const CartItem = ({ producto }) => {
    const { aumentarCantidad, disminuirCantidad, eliminarProducto } = useContext(CartContext);
    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-md mb-4">
            {/* Imagen */}
            <div className="flex items-center space-x-4 w-1/3">
            <img
                src={producto.imagen}
                alt={producto.nombre}
                className="h-16 w-16 rounded-md object-cover"
            />
            <div>
                <h3 className="text-lg font-semibold text-[#1f1f1f]">{producto.nombre}</h3>
                <p className="text-sm font-bold text-[#1f1f1f]">${producto.precio}</p>
            </div>
            </div>
    
            {/* Controles de cantidad */}
            <div className="flex items-center space-x-2">
            <button
                onClick={() => disminuirCantidad(producto.nombre)}
                className="bg-orange-400 hover:bg-orange-500 text-white rounded-full w-8 h-8 flex justify-center items-center text-xl font-bold cursor-pointer"
            >
                −
            </button>
            <span className="text-lg font-bold text-[#1f1f1f]">{producto.cantidad}</span>
            <button
                onClick={() => aumentarCantidad(producto.nombre)}
                className="bg-orange-400 hover:bg-orange-500 text-white rounded-full w-8 h-8 flex justify-center items-center text-xl font-bold cursor-pointer"
            >
                +
            </button>
            </div>
    
            {/* Botón eliminar */}
            <button
            onClick={() => eliminarProducto(producto.nombre)}
            className="text-gray-700 hover:text-red-500 cursor-pointer"
            >
            <TrashIcon className="h-6 w-6" />
            </button>
        </div>
    );
};

export  const ResumenProducto = ({ imagen, nombre, cantidad }) => {
    return (
        <div className="flex items-center gap-4 bg-white p-4 rounded-md shadow-sm">
            <img
            src={imagen}
            alt={nombre}
            className="w-16 h-16 object-cover rounded-md"
            />
            <div>
            <h3 className="font-semibold text-lg text-[#1f1f1f]">{nombre}</h3>
            <p className="text-sm text-gray-700">Cantidad: {cantidad}</p>
            </div>
        </div>
    );
};

export const OrderCard = ({ orden }) => {
    const { setOrdenes, ordenes, setCompletadas, completadas, setCanceladas, canceladas } = useContext(CartContext);
    const handleActualizarEstado = (nuevoEstado) => {
        const ordenActualizada = { ...orden, estado: nuevoEstado };
        const nuevasPendientes = ordenes.filter(o => o.ticket !== orden.ticket);
        setOrdenes(nuevasPendientes);
        localStorage.setItem('ordenes', JSON.stringify(nuevasPendientes));
        if (nuevoEstado === 'completada') {
            const nuevasCompletadas = [...completadas, ordenActualizada];
            setCompletadas(nuevasCompletadas);
            localStorage.setItem('completadas', JSON.stringify(nuevasCompletadas));
        } else if (nuevoEstado === 'cancelada') {
            const nuevasCanceladas = [...canceladas, ordenActualizada];
            setCanceladas(nuevasCanceladas);
            localStorage.setItem('canceladas', JSON.stringify(nuevasCanceladas));
        }
    };
    
    const textoRecogida = orden.opcion === 'hora'
    ? `Recoge ${orden.horaSeleccionada}`
    : 'Recoge ahora';
    
    return (
        <div className="bg-white shadow-md rounded-lg p-4 space-y-2 text-sm">
            <div className="flex justify-between items-center">
            <span className="font-bold capitalize">{orden.estado}</span>
            <span className="text-orange-500 font-medium">Orden {orden.ticket}</span>
            <span className="font-bold">comentarios:</span>
            </div>
            <div className="text-gray-600 italic text-sm">{textoRecogida}</div>
            <div className="text-gray-900 text-sm">Pedido de: {orden.correo}</div>
            
            <ul className="space-y-1">
            {orden.carrito.map((prod, idx) => (
                <li key={idx} className="flex justify-between">
                <span>{prod.nombre}</span>
                <span className="text-orange-500 font-medium">x{prod.cantidad}</span>
                </li>
            ))}
            </ul>
            
            <p className="text-sm text-gray-800">{orden.comentario || 'Sin comentarios'}</p>
            
            {orden.estado === 'pendiente' && (
            <div className="flex justify-between mt-4">
                <button
                onClick={() => handleActualizarEstado('cancelada')}
                className="bg-red-400 hover:bg-red-500 text-white px-4 py-1 rounded-full font-semibold"
                >
                Cancelar
                </button>
                <button
                onClick={() => handleActualizarEstado('completada')}
                className="bg-green-400 hover:bg-green-500 text-white px-4 py-1 rounded-full font-semibold"
                >
                Completado
                </button>
            </div>
            )}
        </div>
    );
};