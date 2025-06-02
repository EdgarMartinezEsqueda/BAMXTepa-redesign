import { useState, useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";
import Odometer from "react-odometerjs";

const FunFact = () => {
  const [values, setValues] = useState([0, 0, 0, 0]);

  const stats = [
    { value: 9, suffix: " mil", label: "Familias atendidas mensualmente", color: "text-green-600" },
    { value: 58, suffix: " mil", label: "Paquetes distribuidos en 2024", color: "text-yellow-500" },
    { value: 14, suffix: "", label: "Municipios atendidos", color: "text-teal-400" },
    { value: 90, suffix: "+", label: "Puntos de entrega", color: "text-indigo-500" },
  ];

  useEffect(() => {
    // Inicia la animación al montar
    const timeoutId = setTimeout(() => {
      setValues(stats.map(stat => stat.value));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-green-600 text-xl mb-4">
              Esperanza y alimento para quienes más lo necesitan
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Unidos <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"> transformamos </span> vidas
            </h3>

            <p className="text-gray-600 text-lg border-l-4 border-green-600 pl-4 mb-8">
              Cada paquete que entregamos lleva más que comida: lleva esperanza, dignidad y el respaldo de una comunidad comprometida. En 13 municipios, trabajamos día a día para que nadie se quede sin lo esencial.
            </p>
            <a href="tel:+523787881234" className="flex items-center group">
              <div className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <FiPhoneCall className="text-white text-2xl" />
              </div>
              <span className="ml-4 text-gray-900 font-bold group-hover:text-green-600 transition-colors">
                (378) 782 5552
              </span>
            </a>
          </div>
          
          {/* Stats Grid */}
          <div className="lg:w-1/2 w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <li
                  key={index}
                  className={`p-6 rounded-3xl text-center shadow-sm transition-all duration-300 ${
                    index % 2 === 0
                      ? "bg-gradient-to-br from-orange-50/40 to-white"
                      : "bg-gradient-to-tl from-orange-100/20 to-white"
                  }`}
                >
                  <div className={`text-4xl font-extrabold mb-2 ${stat.color}`}>
                    <Odometer value={values[index]} format="(,ddd).dd" duration={1000} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm md:text-base text-gray-800 font-medium">
                    {stat.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 hidden lg:block">
        <img
          src="/assets/images/funfact-shape.svg"
          alt="background shape"
          className="w-full max-w-2xl opacity-20"
        />
      </div>
    </section>
  );
};

export default FunFact;