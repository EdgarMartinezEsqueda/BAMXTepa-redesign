import { FaHandshake, FaGift, FaHandsHelping, FaPlus, FaHandHoldingHeart } from "react-icons/fa";

const MissionVision = () => {
  const cards = [
    {
      image: "assets/images/beneficiarios/6.webp",
      title: "Apadrina una Familia",
      icon: <FaGift />,
      delay: "0.1s",
      link: "/programas#apadrinamiento"
    },
    {
      image: "assets/images/beneficiarios/2.webp",
      title: "Voluntariado",
      icon: <FaHandshake />,
      delay: "0.2s",
      link: "/programas#voluntariado"
    },
    {
      image: "assets/images/beneficiarios/3.webp",
      title: "Servicio Social",
      icon: <FaHandsHelping />,
      delay: "0.3s",
      link: "/programas#servicio-social"
    },
    {
      image: "assets/images/beneficiarios/4.webp",
      title: "Ver más...",
      icon: <FaHandHoldingHeart />,
      delay: "0.3s",
      link: "/programas"
    }
  ];

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-12 bg-gray-50">
      {/* Título de sección */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-4 text-verdeLogo">Nuestros Programas</h2>
        <p className="text-lg max-w-2xl mx-auto text-dark-gray">
          Conoce las iniciativas con las que llevamos alimento y esperanza a miles de familias.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.01] z-0"
          >
            {/* Imagen con efecto de hover */}
            <div className="relative w-full h-80">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 z-0"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10"></div>

              <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <a href={card.link} className="flex items-center justify-center w-14 h-14 bg-rojoLogo text-white text-xl rounded-bl-xl">
                  <FaPlus />
                </a>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl flex items-center shadow-lg px-5 py-4 pr-6 max-w-[90%] z-20">
                <div className="bg-verdeLogo text-white w-14 h-14 flex items-center justify-center text-2xl rounded-lg shadow-md mr-4 shrink-0">
                  {card.icon}
                </div>
                <div>
                  <a href={card.link}>
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">{card.title}</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default MissionVision;
