import React, { useEffect, useState } from 'react';

function BackgroundEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es móvil
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

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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

      {/* Fondo negro semitransparente en móvil */}
      {isMobile && (
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      )}
    </div>
  );
}

export default BackgroundEffect;
