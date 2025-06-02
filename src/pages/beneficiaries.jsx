import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Gallery from "components/gallery/Gallery";
import Carousel from "components/sliders/Carousel";

const Beneficiaries = () =>{
  return (
    <main className="bg-gray-50">
      <Header />
      <Breadcrumb titulo="Beneficiarios" />
      
      <section className="bg-gray-50 py-10">
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            <span className="text-amarilloLogo relative inline-block"> Únete
              <img 
                src="assets/images/about/shape9.svg" 
                alt="" 
                className="absolute -bottom-2 hidden md:block"
              />
            </span> a nuestro padrón de beneficiarios
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-dark-gray mb-4">
            Si tú o tu familia necesitan apoyo alimentario, aquí te mostramos cómo formar parte de nuestro padrón de beneficiarios.
            En el siguiente carrusel podrás ver los pasos necesarios para unirte.
          </p>
          <p className="text-base max-w-2xl mx-auto text-gray-700">
            <strong>Documentos necesarios:</strong> identificación oficial del titular (INE), CURP de todos los integrantes de la familia y comprobante de domicilio actualizado.
          </p>
        </div>
          <Carousel folderName="unirse" totalImages={5} />
      </section>
      <Gallery />
      <Footer />
    </main>
  );
};

export default Beneficiaries;