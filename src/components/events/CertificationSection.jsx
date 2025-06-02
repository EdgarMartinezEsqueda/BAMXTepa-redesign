import LogoISO from "assets/certificaciones/ISO.png";

const CertificacionesSection = () => {
  const certificaciones = [
    {
      image: LogoISO,
      title: "Certificación ISO 22000",
      description:
        "La Certificación ISO 22000 respalda que nuestros procesos cumplen con los más altos estándares internacionales en gestión de la inocuidad alimentaria, asegurando que los alimentos que entregamos sean seguros para el consumo humano.",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Encabezado */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="block text-verdeLogo text-base sm:text-lg font-semibold mb-2">
            Compromiso con la excelencia
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold">
            Nuestras <span className="text-amarilloLogo">certificaciones</span>
          </h2>
        </div>

        {/* Certificaciones */}
        <div className="space-y-14 sm:space-y-20 max-w-6xl mx-auto">
          {certificaciones.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden`}
            >
              {/* Texto */}
              <div className="lg:w-1/2 p-5 sm:p-6 lg:p-10 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">{item.description}</p>
              </div>

              {/* Imagen con capa transparente */}
              <div className="relative lg:w-1/2 w-full h-64 sm:h-72 lg:h-full flex items-center justify-center lg:py-8">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-52 sm:w-64 object-contain z-0"
                />
                {/* Capa para dificultar guardado */}
                <div className="absolute inset-0 bg-transparent z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificacionesSection;
