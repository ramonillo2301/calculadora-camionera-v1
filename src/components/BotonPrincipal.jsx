// src/components/BotonPrincipal.jsx
export default function BotonPrincipal({ children, onClick  }) {
 

  return (
    <button
      onClick={onClick}
      className="boton-principal"
      type="button"
    >
      {children}
    </button>

  );
}
