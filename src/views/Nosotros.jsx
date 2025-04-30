import React from 'react'


function Nosotros() {
    return (
        <div className="pt-24 px-6 sm:px-10 md:px-16 lg:px-24 min-h-screen bg-white text-[#1f1f1f]">
        <h1 className="text-3xl font-bold mb-6 text-center">Nosotros</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-justify">
              Bienvenidos a la cafetería oficial de la <strong>Preparatoria No. 5 de Ixtlahuaco</strong>,
              perteneciente a la Universidad Autónoma del Estado de Hidalgo (UAEH). Nos enorgullece brindar
              un servicio de alimentos de calidad, con enfoque en la higiene, nutrición y atención eficiente
              para estudiantes, docentes y personal administrativo.
            </p>
            <p className="text-base leading-relaxed text-justify">
              Con esta aplicación web, facilitamos la visualización del menú, el pedido anticipado y
              reducimos el tiempo de espera durante los recesos escolares.
            </p>
          </div>
  
          <div className="grid grid-cols-2 gap-3">
            <img src="/uaeh.jpeg" alt="cafetería 1" className="rounded-xl h-40 object-cover w-full" />
            <img src="/uaeh1.webp" alt="cafetería 2" className="rounded-xl h-40 object-cover w-full" />
            <img src="/uaeh2.webp" alt="cafetería 3" className="rounded-xl h-40 object-cover w-full col-span-2" />
          </div>
        </div>
  
        <div className="bg-[#fdf4eb] p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-3">¿Por qué usar esta aplicación?</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Ordena con anticipación y evita filas.</li>
            <li>Optimiza la preparación y reduce desperdicios.</li>
            <li>Controla tus pedidos con mayor facilidad.</li>
            <li>Consulta precios y disponibilidad desde cualquier lugar.</li>
            <li>Mejora la experiencia escolar a través de la tecnología.</li>
          </ul>
        </div>
  
        <p className="mt-10 text-base leading-relaxed text-justify">
          Esta iniciativa busca alinear la innovación tecnológica con las necesidades cotidianas de nuestra comunidad educativa,
          promoviendo un ambiente más organizado, ágil y moderno en la preparatoria.
        </p>
  
      </div>
    )
}

export default Nosotros