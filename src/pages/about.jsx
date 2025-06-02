import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import About from "components/about/About";
import FunfactSimple from "components/funfact/FunfactSimple";
import Partners from "components/sliders/Partners";
import History from "components/sliders/History";
import CallToAction from "components/cta/CallToAction";
import Map from "components/map/Mapa";
import CertificationSection from "components/events/CertificationSection";

const AboutUs = () =>{
    return (
      <main className="bg-gray-50">
        <Header/>
        <Breadcrumb titulo="Nosotros" />
        <History />
        <About />
        <Map />
        <FunfactSimple />
        <CertificationSection />
        <section className="bg-gray-50">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold mb-4 text-verdeLogo">Nuestros Aliados</h2>
            <p className="text-lg max-w-4xl mx-auto text-dark-gray">
              Agradecemos profundamente a las empresas y organizaciones que hacen posible nuestra labor.
            </p>
          </div>
          <Partners folderName="partners" totalImages={7} altText="Partner" />
        </section>
        <CallToAction />
        <Footer />
      </main>
    );
};

export default AboutUs;