import { useState } from "react";
import { FaPlay, FaCheck } from "react-icons/fa";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const tabs = [
    { id: "Tab1", title: "Nuestra Misión", image: "about-5.jpg" },
    { id: "Tab2", title: "Nuestra Visión", image: "about-6.jpg" },
    { id: "Tab3", title: "Nuestros Valores", image: "about-7.jpg" }
  ];

  const tabContent = {
    Tab1: [
      "Combatir el hambre y mejorar la nutrición de las familias más vulnerables.",
      "Repartimos más de 1'000,000 kg de frutas y verduras al año.",
      "Colaboramos con empresas, instituciones y voluntarios comprometidos."
    ],
    Tab2: [
      "Ser un referente en la lucha contra el desperdicio alimentario.",
      "Fomentar una cultura de solidaridad, corresponsabilidad y servicio.",
      "Expandir nuestra cobertura en la región de Los Altos de Jalisco y parte de Zacatecas."
    ],
    Tab3: [
      "Solidaridad: actuamos con empatía y compromiso.",
      "Transparencia: rendimos cuentas con claridad y honestidad.",
      "Trabajo en equipo: colaboramos con entusiasmo por un bien común."
    ]
  };

  return (
    <section className="relative py-20 z-10 text-gray-800">
      {/* Decorativos */}
      <div className="absolute left-0 top-0 z-[-1] hidden lg:block">
        <img src="assets/images/about/shape7.svg" alt="" />
      </div>
      <div className="absolute right-0 bottom-12 z-[-1] hidden lg:block">
        <img src="assets/images/about/shape8.svg" alt="" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Imágenes */}
          <div className="w-full lg:w-1/2 relative mb-16 lg:mb-0 hidden lg:flex justify-center lg:justify-start ">
            <div className="relative max-w-[532px]">
              <div className="relative rounded-xl overflow-hidden shadow-lg 
                after:absolute after:right-14 after:-bottom-7 after:w-[419px] after:h-[522px] 
                after:border-2 after:border-verdeLogo after:rounded-xl after:z-[-1] 
                before:absolute before:-left-6 before:top-14 before:w-1 before:h-52 before:bg-verdeLogo before:z-[-1]">
                <img 
                  src="assets/images/beneficiarios/6.webp" 
                  alt="" 
                  className="w-[437px] max-h-[555px] rounded-xl object-cover"
                />
              </div>

              <img 
                src="assets/images/beneficiarios/12.webp" 
                alt="" 
                className="absolute -right-10 -bottom-24 rounded-xl shadow-md hidden lg:block w-[247px] h-[257px] object-cover"
              />

              <img 
                src="assets/images/about/shape4.svg" 
                alt="" 
                className="absolute right-28 top-5 hidden lg:block"
              />

              <div className="absolute -left-12 bottom-0 w-52 h-52 flex flex-col items-center justify-center z-10 sm:left-0 sm:w-36 sm:h-36">
                <div className="relative text-center">
                  <img 
                    src="assets/images/about/shape11.svg" 
                    alt="" 
                    className="absolute inset-0 w-full h-full -z-10"
                  />
                  <h2 className="text-white font-edu-hand text-xl uppercase">Desde</h2>
                  <h3 className="text-amarilloLogo text-5xl font-bold mt-1">2007</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="w-full lg:w-1/2 px-4 lg:pl-8">
            <div className="text-center lg:text-left">
              <h2 className="text-verdeLogo font-edu-hand text-xl font-semibold mb-3 flex items-center justify-center lg:justify-start">
                Alimentando esperanza en los Altos de Jalisco.
              </h2>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Unidos por una <span className="text-amarilloLogo relative inline-block"> causa
                  <img 
                    src="assets/images/about/shape9.svg" 
                    alt="" 
                    className="absolute -bottom-2 hidden md:block"
                  />
                </span> que transforma vidas.
              </h3>

              <p className="text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 text-balance">
                En el Banco Diocesano de Alimentos de los Altos trabajamos cada día para llevar alimentos, dignidad y esperanza a más de 9,000 familias. Juntos, con la ayuda de aliados y voluntarios, construimos una región más solidaria.
              </p>

              {/* Tabs */}
              <div className="mt-10">
                <div className="flex justify-center lg:justify-start border-b border-gray-200">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`py-2.5 px-6 font-semibold text-sm transition-all duration-300 cursor-pointer ${
                        activeTab === tab.id 
                          ? "bg-verdeLogo text-white rounded-t-md shadow-md" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                {/* Reordenar en mobile/tablet: puntos primero, video después */}
                <div className="mt-6 flex flex-col md:flex-row lg:flex-row gap-6 items-start">
                  {/* Lista de puntos */}
                  <ul className="space-y-3 order-1 md:order-1 lg:order-2 md:max-w-1/2">
                    {tabContent[activeTab].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-amarilloLogo mt-1 mr-3" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Video */}
                  <div className="relative w-full md:w-56 lg:w-56 h-40 md:h-48 rounded-lg overflow-hidden shadow-md group order-2 md:order-2 lg:order-1 mx-auto lg:mx-0">
                    <img 
                      src="/assets/images/beneficiarios/1.webp" 
                      alt="" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <a 
                      href="https://drive.google.com/file/d/1MOLsJYjUikDTGME5J-GIB1zskrC5U-lc/preview" 
                      className="absolute inset-0 flex items-center justify-center bg-black/30"
                    >
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-verdeLogo">
                        <FaPlay className="text-lg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contacto */}
              <div className="flex flex-wrap items-center mt-10 gap-6 justify-center lg:justify-start">
                <div className="relative font-bold text-base">
                  Más de 90 puntos de entrega
                  <img 
                    src="assets/images/about/shape10.svg" 
                    alt="" 
                    className="absolute -bottom-3 -right-4"
                  />
                </div>

                <div className="hidden sm:flex items-center gap-3">
                  <img src="assets/images/about/call.svg" alt="" />
                  <div className="text-center lg:text-left">
                    <span className="block text-gray-600 text-sm">Teléfono:</span>
                    <span className="font-bold">+52 (378) 782 5552</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;