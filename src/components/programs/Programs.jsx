import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ProgramList from "components/programs/ProgramList";
import ProgramDetail from "components/programs/ProgramDetail";
import ContactBanner from "components/contact/ContactBanner";
import { programas } from "components/programs/programasData";

const Programas = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Obtener el hash inicial de la URL
  const hash = location.hash.replace("#", "");
  const initialActiveId = programas.find(p => p.id === hash) ? hash : programas[0].id;
  
  const [activeId, setActiveId] = useState(initialActiveId);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSelect = (id) => {
    setActiveId(id);
    navigate(`#${id}`, { replace: true });
    
    // Scroll suave al contenedor de programas
    const programasSection = document.getElementById("programas-section");
    if (programasSection) {
      programasSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const activeProgram = programas.find(p => p.id === activeId);

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="text-center pb-10">
        <p className="text-gray-600 max-w-3xl mx-auto">
          Conoce las diferentes formas en que puedes participar y contribuir a nuestra misión de combatir el hambre en nuestra comunidad
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <ProgramList 
              programas={programas} 
              activeId={activeId} 
              onSelect={handleSelect} 
            />
            <ContactBanner />
          </div>
        </div>

        <div className="lg:w-2/3 bg-white rounded-xl shadow-lg p-6 space-y-8">
          {activeProgram && (
            <ProgramDetail 
              program={activeProgram} 
              activeAccordion={activeAccordion}
              toggleAccordion={toggleAccordion}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Programas;