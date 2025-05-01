import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaWhatsapp, FaGoogle } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#F6EBDA] text-[##402d07] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Parte superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start space-y-4 border-e-0 md:border-e-2 border-[#e2cfc2]">
            <img src="/logo.png" alt="Logo Garzas" className="h-24 w-auto" />
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-semibold text-lg">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://www.uaeh.edu.mx/campus/preparatoria5/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
                <FaGoogle />
              </a>
              <a href="https://maps.app.goo.gl/LRDkef4tFdRTToqDA" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
                <FaLocationArrow />
              </a>
              <a href="https://wa.me/7711942488" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
                <FaWhatsapp />
              </a>
            </div>
          </div>

        </div>

        {/* Línea divisora */}
        <div className="border-t border-[#e2cfc2] pt-6">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Garzas Café. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
