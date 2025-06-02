import { useState } from "react";
import Header from "components/header/Header";
import Hero from "components/sliders/Hero";
import Partners from "components/sliders/Partners";
import FunFact from "components/funfact/Funfact";
import AboutSection from "components/about/AboutSection";
import Programs from "components/programs/ProgramsSection";
import CallToAction from "components/cta/CallToAction";
import Footer from "components/footer/Footer";
import InstagramSection from "components/media/InstagramSection";
import ProcessSection from "components/process/Process";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <CallToAction />
          <AboutSection />
          <Programs />
          <ProcessSection />
          <FunFact />
          <section className="bg-gray-50">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-extrabold mb-4 text-verdeLogo">Nuestros Aliados</h2>
              <p className="text-lg max-w-4xl mx-auto text-dark-gray">
                Agradecemos profundamente a las empresas y organizaciones que hacen posible nuestra labor.
              </p>
            </div>

            <Partners folderName="partners" totalImages={7} altText="Partner" />
          </section>
          <InstagramSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App