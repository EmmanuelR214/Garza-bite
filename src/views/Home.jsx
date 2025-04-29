import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundEffect from '../components/BackgroundEffect';
import {  ShoppingCartIcon  } from '@heroicons/react/24/outline'


function Home() {
    return (
        <>
        <div className="relative">
            <BackgroundEffect />
            
            <section className="relative z-10 min-h-screen flex items-center">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                        {/* Columna de texto */}
                        <div className="text-center md:text-left space-y-6">
                            <h1 className="text-4xl font-extrabold text-[#3e2a08] ">
                                El impulso que tu <span className="text-orange-500">día</span> necesita empieza aquí
                            </h1>
                            <p className='text-start'>
                                Aumenta tu productividad y mejora tu estado de ánimo con un vaso de café por la mañana.
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <Link to={"/menu"}  className='inline-flex items-center bg-[#2e1d06] hover:bg-[#402d07] text-white font-bold rounded-full w-44 h-12 justify-center'>
                                    <span>Ordenar ahora</span>
                                    <ShoppingCartIcon aria-hidden="true" className="size-6 text-yellow-600 " />
                                </Link>
                            </div>
                        </div>
                        {/* Columna de imagen */}
                        <div className="flex justify-center md:justify-end">
                            <img
                                src="/logo.svg"
                                alt="Tazas de café"
                                className="max-w-md w-full shadow-lg flex justify-center md:justify-end bg-gradient-to-b from-white to-gray-200 rounded-3xl p-6"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section className="bg-white w-ful  h-[90vh] flex items-center">
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#3e2a08] mb-16">
                Descubre lo fácil y rápido que es <span className="text-orange-500">ordenar</span>
            </h2>

            {/* Grid de pasos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Paso 1 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <img src="/imagen1.png" alt="Elige tu producto" className="h-20 w-20 object-contain" />
                    <h3 className="text-lg font-bold text-[#3e2a08]">Elige tu producto</h3>
                    <p className="text-gray-600">Ordena ahora o selecciona el menú</p>
                </div>

                {/* Paso 2 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <img src="/imagen2.png" alt="Realiza tu pago" className="h-20 w-20 object-contain" />
                    <h3 className="text-lg font-bold text-[#3e2a08]">Realiza tu pago</h3>
                    <p className="text-gray-600">Escoge recoger ahora o selecciona la hora</p>
                </div>

                {/* Paso 3 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <img src="/imagen3.png" alt="Disfruta tu producto" className="h-20 w-20 object-contain" />
                    <h3 className="text-lg font-bold text-[#3e2a08]">Disfruta tu producto</h3>
                    <p className="text-gray-600">Choose delivery service</p>
                </div>
            </div>
            </div>
        </section>
        <section className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/fondo.jpg')" }}>
            {/* Capa oscura encima del fondo */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-8 px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                Escoge a través de nuestra variedad de productos
                </h2>
                <Link
                to="/menu"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-lg space-x-3"
                >
                    <span>Menu</span>
                    {/* Ícono de "menú" */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </Link>
            </div>
        </section>
        <section className="bg-white w-full flex items-center py-20">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Títulos */}
                <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3e2a08] mb-4">
                    ¿Qué ofrecemos?
                </h2>
                <p className="text-gray-600">Confía en nuestra experiencia y servicio al cliente</p>
                </div>

                {/* Grid de beneficios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {/* Beneficio 1 */}
                <div className="flex flex-col items-center justify-center bg-[#F9C06A6B] p-8 rounded-lg text-center space-y-4 h-60">
                    <img src="/imagen4.png" alt="Buena calidad" className="h-16 w-16 object-contain" />
                    <h3 className="text-[#3e2a08] font-semibold">Buena calidad</h3>
                </div>

                {/* Beneficio 2 */}
                <div className="flex flex-col items-center justify-center bg-[#F6EBDA] p-8 rounded-lg text-center space-y-4 h-60">
                    <img src="/imagen2.png" alt="Atención rápida y amable" className="h-16 w-16 object-contain" />
                    <h3 className="text-[#3e2a08] font-semibold">Atención rápida y amable</h3>
                </div>

                {/* Beneficio 3 */}
                <div className="flex flex-col items-center justify-center bg-[#F9C06A6B] p-8 rounded-lg text-center space-y-4 h-60">
                    <img src="/imagen5.png" alt="Variedad para todos los gustos" className="h-16 w-16 object-contain" />
                    <h3 className="text-[#3e2a08] font-semibold">Variedad para todos los gustos</h3>
                </div>

                {/* Beneficio 4 */}
                <div className="flex flex-col items-center justify-center bg-[#F6EBDA] p-8 rounded-lg text-center space-y-4 h-60">
                    <img src="/imagen6.png" alt="Precio accesible" className="h-16 w-16 object-contain" />
                    <h3 className="text-[#3e2a08] font-semibold">Precio accesible</h3>
                </div>
                </div>

                {/* Llamado a la acción */}
                <div className="text-center space-y-8">
                <h2 className="text-2xl md:text-4xl font-extrabold text-orange-500">
                    Realiza tu pedido hoy
                </h2>

                <Link
                    to="/menu"
                    className="inline-flex items-center bg-[#2e1d06] hover:bg-[#402d07] text-white font-semibold py-3 px-6 rounded-full text-lg space-x-3"
                >
                    <span>Ordenar ahora</span>
                    <ShoppingCartIcon aria-hidden="true" className="size-6 text-yellow-600" />
                </Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home