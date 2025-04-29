import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    return (
        <>
        {/*
            This example requires updating your template:

            ```
            <html class="h-full bg-white">
            <body class="h-full">
            ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="/logo.png"
                    className="mx-auto h-20 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Inicia sesión en tu cuenta
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Correo institucional
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Contraseña
                        </label>
                        <div className="text-sm">
                        <a href="#" className="font-semibold text-[#2F2105] hover:text-[#573d0a]">
                            ¿Olvidaste tu contraseña?
                        </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    </div>
                    <div>
                        <input type="button" onClick={() => {Cookies.set("token", "token"), Cookies.set("email", email), navigate("/")}} className="flex w-full justify-center rounded-md bg-[#2F2105] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#573d0a] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" value="Iniciar sesión" />
                    </div>
                </form>
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    ¿No tienes una cuenta?{' '}
                    <a href="#" className="font-semibold text-[#2F2105] hover:text-[#573d0a]">
                    Registrate
                    </a>
                </p>
            </div>
        </div>
        </>
    )
}

export default Login