import React, { useEffect, useState } from 'react';

function BackgroundEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1080);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (event) => {
      if (!isMobile) {
        const { clientX, clientY } = event;
        setPosition({ x: clientX, y: clientY });
      }
    };

    const handleDeviceOrientation = (event) => {
      if (isMobile) {
        const { gamma, beta } = event; // gamma = izquierda/derecha, beta = arriba/abajo
        setPosition({
          x: gamma * 10,  // sensibilidad ajustada
          y: beta * 10,
        });
      }
    };

    // Escuchar movimiento del mouse o movimiento del dispositivo
    if (isMobile) {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        // iOS: pedir permiso
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('deviceorientation', handleDeviceOrientation);
            }
          })
          .catch((err) => {
            console.error('Error solicitando permiso de orientación:', err);
          });
      } else {
        // Android: probablemente no necesita permiso
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const calcTransform = (factorX, factorY) => ({
    transform: `translate(${position.x * factorX}px, ${position.y * factorY}px)`,
    transition: 'transform 0.1s ease-out',
  });

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Fondo de imágenes */}
      <img
        src="/cafes.png"
        alt="Cafe 1"
        className="absolute bottom-0 left-0 w-3xl h-auto object-contain"
        style={calcTransform(0.01, 0.02)}
      />
      
      <img
        src="/cafes.png"
        alt="Cafe 2"
        className="absolute top-0 right-0 w-3xl h-auto object-contain"
        style={calcTransform(0.02, 0.01)}
      />

      {/* Fondo de difuminado en móviles */}
      {isMobile && (
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      )}
    </div>
  );
}

export default BackgroundEffect;