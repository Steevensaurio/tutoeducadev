import { useState } from "react";
import libro from "../assets/libro3d.png";
import perfil from "../assets/pinia.svg";
import StudentInicio from "../components/StudentInicio";

export default function SideMenu({ fullname }) {
  const [activeItem, setActiveItem] = useState("Inicio");

  const menuItems = [
    {
      name: "Inicio",
      icon: "M10 2.5L2 8.5V17a1 1 0 001 1h4a1 1 0 001-1v-4h4v4a1 1 0 001 1h4a1 1 0 001-1V8.5l-8-6z",
    },
    {
      name: "Historial",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
    {
      name: "Notificaciones",
      icon: "M12 4v16m8-16H8a2 2 0 00-2 2v12a2 2 0 002 2h12V6a2 2 0 00-2-2z",
    },
    {
      name: "Settings",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    },
  ];

  return (
    <aside className="w-64 h-screen bg-blue-100 p-6 shadow-md overflow-y-auto">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 rounded-full mr-2">
          <img src={libro} alt="" />
        </div>
        <span className="font-semibold text-lg">TutoEduca</span>
      </div>

      <div className="mb-8 p-4 bg-blue-200 rounded-lg flex items-center">
        <div className="w-14 h-14 rounded-full mr-4 overflow-hidden flex-shrink-0">
          <img
            src={perfil}
            alt="Mascota"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-gray-700 font-semibold">{fullname}</h3>
          <p className="text-gray-600">Estudiante</p>
        </div>
      </div>

      <nav>
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center mb-4 w-full p-2 rounded-lg transition-colors duration-200 ${
              activeItem === item.name
                ? "bg-blue-400 text-white"
                : "text-gray-800 hover:bg-blue-400 hover:text-white"
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={item.icon}
              />
            </svg>
            <span>{item.name}</span>
            {activeItem === item.name && (
              <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
            )}
          </a>
        ))}
      </nav>
    </aside>
  );
}
