import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, } from "react-icons/fa";
import LogoISO from "assets/certificaciones/ISO.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaFacebook />,
      label: "Facebook",
      link: "https://www.facebook.com/bamxtepatitlan",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      link: "https://www.instagram.com/bamxtepatitlan",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/company/bamxtepatitlan",
    },
    {
      icon: <FaTiktok />,
      label: "TikTok",
      link: "https://www.tiktok.com/@bamxtepatitlan",
    },
  ];

  const services = [
    { title: "Servicio Social", link: "/programas#servicio-social" },
    { title: "Apadrina una familia", link: "/programas#apadrinamiento" },
    { title: "Voluntarios al volante", link: "/programas#voluntarios-al-volante" },
    { title: "Únete a nuestro padrón de beneficiarios", link: "/beneficiarios" },
  ];

  const usefulLinks = [
    { title: "Nosotros", link: "/nosotros" },
    { title: "Preguntas frecuentes", link: "/preguntas" },
    { title: "Donar", link: "/donar" },
    { title: "Voluntariado", link: "/programas#voluntariado" },
    { title: "Contacto", link: "/contacto" },
  ];

  return (
    <footer className="relative z-10 text-white">
      {/* Fondo overlay */}
      <div className="absolute inset-0 bg-[rgba(27,35,36,0.96)] z-[-1]" />

      {/* Contenido principal del footer */}
      <div className="container mx-auto px-4 pt-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Servicios */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Programas</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a href={service.link} className="text-gray-300 hover:text-verdeLogo transition-colors" >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Enlaces útiles</h3>
          <ul className="space-y-3">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link} className="text-gray-300 hover:text-verdeLogo transition-colors" >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Ubicación */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Ubicación</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            <a href="https://maps.app.goo.gl/eH2nbnXZ759wQ7gd6" target="_blank" >
              Terrerito No. 1326<br />
              Tepatitlán de Morelos, Jalisco
            </a>
          </p>
          <ul className="space-y-2">
            <li className="font-semibold">Contacto</li>
            <li className="text-verdeLogo">
              <a href="mailto:direcciongeneral@batepa.mx">
                direcciongeneral@batepa.mx
              </a>
            </li>
            <li className="text-gray-300">
              <a href="tel:+523787825552">+52 (378) 782 5552</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Redes sociales */}
      <div className=" py-4">
        <p className="text-center text-gray-300 text-sm mb-4 px-4">
          Unidos por la solidaridad, alimentamos esperanza cada día. <br />
          ¡Gracias por ser parte de esta misión!
        </p>
        <ul className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-amarilloLogo transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="hidden sm:inline text-gray-200 text-base">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Logo y certificaciones */}
      <div className="py-4 border-t border-white/10 ">
        <div className="flex justify-center items-center flex-wrap gap-8">
          {/* Logo del Banco */}
          <div className="relative">
            <img
              src="/assets/images/logoModoOscuro.png"
              alt="Logo Banco de Alimentos"
              className="h-14 object-contain"
            />
            <div className="absolute inset-0 bg-transparent z-10" />
          </div>

          {/* Certificaciones */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* Certificación ISO */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={LogoISO}
                  alt="Certificación ISO 22000"
                  className="h-12 object-contain"
                />
                <div className="absolute inset-0 bg-transparent z-10" />
              </div>
              <p className="text-xs text-gray-400 text-center mt-1 max-w-[140px]">
                Sistema de Gestión de Inocuidad Alimentaria
              </p>
            </div>

            {/* Ejemplo: Distintivo BAMX */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src="https://bamx.org.mx/wp-content/uploads/2023/10/RED-BAMX.png"
                  alt="Distintivo BAMX"
                  className="h-12 object-contain"
                />
                <div className="absolute inset-0 bg-transparent z-10" />
              </div>
              <p className="text-xs text-gray-400 text-center mt-1 max-w-[140px]">
                Miembro de la Red BAMX
              </p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()}{" "} <a href="/" className="text-amarilloLogo font-medium"> Banco Diocesano de Alimentos de los Altos </a>{" "} - Unidos contra el hambre en nuestra región.
        </div>
      </div>

      {/* Figuras decorativas */}
      <div className="absolute left-0 top-1/4 animate-leaf hidden lg:block">
        <img src="assets/images/f-shape1.svg" alt="" />
      </div>
      <div className="absolute left-12 bottom-0 animate-leaf hidden lg:block">
        <img src="assets/images/f-shape-2.svg" alt="" />
      </div>
    </footer>
  );
};

export default Footer;