import React, { useContext, useState, useEffect } from 'react';
import { ResumenProducto } from '../components/Cart';
import { CartContext } from '../Context/ContextStore';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function FinishPayment() {
  const { carrito, vaciarCarrito, setOrdenes, ordenes } = useContext(CartContext);
  const [opcion, setOpcion] = useState('rapido');
  const [horaSeleccionada, setHoraSeleccionada] = useState('');
  const [ticket, setTicket] = useState('');
  const navigate = useNavigate();

  const opcionesHora = Array.from({ length: 13 }, (_, i) => {
    const hora = 7 + i;
    return `${hora}:00 ${hora < 12 ? 'AM' : 'PM'}`;
  });

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  // Generar ticket random
  const generarTicket = () => {
    const num = Math.floor(Math.random() * 90000) + 10000;
    return `#${num}`;
  };

  useEffect(() => {
    setTicket(generarTicket());
  }, []);

  const finalizarOrden = () => {
    const cookies = document.cookie;
    const emailMatch = cookies.match(/email=([^;]+)/);
    const correo = emailMatch ? decodeURIComponent(emailMatch[1]) : 'usuario@desconocido.com';

    const comentario = localStorage.getItem('comentarioOrden') || '';
    console.log(horaSeleccionada)
    const nuevaOrden = {
      opcion,
      horaSeleccionada,
      ticket,
      correo,
      carrito,
      total,
      comentario,
      estado: 'pendiente',
      fecha: new Date().toISOString(),
    };

    const nuevasOrdenes = [...ordenes, nuevaOrden];
    setOrdenes(nuevasOrdenes);
    localStorage.setItem('ordenes', JSON.stringify(nuevasOrdenes));

    // Limpiar carrito y comentario
    vaciarCarrito();
    localStorage.removeItem('comentarioOrden');

    // Redirigir
    navigate('/confirmPay', { state: { fromFinish: true } });

  };

  return (
    <div className="pt-24 px-4 sm:px-10 md:px-16 lg:px-24 bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-[#1f1f1f] mb-6">Detalle de orden</h2>

      <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
        <span>Orden <span className="text-orange-500 font-medium">{ticket}</span></span>
      </div>

      {/* Lista productos */}
      <div className="space-y-4 mb-8">
        {carrito.map((producto, idx) => (
          <ResumenProducto
            key={idx}
            imagen={producto.imagen}
            nombre={producto.nombre}
            cantidad={producto.cantidad}
          />
        ))}
      </div>

      {/* Total */}
      <div className="text-base font-medium text-[#1f1f1f] mb-10">
        Total: <span className="font-bold">${total}</span>
      </div>

      {/* Opción de recolección */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Seleccione la opción para recoger en tienda
        </label>
        <div className="flex flex-wrap gap-4 mb-4">
          <button
            onClick={() => setOpcion('rapido')}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
              opcion === 'rapido'
                ? 'bg-orange-400 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Recoger lo antes posible
          </button>

          <button
            onClick={() => setOpcion('hora')}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
              opcion === 'hora'
                ? 'bg-orange-400 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Escoger una hora
          </button>
        </div>

        {opcion === 'rapido' && (
          <div className="flex items-center text-gray-500 text-xs">
            <InformationCircleIcon className="h-4 w-4 mr-1" />
            Trabajamos lo más eficaz para preparar su orden, considere 10 minutos para pasar a recogerla a la tienda.
          </div>
        )}

{opcion === 'hora' && (
        <div className="mt-2">
          <label className="text-sm font-medium mb-1 block">Seleccionar hora</label>
          <select
            className="w-full border text-sm rounded-md px-4 py-2 text-gray-700"
            value={horaSeleccionada}
            onChange={(e) => setHoraSeleccionada(e.target.value)} // <- Aquí se guarda la hora
          >
            <option value="" disabled>Escoge una hora</option>
            {opcionesHora.map((hora) => (
              <option key={hora} value={hora}>
                {hora}
              </option>
            ))}
          </select>
        </div>
      )}
      </div>

      {/* Botón Finalizar */}
      <div className="flex justify-center items-center mt-10 h-20">
        <button
          onClick={finalizarOrden}
          className="bg-[#2e1d06] hover:bg-[#402d07] text-white font-semibold px-8 py-3 rounded-full text-sm flex items-center gap-2"
        >
          Finalizar Orden <span className="text-xl">➜</span>
        </button>
      </div>
    </div>
  );
}

export default FinishPayment;

