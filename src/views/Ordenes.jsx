import React,{useContext, useState, useEffect} from 'react'
import { CartContext } from '../Context/ContextStore'
import { OrderCard } from '../components/Cart'
function Ordenes() {
    const { ordenes, completadas, canceladas } = useContext(CartContext);
    const [filtro, setFiltro] = useState('hoy');
    const [ordenesFiltradas, setOrdenesFiltradas] = useState([]);
    const [pendientesHoy, setPendientesHoy] = useState([]);
    const [completadasHoy, setCompletadasHoy] = useState([]);
    
    useEffect(() => {
        const hoy = new Date().toISOString().split('T')[0];
    
        if (filtro === 'hoy') {
            const pendientes = ordenes.filter((orden) => orden.fecha.startsWith(hoy));
            const completadasDelDia = completadas.filter((orden) => orden.fecha.startsWith(hoy));
    
            setPendientesHoy(pendientes);
            setCompletadasHoy(completadasDelDia);
            setOrdenesFiltradas([]); // vacío, no se usa en este filtro
        } else if (filtro === 'cancelados') {
            setOrdenesFiltradas(canceladas);
            setPendientesHoy([]);
            setCompletadasHoy([]);
        } else if (filtro === 'historial') {
            setOrdenesFiltradas([...ordenes, ...completadas, ...canceladas]);
            setPendientesHoy([]);
            setCompletadasHoy([]);
        }
    }, [filtro, ordenes, completadas, canceladas]);
    return (
        <div className="pt-24 px-4 sm:px-8 lg:px-16 bg-white min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-[#1f1f1f]">Órdenes</h2>
    
            {/* Filtro tipo nav */}
            <div className="flex gap-4 mb-6 text-sm font-semibold">
            <button
                onClick={() => setFiltro('hoy')}
                className={`px-4 py-2 rounded-full ${filtro === 'hoy' ? 'bg-orange-400 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
                Pedidos de hoy
            </button>
            <button
                onClick={() => setFiltro('cancelados')}
                className={`px-4 py-2 rounded-full ${filtro === 'cancelados' ? 'bg-orange-400 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
                Pedidos cancelados
            </button>
            <button
                onClick={() => setFiltro('historial')}
                className={`px-4 py-2 rounded-full ${filtro === 'historial' ? 'bg-orange-400 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
                Historial de pedidos
            </button>
            </div>
    
            {/* Renderizado condicional */}
            {filtro === 'hoy' ? (
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10">
                {/* Órdenes completadas */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Órdenes listas</h3>
                    {completadasHoy.length === 0 ? (
                    <p className="text-sm text-gray-500">No hay órdenes completadas hoy.</p>
                    ) : (
                    completadasHoy.map((orden, idx) => <OrderCard key={idx} orden={orden} />)
                    )}
                </div>

                {/* Órdenes pendientes */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Pendientes</h3>
                    {pendientesHoy.length === 0 ? (
                    <p className="text-sm text-gray-500">No hay órdenes pendientes hoy.</p>
                    ) : (
                    pendientesHoy.map((orden, idx) => <OrderCard key={idx} orden={orden} />)
                    )}
                </div>
                </div>
            ) : (
            <div className="space-y-6">
                {ordenesFiltradas.length === 0 ? (
                <p className="text-sm text-gray-500">No hay órdenes para mostrar.</p>
                ) : (
                ordenesFiltradas.map((orden, idx) => (
                    <OrderCard key={idx} orden={orden} />
                ))
                )}
            </div>
            )}
        </div>
    )
}

export default Ordenes