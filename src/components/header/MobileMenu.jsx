import { Link } from "react-router";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 bg-white z-50">
      <div className="p-4">
        {/* Encabezado del menú móvil */}
        <div className="flex justify-between items-center mb-8">
          <img src="/assets/images/logo-2.svg" alt="AidUs" className="h-8" />
          <button onClick={onClose} className="p-2">
            ×
          </button>
        </div>

        {/* Contenido del menú */}
        <nav className="space-y-4">
          <AccordionMenu title="Home" items={""} />
          <AccordionMenu title="Pages" items={""} />
          {/* Resto de los elementos del menú */}
        </nav>
      </div>
    </div>
  );
};

// Componente Acordeón para submenús
const AccordionMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button 
        className="w-full flex justify-between items-center py-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      
      {isOpen && (
        <div className="pl-4 pb-2 space-y-2">
          {items.map((item, index) => (
            <Link 
              key={index}
              to={item.link}
              className="block py-1 text-gray-600 hover:text-orange-500"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;