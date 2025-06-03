import { MdContactSupport } from "react-icons/md";

const ContactBanner = () => (
  <div className="p-5 bg-verdeLogo text-white text-center">
    <div className="flex justify-center mb-3">
      <MdContactSupport className="text-2xl" />
    </div>
    <h4 className="font-bold text-lg mb-1">¿Necesitas más información?</h4>
    <p className="mb-3">Estamos aquí para ayudarte</p>
    <a 
      href="/contacto" 
      className="text-xl font-bold block hover:text-amarilloLogo transition"
    >
      Contáctanos
    </a>
  </div>
);

export default ContactBanner;