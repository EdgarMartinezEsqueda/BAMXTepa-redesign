import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaHome, FaPhone, FaEnvelope, FaUser, FaEdit } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

const ContactPage = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Mensaje enviado con éxito. Te atenderemos a la brevedad.");
          formRef.current.reset();
        },
        (error) => {
          alert("Hubo un error. Inténtalo más tarde.");
          console.log(error);
        }
      );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-wrap -mx-2.5 pb-24 md:pb-16 sm:pb-12 sm:mx-0 items-stretch">
          {[
            {
              icon: <FaHome />,
              title: "Domicilio",
              content: "Calle Terrerito #1326 <br />Tepatitán de Morelos, Jalisco"
            },
            {
              icon: <FaPhone />,
              title: "Teléfono",
              content: "(378) 782 5552 <br/>8 am a 4 pm"
            },
            {
              icon: <FaEnvelope />,
              title: "Correos Electrónicos",
              content: "<a href='mailto:direcciongeneral@batepa.mx'>direcciongeneral@batepa.mx</a><br /><a href='mailto:trabajosocial@batepa.mx'>trabajosocial@batepa.mx</a>"
            },
            {
              icon: <IoShareSocial />,
              title: "Enlaces útiles",
              content: "Aquí encontrarás más de nosotros<br /> <a href='https://linktr.ee/bamxtepatitlan' target='_blank'>linktr.ee/bamxtepatitlan</a>"
            }
          ].map((item, index) => (
            <div key={index} className="w-full lg:w-1/4 md:w-1/2 px-2.5 mb-8 sm:px-0 sm:w-full flex">
              <div className="group relative p-10 rounded-lg border border-white shadow-[0px_15px_10px_0px_rgba(194,185,185,0.18)] transition-all flex flex-col justify-between h-full w-full hover:bg-verdeLogo">
                
                <div className="w-20 h-20 mx-auto flex items-center justify-center">
                  <div className="text-amarilloLogo text-4xl transition-colors group-hover:text-white">
                    {item.icon}
                  </div>
                </div>

                <div className="text-center mt-5">
                  <h2 className="text-2xl font-bold mb-5 transition-colors group-hover:text-white">
                    {item.title}
                  </h2>
                  <p
                    className="text-gray-500 text-lg transition-colors group-hover:text-white"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Contact Wrap */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="max-w-[518px]">
              <h2 className="text-4xl font-extrabold mb-5 sm:text-3xl">Contáctanos</h2>
              <p className="text-gray-500 text-lg mb-8">
                Si tienes alguna duda o necesitas más información sobre nuestros programas y servicios, por favor escríbenos o visítanos. Estamos para ayudarte.
              </p>

              <div className="h-[351px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7070.034355634964!2d-102.73812937530205!3d20.804396476665833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429262b38e504dd%3A0xf4f3353f8d429646!2sBANCO%20DE%20ALIMENTOS%20DE%20TEPA!5e1!3m2!1ses-419!2smx!4v1748460650362!5m2!1ses-419!2smx" className="w-full h-full border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-[484px]">
              <div className="mb-8">
                <h2 className="text-4xl font-extrabold mb-2 sm:text-3xl">Envía un mensaje</h2>
                <p className="text-gray-500">
                  Tu correo no será compartido. Todos los campos son obligatorios.
                </p>
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                <div className="relative mb-10">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre*"
                    className="w-full pb-5 pl-10 text-gray-500 text-lg border-b border-gray-300 focus:outline-none"
                    required
                  />
                  <label className="absolute left-0 top-0">
                    <FaUser className="text-xl" />
                  </label>
                </div>

                <div className="relative mb-10">
                  <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico*"
                    className="w-full pb-5 pl-10 text-gray-500 text-lg border-b border-gray-300 focus:outline-none"
                    required
                  />
                  <label className="absolute left-0 top-0">
                    <FaEnvelope className="text-xl" />
                  </label>
                </div>

                <div className="relative mb-10">
                  <textarea
                    name="mensaje"
                    placeholder="Escribe tu mensaje aquí"
                    className="w-full h-32 pb-5 pl-10 text-gray-500 text-lg border-b border-gray-300 focus:outline-none"
                    required
                  ></textarea>
                  <label className="absolute left-0 top-2">
                    <FaEdit className="text-xl" />
                  </label>
                </div>

                <div className="relative w-[222px]">
                  <input
                    type="submit"
                    value="Enviar mensaje"
                    className="w-full h-16 bg-verdeLogo text-white font-bold cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;