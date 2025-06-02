import { FaPhone } from "react-icons/fa";

const ContactBanner = () => (
  <div className="p-5 bg-verdeLogo text-white text-center">
    <div className="flex justify-center mb-3">
      <FaPhone className="text-2xl" />
    </div>
    <h4 className="font-bold text-lg mb-1">¿Necesitas más información?</h4>
    <p className="mb-3">Estamos aquí para ayudarte</p>
    <a 
      href="tel:+523787825552" 
      className="text-xl font-bold block hover:text-amarilloLogo transition"
    >
      +(52) 378 782 5552
    </a>
  </div>
);

export default ContactBanner;