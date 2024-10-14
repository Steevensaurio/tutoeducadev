import React, { useState } from "react";
import {
  Home,
  Book,
  Calendar,
  Settings,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";

const MenuItem = ({ icon: Icon, label, onClick }) => (
  <li className="mb-4">
    <button
      onClick={onClick}
      className="flex items-center w-full p-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200"
    >
      <Icon className="h-6 w-6 mr-4" />
      <span>{label}</span>
    </button>
  </li>
);

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Inicio" },
    { icon: Book, label: "Cursos" },
    { icon: Calendar, label: "Calendario" },
    { icon: Settings, label: "Configuración" },
    { icon: HelpCircle, label: "Ayuda" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="h-full flex flex-col pt-20 p-5">
          <ul>
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={item.icon}
                label={item.label}
                onClick={() => {
                  console.log(`Clicked on ${item.label}`);
                  setIsOpen(false);
                }}
              />
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
