import BotonPrincipal from '../components/BotonPrincipal';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b  px-6 py-12 text-center">
      <div className=" backdrop-blur-md shadow-xxl border-white border-opacity-10 rounded-2xl p-8 max-w-xl w-full">
        <img className="w-24 h-auto mx-auto mb-6" src="./logo.png" alt="logo" />

        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Calculadora Camionera
        </h1>

        <p className="text-lg text-gray-800 dark:text-gray-300">
          Bienvenido a tu herramienta personal para ahorrar, calcular y optimizar tus viajes como conductor profesional.
        </p>
      </div>
    </div>
  );
}

//Bienvenido a tu herramienta personal para ahorrar, calcular y optimizar tus viajes como conductor profesional.
