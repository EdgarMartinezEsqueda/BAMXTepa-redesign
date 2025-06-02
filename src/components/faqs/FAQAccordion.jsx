import { FaCheck } from "react-icons/fa";

const FAQAccordion = ({ faqs, activeIndex, onToggle }) => (
  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-lg"
      >
        <button
          onClick={() => onToggle(index)}
          className="w-full text-left px-5 py-4 flex justify-between items-center text-verdeLogo font-medium hover:bg-gray-50 transition cursor-pointer"
        >
          {faq.question}
          <FaCheck
            className={`transition-transform duration-300 ${
              activeIndex === index ? "rotate-180" : ""
            }`}
          />
        </button>
        {activeIndex === index && (
          <div className="px-5 pb-4 text-gray-600">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
);

export default FAQAccordion;