import React, { createContext, useState, useEffect } from 'react';

// Creamos el contexto
export const CartContext = createContext();

// Proveedor
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [ordenes, setOrdenes] = useState([]);
  const [completadas, setCompletadas] = useState([]);
const [canceladas, setCanceladas] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    const ordenesGuardadas = JSON.parse(localStorage.getItem('ordenes')) || [];
    setOrdenes(ordenesGuardadas);
    setCarrito(carritoGuardado);
    setCompletadas(JSON.parse(localStorage.getItem('completadas')) || []);
    setCanceladas(JSON.parse(localStorage.getItem('canceladas')) || []);
  }, []);

  // Guardar carrito en localStorage
  const actualizarLocalStorage = (nuevoCarrito) => {
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  // Agregar producto o aumentar cantidad
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((p) => p.nombre === producto.nombre);

      let nuevoCarrito;
      if (existente) {
        nuevoCarrito = prev.map((p) =>
          p.nombre === producto.nombre
            ? { ...p, cantidad: (p.cantidad || 1) + 1 }
            : p
        );
      } else {
        nuevoCarrito = [...prev, { ...producto, cantidad: 1 }];
      }

      actualizarLocalStorage(nuevoCarrito);
      return nuevoCarrito;
    });
  };

  const aumentarCantidad = (nombre) => {
    setCarrito((prev) => {
      const producto = prev.find((p) => p.nombre === nombre);
      if (!producto) return prev;
  
      const nuevoCarrito = prev.map((p) =>
        p.nombre === nombre ? { ...p, cantidad: p.cantidad + 1 } : p
      );
  
      actualizarLocalStorage(nuevoCarrito);
      return nuevoCarrito;
    });
  };
  

  // Disminuir cantidad o eliminar producto si llega a 0
  const disminuirCantidad = (nombre) => {
    setCarrito((prev) => {
      const producto = prev.find((p) => p.nombre === nombre);
      if (!producto || producto.cantidad <= 1) return prev; // No disminuir si ya está en 1
  
      const nuevoCarrito = prev.map((p) =>
        p.nombre === nombre ? { ...p, cantidad: p.cantidad - 1 } : p
      );
  
      actualizarLocalStorage(nuevoCarrito);
      return nuevoCarrito;
    });
  };
  
  // const disminuirCantidad = (nombre) => {
  //   setCarrito((prev) => {
  //     const producto = prev.find((p) => p.nombre === nombre);

  //     if (!producto) return prev;

  //     let nuevoCarrito;
  //     if (producto.cantidad > 1) {
  //       nuevoCarrito = prev.map((p) =>
  //         p.nombre === nombre ? { ...p, cantidad: p.cantidad - 1 } : p
  //       );
  //     } else {
  //       nuevoCarrito = prev.filter((p) => p.nombre !== nombre);
  //     }

  //     actualizarLocalStorage(nuevoCarrito);
  //     return nuevoCarrito;
  //   });
  // };

  // Eliminar completamente un producto
  const eliminarProducto = (nombre) => {
    setCarrito((prev) => {
      const nuevoCarrito = prev.filter((p) => p.nombre !== nombre);
      actualizarLocalStorage(nuevoCarrito);
      return nuevoCarrito;
    });
  };

  // Vaciar carrito completo
  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem('carrito');
  };

  // Obtener cantidad de un producto específico
  const obtenerCantidadProducto = (nombre) => {
    const item = carrito.find((p) => p.nombre === nombre);
    return item?.cantidad || 0;
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        disminuirCantidad,
        eliminarProducto,
        vaciarCarrito,
        obtenerCantidadProducto,
        ordenes,
        setOrdenes,
        completadas,
        setCompletadas,
        canceladas,
        setCanceladas,
        aumentarCantidad
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
