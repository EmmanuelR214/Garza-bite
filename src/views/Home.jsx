import React from 'react';
import BackgroundEffect from '../components/BackgroundEffect';
import {  ShoppingCartIcon  } from '@heroicons/react/24/outline'


function Home() {
    return (
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
                                <button className="inline-flex items-center bg-[#2e1d06] hover:bg-[#402d07] text-white font-bold rounded-full w-44 h-12 justify-center">
                                    Ordenar ahora
                                    <ShoppingCartIcon aria-hidden="true" className="size-6 text-yellow-600 " />
                                </button>
                            </div>
                        </div>

                        {/* Columna de imagen */}
                        <div className="flex justify-center md:justify-end">
                            <img
                                src="/tazas.png"
                                alt="Tazas de café"
                                className="max-w-md w-full shadow-lg flex justify-center md:justify-end bg-gradient-to-b from-white to-gray-200 rounded-3xl p-6"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home