import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';



  function Registro() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = () => {
      if (password !== confirm) {
        setError('Las contraseñas no coinciden');
        return;
      }
      Cookies.set('email', email);
      Cookies.set("token", "token")
      navigate('/');
    };
  
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src="/logo.png" className="mx-auto h-20 w-auto" alt="logo" />
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Crear cuenta</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Correo institucional</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full bg-white rounded-md px-3 py-2 border border-gray-300 focus:outline-[#2F2105]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full bg-white rounded-md px-3 py-2 border border-gray-300 focus:outline-[#2F2105]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
              <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required className="mt-1 block w-full bg-white rounded-md px-3 py-2 border border-gray-300 focus:outline-[#2F2105]" />
            </div>
            {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
            <button type="button" onClick={handleSubmit} className="w-full bg-[#2F2105] text-white font-semibold py-2 rounded-md hover:bg-[#573d0a]">
              Registrarse
            </button>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Ya tienes una cuenta?{' '}
                    <Link to="/login" className="font-semibold text-[#2F2105] hover:text-[#573d0a]">
                    Iniciar sesión
                    </Link>
                </p>
        </div>
      </div>
    );
  }

  export default Registro;