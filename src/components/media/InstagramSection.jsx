import { useEffect } from "react";

const InstagramSection = () => {
  useEffect(() => {
    // Cargar el script de Elfsight solo una vez
    if (!document.querySelector("script[src*='elfsight']")) {
      const script = document.createElement("script");
      script.src = "https://apps.elfsight.com/p/platform.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-verdeLogo  to-rojoLogo z-10 text-white overflow-hidden">
      {/* Fondo decorativo opcional */}
      <div className="absolute inset-0 z-[-1] bg-opacity-80">
        <div className="absolute left-0 bottom-[-50px] w-full">
          <img src="assets/images/instagram/shape-1.svg" alt="Decoración" className="w-full"/>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow">
            Síguenos en nuestras redes
          </h2>
          <p className="text-lg md:text-xl text-white">
            Comparte con nosotros los momentos de entrega, solidaridad y esperanza. 
            Conoce de cerca nuestro trabajo diario.
          </p>
        </div>

        {/* Widget de Elfsight */}
        <div className="elfsight-app-b71bec8a-ed38-4031-822c-9368584eb302" data-elfsight-app-lazy></div>
      </div>

      {/* Estilos globales necesarios */}
      <style jsx global>{`
        @media (max-width: 1199px) {
          .instagram-section {
            background: #F74F22 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default InstagramSection;