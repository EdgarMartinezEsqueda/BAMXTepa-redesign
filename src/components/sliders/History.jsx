import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const historyData = [
  {
    year: "2007",
    description:
      "El Banco Diocesano de Alimentos de Tepatitlán se funda, marcando el inicio de una misión para combatir el hambre en nuestra comunidad.",
    image: "2007.webp",
  },
  {
    year: "2009",
    description:
      "El H. Ayuntamiento de Tepatitlán nos otorga un terreno en comodato, proporcionando un espacio físico para nuestras operaciones.",
    image: "2009.webp",
  },
  {
    year: "2013",
    description:
      "Adquirimos vehículos que nos permiten extender nuestra ayuda a los municipios de la zona de Los Altos.",
    image: "2013.webp",
  },
  {
    year: "2015",
    description:
      "Inauguramos nuestro propio edificio de instalaciones, consolidando nuestra presencia y capacidad operativa.",
    image: "2015.webp",
  },
  {
    year: "2016",
    description:
      "Se inaugura nuestra panadería, ampliando los tipos de alimentos que podemos ofrecer a nuestros beneficiarios.",
    image: "2016.webp",
  },
  {
    year: "2017",
    description:
      "Se inaugura la tortillería, proporcionando un producto esencial para las mesas de nuestras familias beneficiarias.",
    image: "2017.webp",
  },
  {
    year: "2019",
    description:
      "Instalamos una planta procesadora de alimentos, lo que nos permite ofrecer productos fuera de temporada y alimentos preparados.",
    image: "2019.webp",
  },
  {
    year: "2022",
    description:
      "Obtenemos la certificación ISO 22000-2018, demostrando nuestro compromiso con la seguridad y calidad alimentaria.",
    image: "2022.webp",
  },
];

const History = () => {
  return (
    <section className="pt-8 relative">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-4 text-verdeLogo">
            Nuestra Historia
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Conoce los momentos clave que han marcado el crecimiento del Banco Diocesano de Alimentos de los Altos.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {historyData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg h-[350px] flex flex-col justify-end p-6 text-white bg-center bg-cover transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0,0,0,0.1)), url(/assets/images/historia/${item.image})`,
                }}
              >
                <div>
                  <h3 className="text-3xl font-bold mb-2">{item.year}</h3>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default History;
