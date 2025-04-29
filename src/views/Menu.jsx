import React, { useState } from 'react'
import { ProductCard } from '../components/Cart';
import { CategoriaButton } from '../components/Button';
import { categorias, productos } from '../assets/Productos';

function Menu ()  {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    
    const productosFiltrados = categoriaSeleccionada
    ? productos.filter((p) => p.categoria === categoriaSeleccionada)
    : productos;
    
    return (
        <section className="bg-white min-h-screen pt-28 px-4">
            <div className="max-w-7xl mx-auto space-y-10">
            
            {/* Título principal */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#3e2a08]">
                Menu especial para <span className="text-orange-500">ti</span>
            </h1>
    
            {/* Categorías */}
            <div className="space-y-3 ">
                <h2 className="text-lg font-semibold text-[#3e2a08]">Categorías</h2>
                <div className="flex flex-wrap justify-evenly gap-6 ">
                {categorias.map((cat, index) => (
                    <CategoriaButton
                    key={index}
                    titulo={cat.titulo}
                    imagen={cat.imagen}
                    onClick={() =>
                        setCategoriaSeleccionada(
                        categoriaSeleccionada === cat.titulo ? null : cat.titulo
                        )
                    }
                    />
                ))}
                </div>
            </div>
    
            {/* Productos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-20 space-y-4">
                {productosFiltrados.map((item, index) => (
                <ProductCard
                    key={index}
                    nombre={item.nombre}
                    precio={item.precio}
                    imagen={item.imagen}
                />
                ))}
            </div>
            </div>
        </section>
    )
}

export default Menu