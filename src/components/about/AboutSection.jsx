import { FiPlay, FiCheck, FiAward, FiHeart } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50 " >
      {/* Formas decorativas */}
      <div className="hidden lg:block">
        <img src="/assets/images/about/shape1.svg" alt="" className="absolute left-0 top-0 z-10" />
        <img src="/assets/images/about/shape3.svg" alt="" className="absolute left-0 bottom-12 z-10" />
        <img src="/assets/images/about/shape4.svg" alt="" className="absolute left-1/3 bottom-24 z-10 animate-zoom" />
        <img src="/assets/images/about/shape5.svg" alt="" className="absolute right-32 top-32 -z-0 animate-zoom" />
        <img src="/assets/images/about/shape6.svg" alt="" className="absolute right-12 -bottom-10 -z-10 animate-leaf" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Columna de imágenes */}
          <div className="lg:w-1/2 relative flex justify-center">
            <div 
              className="relative w-11/12 sm:w-4/5 md:w-xl h-96 md:h-[575px]" 
              style={{ 
                background: "url('/assets/images/about/shape.png') no-repeat center",
                backgroundSize: "cover"
              }}
            >
              <img 
                src="/assets/images/beneficiarios/1.webp" 
                alt="About us" 
                className="w-full h-full object-cover mix-blend-lighten rounded-xl"
              />

              {/* Botón de video */}
              <a 
                href="https://drive.google.com/file/d/1MOLsJYjUikDTGME5J-GIB1zskrC5U-lc/preview" 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center hover:bg-amarilloLogo transition-colors shadow-lg"
              >
                <FiPlay className="text-white text-2xl md:text-3xl ml-1" />
              </a>
            </div>
          </div>

          {/* Columna de contenido */}
          <div className="lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="font-light text-lg md:text-xl mb-4 text-primary">
                Transformando vidas con cada despensa entregada.
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-verdeLogo mb-6 leading-tight">
                Unidos por un{" "}
                <span className="text-amarilloLogo">futuro sin hambre</span>
              </h3>
              <p className="text-gray-700 border-l-4 pl-4 mb-8 border-verdeLogo text-sm md:text-base">
                En el Banco Diocesano de Alimentos de los Altos trabajamos cada día para combatir el hambre y mejorar la nutrición de miles de familias en la región de Los Altos de Jalisco. Con el apoyo de voluntarios, donadores y aliados, llevamos esperanza a comunidades vulnerables de nuestra comunidad.
              </p>


              {/* Items destacados */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-rojoLogo">
                    <FiHeart />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Compromiso solidario</h4>
                    <p className="text-gray-600 text-sm">
                      Más de 9,000 familias reciben apoyo mensual gracias a nuestra red de distribución en 14 municipios.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-rojoLogo">
                    <FiAward />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Trabajo reconocido</h4>
                    <p className="text-gray-600 text-sm">
                      Somos parte de la Red BAMX, operamos con transparencia, eficiencia y compromiso social.
                    </p>
                  </div>
                  </div>
              </div>

              {/* Lista de ventajas */}
              <ul className="space-y-3 mb-8 text-sm md:text-base">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2 bg-primary">
                    <FiCheck className="text-white text-xs" />
                  </div>
                  Programas como "Apadrina una familia" garantizan apoyo continuo a quienes más lo necesitan.
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2 bg-primary">
                    <FiCheck className="text-white text-xs" />
                  </div>
                  Más de 1,000 toneladas de alimentos entregados a lo largo del año.
                </li>
              </ul>

              {/* Botón y CEO */}
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="/nosotros"
                  className="text-white px-6 py-3 rounded-full hover:opacity-90 transition bg-primary text-sm md:text-base"
                >
                  Más sobre nosotros
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
