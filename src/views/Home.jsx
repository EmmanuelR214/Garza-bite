import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundEffect from '../components/BackgroundEffect';
import {  ShoppingCartIcon  } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';


function Home() {
    return (
        <>
        <div className="relative">
          <BackgroundEffect />
  
          <section className="relative z-10 min-h-screen flex items-center">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Columna de texto */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center md:text-left space-y-6"
                >
                  <h1 className="text-4xl font-extrabold text-[#3e2a08]">
                    El impulso que tu <span className="text-orange-500">día</span> necesita empieza aquí
                  </h1>
                  <p className='text-start'>
                    Aumenta tu productividad y mejora tu estado de ánimo con un vaso de café por la mañana.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Link
                      to={"/menu"}
                      className='inline-flex items-center bg-[#2e1d06] hover:bg-[#402d07] text-white font-bold rounded-full w-44 h-12 justify-center'
                    >
                      <span>Ordenar ahora</span>
                      <ShoppingCartIcon aria-hidden="true" className="size-6 text-yellow-600 " />
                    </Link>
                  </div>
                </motion.div>
                {/* Columna de imagen */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center md:justify-end"
                >
                  <img
                    src="/logo.svg"
                    alt="Tazas de café"
                    className="max-w-md w-full shadow-lg flex justify-center md:justify-end bg-gradient-to-b from-white to-gray-200 rounded-3xl p-6"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        </div>
  
        <section className="bg-white w-ful  h-screen flex items-center">
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-center text-[#3e2a08] mb-16"
            >
              Descubre lo fácil y rápido que es <span className="text-orange-500">ordenar</span>
            </motion.h2>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { img: '/imagen1.png', title: 'Elige tu producto', text: 'Ordena ahora o selecciona el menú' },
                { img: '/imagen2.png', title: 'Realiza tu pago', text: 'Escoge recoger ahora o selecciona la hora' },
                { img: '/imagen3.png', title: 'Disfruta tu producto', text: 'Disfruta tu producto' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <img src={step.img} alt={step.title} className="h-20 w-20 object-contain" />
                  <h3 className="text-lg font-bold text-[#3e2a08]">{step.title}</h3>
                  <p className="text-gray-600">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        <section className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/fondo.jpg')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center text-center space-y-8 px-4"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Escoge a través de nuestra variedad de productos
            </h2>
            <Link
              to="/menu"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-lg space-x-3"
            >
              <span>Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Link>
          </motion.div>
        </section>
  
        <section className="bg-white w-full flex items-center py-20">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#3e2a08] mb-4">
                ¿Qué ofrecemos?
              </h2>
              <p className="text-gray-600">Confía en nuestra experiencia y servicio al cliente</p>
            </motion.div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {["imagen4.png", "imagen2.png", "imagen5.png", "imagen6.png"].map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center justify-center ${i % 2 === 0 ? 'bg-[#F9C06A6B]' : 'bg-[#F6EBDA]'} p-8 rounded-lg text-center space-y-4 h-60`}
                >
                  <img src={`/${img}`} alt="beneficio" className="h-16 w-16 object-contain" />
                  <h3 className="text-[#3e2a08] font-semibold">
                    {[
                      "Buena calidad",
                      "Atención rápida y amable",
                      "Variedad para todos los gustos",
                      "Precio accesible"
                    ][i]}
                  </h3>
                </motion.div>
              ))}
            </div>
  
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
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
            </motion.div>
          </div>
        </section>
      </>
    )
}

export default Home

/*

        <>
        <div className="relative">
            <BackgroundEffect />
            
            <section className="relative z-10 min-h-screen flex items-center">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

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

            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#3e2a08] mb-16">
                Descubre lo fácil y rápido que es <span className="text-orange-500">ordenar</span>
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                <div className="flex flex-col items-center text-center space-y-4">
                    <img src="/imagen1.png" alt="Elige tu producto" className="h-20 w-20 object-contain" />
                    <h3 className="text-lg font-bold text-[#3e2a08]">Elige tu producto</h3>
                    <p className="text-gray-600">Ordena ahora o selecciona el menú</p>
                </div>


                <div className="flex flex-col items-center text-center space-y-4">
                    <img src="/imagen2.png" alt="Realiza tu pago" className="h-20 w-20 object-contain" />
                    <h3 className="text-lg font-bold text-[#3e2a08]">Realiza tu pago</h3>
                    <p className="text-gray-600">Escoge recoger ahora o selecciona la hora</p>
                </div>


                <div className="flex flex-col items-center text-center space-y-4">
                    <img src="/imagen3.png" alt="Disfruta tu producto" className="h-20 w-20 object-contain" />
                    <h3 className="text-lg font-bold text-[#3e2a08]">Disfruta tu producto</h3>
                    <p className="text-gray-600">Choose delivery service</p>
                </div>
            </div>
            </div>
        </section>
        <section className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/fondo.jpg')" }}>

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-8 px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                Escoge a través de nuestra variedad de productos
                </h2>
                <Link
                to="/menu"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-lg space-x-3"
                >
                    <span>Menu</span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </Link>
            </div>
        </section>
        <section className="bg-white w-full flex items-center py-20">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                

                <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3e2a08] mb-4">
                    ¿Qué ofrecemos?
                </h2>
                <p className="text-gray-600">Confía en nuestra experiencia y servicio al cliente</p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">

                <div className="flex flex-col items-center justify-center bg-[#F9C06A6B] p-8 rounded-lg text-center space-y-4 h-60">
                    <img src="/imagen4.png" alt="Buena calidad" className="h-16 w-16 object-contain" />
                    <h3 className="text-[#3e2a08] font-semibold">Buena calidad</h3>
                </div>


                <div className="flex flex-col items-center justify-center bg-[#F6EBDA] p-8 rounded-lg text-center space-y-4 h-60">
                    <img src="/imagen2.png" alt="Atención rápida y amable" className="h-16 w-16 object-contain" />
                    <h3 className="text-[#3e2a08] font-semibold">Atención rápida y amable</h3>
                </div>


                <div className="flex flex-col items-center justify-center bg-[#F9C06A6B] p-8 rounded-lg text-center space-y-4 h-60">
                    <img src="/imagen5.png" alt="Variedad para todos los gustos" className="h-16 w-16 object-contain" />
                    <h3 className="text-[#3e2a08] font-semibold">Variedad para todos los gustos</h3>
                </div>


                <div className="flex flex-col items-center justify-center bg-[#F6EBDA] p-8 rounded-lg text-center space-y-4 h-60">
                    <img src="/imagen6.png" alt="Precio accesible" className="h-16 w-16 object-contain" />
                    <h3 className="text-[#3e2a08] font-semibold">Precio accesible</h3>
                </div>
                </div>


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

*/