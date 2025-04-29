import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function ConfirmPay() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center pt-24">
        <CheckCircleIcon className="w-20 h-20 text-green-500 mb-6" />
        <h1 className="text-2xl font-bold text-[#1f1f1f] mb-2">¡Gracias por tu pedido!</h1>
        <p className="text-gray-600 text-sm mb-6">
          Tu pedido ha sido recibido y lo estamos procesando.
        </p>
        <Link
          to="/"
          className="bg-[#2e1d06] hover:bg-[#402d07] text-white font-semibold px-6 py-3 rounded-full text-sm"
        >
          Volver al inicio
        </Link>
      </div>    )
}

export default ConfirmPay