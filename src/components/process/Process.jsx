import { FaBoxes, FaWarehouse, FaPeopleCarry, FaTruck, FaUserCheck, FaAppleAlt } from "react-icons/fa";

const ProcessSection = () => {
  const processItems = [
    {
      icon: <FaAppleAlt />,
      number: "01",
      title: "Acopio de Alimentos",
      numberBg: "#F74F22",
      iconColor: "#F74F22"
    },
    {
      icon: <FaBoxes />,
      number: "02",
      title: "Clasificación y Selección",
      numberBg: "#FFA415",
      iconColor: "#FFA415"
    },
    {
      icon: <FaWarehouse />,
      number: "03",
      title: "Almacenamiento",
      numberBg: "#0DB14C",
      iconColor: "#0DB14C"
    },
    {
      icon: <FaPeopleCarry />,
      number: "04",
      title: "Preparación de Despensas",
      numberBg: "#ED1A3B",
      iconColor: "#ED1A3B"
    },
    {
      icon: <FaTruck />,
      number: "05",
      title: "Distribución",
      numberBg: "#8139E7",
      iconColor: "#8139E7"
    },
    {
      icon: <FaUserCheck />,
      number: "06",
      title: "Seguimiento Social",
      numberBg: "#FF3662",
      iconColor: "#FF3662"
    }
  ];

  return (
    <section className="relative bg-gray-50 pt-32 pb-24 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute left-0 top-0 z-0">
        <img src="assets/images/process/shape1.svg" alt="" />
      </div>
      <div className="absolute right-0 top-0 z-0">
        <img src="assets/images/process/shape3.svg" alt="" />
      </div>
      <div className="absolute right-0 -bottom-10 z-0 animate-leaf">
        <img src="assets/images/process/shape4.svg" alt="" />
      </div>
      <div className="absolute left-0 bottom-0 z-[-1]">
        <img src="assets/images/process/shape5.svg" alt="" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-verdeLogo">
            Nuestro Proceso
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-dark-gray">
            Desde la recepción de alimentos hasta su entrega a quienes más lo necesitan, cada paso es clave para combatir el hambre en nuestra región.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {processItems.map((item, index) => (
            <div key={index} className="w-[240px] text-center relative">
              <div className="relative mx-auto mb-4 w-36 h-36 rounded-full bg-white shadow-lg flex items-center justify-center">
                <span className="absolute top-2 right-2 w-8 h-8 rounded-full text-sm font-bold text-white flex items-center justify-center" style={{ backgroundColor: item.numberBg }} >
                  {item.number}
                </span>
                <div className="text-5xl" style={{ color: item.iconColor }}>
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-grisLogo">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;