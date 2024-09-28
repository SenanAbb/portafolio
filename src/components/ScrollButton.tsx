import { useState, useEffect } from "react";

function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Posición de scroll desde arriba
      const windowHeight = window.innerHeight; // Altura de la ventana
      const documentHeight = document.documentElement.scrollHeight; // Altura total del documento

      // Cálculo del porcentaje de scroll
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      // Si el scroll es mayor o igual a 10%, mostrar el botón
      if (scrollPercentage >= 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <>
          <button
            className="fixed bottom-10 right-10 bg-blue-900/50 text-white p-3 rounded-full text-2xl"
            style={{
              opacity: showButton ? 1 : 0,
              visibility: showButton ? "visible" : "hidden",
              transition: "opacity 0.5s ease, visibility 0.5s ease",
              animation: showButton
                ? "moveUpDown 2s infinite ease-in-out"
                : "none",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              fill="white"
            >
              <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"></path>
            </svg>
          </button>
          <style>{`
            @keyframes moveUpDown {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
          `}</style>
        </>
      )}
    </div>
  );
}

export default ScrollButton;
