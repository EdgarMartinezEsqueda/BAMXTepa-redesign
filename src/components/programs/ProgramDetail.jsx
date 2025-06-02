import MediaRenderer from "components/media/MediaRenderer";
import FAQAccordion from "components/faqs/FAQAccordion";

const ProgramDetail = ({ program, activeAccordion, toggleAccordion }) => (
  <>
    <div>
      <h2 className="text-3xl font-bold text-verdeLogo mb-2">{program.title}</h2>
      <p className="text-gray-700 text-lg leading-relaxed">{program.description}</p>
    </div>

    <MediaRenderer 
      media={program.media} 
      alt={program.title} 
      title={program.title}
    />

    <div>
      <h3 className="text-2xl font-semibold text-rojoLogo mb-3">¿Por qué participar?</h3>
      <ul className="space-y-3 list-disc list-inside text-gray-700">
        {program.keyPoints.map((point, index) => (
          <li key={index} className="pl-1">{point}</li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-rojoLogo mb-4">Preguntas Frecuentes</h3>
      <FAQAccordion 
        faqs={program.faqs} 
        activeIndex={activeAccordion} 
        onToggle={toggleAccordion} 
      />
    </div>
  </>
);

export default ProgramDetail;