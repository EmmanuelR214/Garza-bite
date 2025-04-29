import React, { createContext, useState, useEffect } from 'react';

// Creamos el contexto
export const CartContext = createContext();

// Proveedor
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // useEffect para cargar carrito desde localStorage al montar
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoGuardado);
  }, []);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    // Actualizar estado
    setCarrito((prevCarrito) => {
      const carritoActualizado = [...prevCarrito, producto];
      // También actualizar localStorage
      localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
      return carritoActualizado;
    });
  };

  // Función para vaciar carrito (opcional)
  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem('carrito');
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
