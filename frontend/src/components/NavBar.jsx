import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import imglogo from "../assets/usuario.png";
import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
  const [profileImage, setProfileImage] = useState("/placeholder.svg");
  const navigate = useNavigate();

  useEffect(() => {
    // Aquí deberías obtener la URL de la imagen de perfil del estudiante
    // Por ahora, usamos una imagen de placeholder
    setProfileImage(imglogo);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    navigate("/login");
  };

  const handleNotifications = () => {
    // Aquí puedes manejar la lógica para mostrar las notificaciones
    console.log("Mostrar notificaciones");
  };

  return (
    <>
      <BurgerMenu />
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white text-xl font-bold">Bienvenido</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleNotifications}
              className="text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-full"
            >
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notificaciones</span>
            </button>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
