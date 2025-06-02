import FAQAccordion from "./FAQAccordion";

const preguntas = [
  {
    question: "¿Qué es un banco de alimentos?",
    answer: "Es una organización sin fines de lucro que rescata y distribuye alimentos a personas en situación vulnerable, a través de programas sociales y voluntariado."
  },
  {
    question: "¿Cómo puedo donar alimentos?",
    answer: "Puedes traer alimentos no perecederos a nuestras instalaciones o depositarlos en los puntos de recolección. También aceptamos frutas, verduras y pan del día."
  },
  {
    question: "¿Aceptan donaciones monetarias?",
    answer: "Sí. Las donaciones económicas son fundamentales para cubrir gastos operativos, transporte y compra de alimentos específicos que escasean."
  },
  {
    question: "¿Son una donataria autorizada?",
    answer: "Sí, somos una donataria autorizada por el SAT, lo que significa que podemos emitir recibos deducibles de impuestos a empresas y personas físicas que realicen donativos. Esto representa un beneficio fiscal directo para quienes apoyan nuestra causa."
  },
  {
    question: "¿Qué alimentos se pueden donar?",
    answer: "Principalmente no perecederos como arroz, frijol, aceite, atún, lentejas, galletas, leche en polvo. También aceptamos productos frescos en buen estado."
  },
  {
    question: "¿Cómo puedo ser voluntario?",
    answer: "Puedes sumarte como voluntario ayudando en almacén, armando despensas, selección de alimentos o entrega de despensas. Contáctanos por llamada, correo o en persona."
  },
  {
    question: "¿Qué programas tienen activos?",
    answer: "Apadrina una Familia, Voluntariado, Voluntarios al Volante y Comer en Familia. Todos enfocados en mejorar la nutrición y calidad de vida."
  },
  {
    question: "¿Cómo solicito apoyo alimentario?",
    answer: "Acércate a nuestro equipo de trabajo social. Evaluamos tu situación y, si cumples los criterios, te incluimos en nuestro padrón de beneficiarios, solo necesitamos una identificación oficial, CURP y comprobante de domicilio reciente."
  },
  {
    question: "¿Puedo hacer mi servicio social con ustedes?",
    answer: "Sí. Recibimos estudiantes de distintas carreras. Si hay convenio con tu escuela, puedes hacer tu servicio aquí apoyando en en área que más se te acomode."
  },
  {
    question: "¿Qué hacen para garantizar la calidad de los alimentos?",
    answer: "Todo lo que recibimos es clasificado, revisado y almacenado bajo normas de seguridad alimentaria. Solo distribuimos alimentos aptos para consumo."
  },
  {
    question: "¿Tienen algún impacto ambiental?",
    answer: "Sí. Reducimos el desperdicio de alimentos y promovemos un consumo más consciente y sostenible."
  },
  {
    question: "¿Puedo donar en nombre de una empresa?",
    answer: "Claro. Las empresas pueden donar alimentos, recursos económicos o incluso prestar sus vehículos en el programa Empresas al Volante."
  },
];

const FAQs = ({ activeAccordion, toggleAccordion }) => {
  return (
    <section className="lg:max-w-5xl mx-auto py-12 px-6">
      <div className="text-center mb-10">
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          Todo lo que necesitas saber sobre cómo apoyar o recibir ayuda del Banco Diocesano de Alimentos de los Altos.
        </p>
      </div>
      <FAQAccordion
        faqs={preguntas}
        activeIndex={activeAccordion}
        onToggle={toggleAccordion}
      />
    </section>
  );
};

export default FAQs;