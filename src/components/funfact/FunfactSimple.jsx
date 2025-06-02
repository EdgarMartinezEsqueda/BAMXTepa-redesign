import { FaBox, FaWeightHanging, FaAppleAlt, FaBreadSlice } from "react-icons/fa";
import Tortilla from "assets/tortillas.svg?react";
import Concha from "assets/concha.svg?react";

const FunFactSimple = () => {
  const facts = [
    {
      icon: <FaBox />,
      value: "58,395",
      suffix: "",
      label: "Paquetes alimentarios"
    },
    {
      icon: <FaWeightHanging />,
      value: "592,311",
      suffix: " kg",
      label: "Alimento no perecedero"
    },
    {
      icon: <FaAppleAlt />,
      value: "419,033",
      suffix: " kg",
      label: "Frutas y verduras"
    },
    {
      icon: <Tortilla className="text-white h-[30px] md:h-[36px]" />,
      value: "94,140",
      suffix: " kg",
      label: "Tortillas"
    },
    {
      icon: <FaBreadSlice />,
      value: "264,771",
      suffix: " pzs",
      label: "Bollo"
    },
    {
      icon: <Concha className="text-white h-[30px] md:h-[36px]" />,
      value: "264,771",
      suffix: " pzs",
      label: "Conchas"
    }
  ];

  return (
    <section className="relative z-10 -m-10 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-gradient-to-br from-verdeLogo to-green-700 rounded-xl shadow-custom overflow-hidden shadow-inner">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center py-6">
            Impacto social 2024
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="p-4 text-center flex flex-col items-center justify-center gap-1 sm:gap-2"
              >
                <div className="text-white text-3xl md:text-4xl">
                  {fact.icon}
                </div>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                  {fact.value}
                  <span className="text-sm sm:text-base md:text-xl">{fact.suffix}</span>
                </h2>
                <p className="text-white text-xs sm:text-sm text-center">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactSimple;