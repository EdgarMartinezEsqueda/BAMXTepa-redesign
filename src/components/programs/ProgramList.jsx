import { FaHandsHelping, FaGift, FaDonate, FaFirstAid, FaHeartbeat } from "react-icons/fa";

const iconMap = { FaHandsHelping, FaGift, FaDonate, FaFirstAid, FaHeartbeat };

const ProgramList = ({ programas, activeId, onSelect }) => (
  <>
    <h3 className="p-5 text-xl font-bold">Programas Disponibles</h3>
    <ul>
      {programas.map((p) => {
        const IconComponent = iconMap[p.iconName];
        return (
          <li key={p.id}>
            <button
              onClick={() => onSelect(p.id)}
              className={`flex items-center w-full p-5 border-b border-gray-100 text-left cursor-pointer ${
                activeId === p.id
                  ? "bg-amarilloLogo font-bold"
                  : "hover:bg-gray-50"
              }`}
            >
              <span className="mr-3 text-verdeLogo text-xl">
                {IconComponent && <IconComponent />}
              </span>
              <span>{p.title}</span>
            </button>
          </li>
        );
      })}
    </ul>
  </>
);

export default ProgramList;