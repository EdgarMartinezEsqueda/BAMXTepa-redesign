import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { FiPhone } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      image: "/assets/images/beneficiarios/4.webp",
      title: "Alimentamos esperanza, transformamos vidas",
      subtitle: "Cada despensa entregada es una oportunidad para construir un mejor futuro",
      description: "Unidos contra el hambre, unidos por nuestra comunidad.",
    },
    {
      image: "/assets/images/beneficiarios/6.webp",
      title: "Tú puedes ser parte del cambio",
      subtitle: "Cada apoyo suma, cada voluntario transforma",
      description: "Haz la diferencia hoy, ayuda a quienes más lo necesitan.",
    },
    {
      image: "/assets/images/beneficiarios/12.webp",
      title: "Comprometidos con nuestra gente",
      subtitle: "Con tu ayuda, llevamos alimento a más hogares",
      description: "¡Sé parte de esta causa solidaria y generosa!",
    },
  ];

  return (
    <section className="relative h-[830px] md:h-[700px] lg:h-[830px] -mt-10 md:mt-0">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        effect="fade"
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r md:from-gray-900 md:via-gray-900/70 to-transparent z-10" />

              <div className="container mx-auto h-full flex items-center px-4 lg:px-8 xl:px-32 relative z-20 max-md:bg-black/30 max-md:px-4 max-md:py-2 rounded-lg">
                <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl space-y-6">
                  <h1 className="text-white md:text-amarilloLogo font-semibold text-lg md:text-xl animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight md:leading-[1.2] animate-fade-in-up delay-100">
                    {slide.subtitle}
                  </h2>
                  <p className="text-white text-xl animate-fade-in-up delay-200">
                    {slide.description}
                  </p>

                  <div className="flex items-center flex-col sm:flex-row gap-6 animate-fade-in-up delay-300">
                    <a
                      href="/nosotros"
                      className="bg-verdeLogo hover:bg-green-800 text-white px-8 py-4 rounded-full 
                        transition-all duration-300 text-lg font-bold tracking-wide shadow-lg"
                    >
                      Nosotros
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-lg">
                      <div className="bg-gray-700 p-3 rounded-full flex-shrink-0">
                        <FiPhone className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg tracking-wide">Llámanos</h3>
                        <span className="text-gray-200 text-xl font-semibold">(378) 782 5552</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="swiper-button-prev !w-16 !h-16 !rounded-full !border !border-white/30 hover:!bg-amarilloLogo hover:!border-yellow-700 after:!text-white after:!text-xl after:!font-bold" />
        <div className="swiper-button-next !w-16 !h-16 !rounded-full !border !border-white/30 hover:!bg-amarilloLogo hover:!border-yellow-700 after:!text-white after:!text-xl after:!font-bold" />

        {/* Pagination */}
        <div className="swiper-pagination !bottom-8" />
      </Swiper>

      {/* Animations */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          @apply bg-white/20 w-3 h-3 transition-all duration-300;
        }
        .swiper-pagination-bullet-active {
          @apply bg-amarilloLogo w-8 rounded-full;
        }

        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .delay-100 {
          animation-delay: 0.2s;
        }
        .delay-200 {
          animation-delay: 0.4s;
        }
        .delay-300 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
