import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import React from "react";

const MidBar = () => (
  <div className="max-lg:hidden bg-white border-b py-4 px-4 lg:px-8 xl:px-32">
    <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto">
      {/* Logo */}
      <a href="/" className="mb-4 lg:mb-0">
        <img src="/assets/images/logo.png" alt="Logo" className="h-12" />
      </a>

      {/* Info Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <FiClock />, title: "Horario", text: "Lun - Vie: 8:00 a 16:00, Sab: 9:00 a 14:00" },
          { icon: <FiMapPin />, title: "Nuestro Domicilio", text: "Terrerito #1326, Tepatitlán, Jalisco" },
          { icon: <FiPhone />, title: "Contáctanos", text: "(378) 782 5552" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-full">
              {React.cloneElement(item.icon, { className: "text-orange-500 text-2xl" })}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MidBar;