import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const enlaces = [
    { nombre: "Inicio", href: "/" },
    { nombre: "Nosotros", href: "/nosotros" },
    { nombre: "Programas", href: "/programas" },
    { nombre: "Servicio Social", href: "/programas#servicio-social" },
    { nombre: "Beneficiarios", href: "/beneficiarios" },
    { nombre: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-32">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8">
            {enlaces.map((item, key) => (
              <div key={key} className="group relative">
                <button className="flex items-center gap-1 hover:text-amarilloLogo py-4 cursor-pointer">
                  <a href={item.href}> {item.nombre} </a>
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Logo Button */}
          <a className="lg:hidden" href="/">
            <img src="/assets/images/logoModoOscuro.png" alt="Logo" className="h-11" />
          </a>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <a 
              href="/donar" 
              className="relative bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors
                before:absolute before:h-[98%] before:w-[1px] before:left-[-20px] before:bg-[rgba(255,255,255,0.21)] before:content-[''] before:top-[1%]"
            >
              Dona Ahora
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 z-50 p-4 overflow-y-auto">
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl">×</button>
          </div>
          <nav className="space-y-4">
            {enlaces.map((item) => (
              <div key={item} className="border-b border-gray-700">
                <button className="w-full text-left py-3 flex justify-between items-center hover:text-amarilloLogo cursor-pointer">
                  <a href={item.href}> {item.nombre} </a>
                </button>
              </div>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navigation;